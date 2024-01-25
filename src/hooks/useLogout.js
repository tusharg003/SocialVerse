import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
    const [signOut, loggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')

            console.log('userloggedout')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }
    return { handleLogout, loggingOut, error }
}
export default useLogout