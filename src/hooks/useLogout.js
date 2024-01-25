import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
    const [signOut, loggingOut, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore(state => state.logout)

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
            logoutUser()
            showToast('Message', 'Logged Out successfully', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
    }
    return { handleLogout, loggingOut, error }
}
export default useLogout