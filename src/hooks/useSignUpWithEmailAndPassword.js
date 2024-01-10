
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth, firestoreDb } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore";
const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
            alert("Please fill all the feilds")
            return
        }

        try {

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) { alert(error); return }

            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio: '',
                    profilePicURL: '',
                    friends: [],
                    posts: [],
                    stories: [],
                    createdAt: Date.now(),

                }
                await setDoc(doc(firestoreDb, 'users', newUser.user.uid), userDoc);
                localStorage.setItem('user-info', JSON.stringify(userDoc));
            }
        } catch (error) {
            alert(error)
        }
    }
    return { loading, signup, error }
}
export default useSignUpWithEmailAndPassword