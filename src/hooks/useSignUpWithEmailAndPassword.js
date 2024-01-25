import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth, firestoreDb } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
            showToast('Error', 'Please fill all the feilds', 'error')
            return
        }

        try {

            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser && error) {
                showToast('Error', error.message, 'error');
                return;
            }
            if (newUser) {
                // console.log(user);
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
                showToast('Success', 'New profile created', 'success')
            }
        } catch (error) {
            showToast('Error', error, 'error')
        }
    }
    return { loading, signup, error }
}
export default useSignUpWithEmailAndPassword