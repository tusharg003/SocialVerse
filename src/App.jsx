import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import useAuthStore from './store/authStore';

const App = () => {
  const authUser = useAuthStore((state) => state.user);
  console.log(authUser);
  return (
    <PageLayout>
      <Routes>
        <Route
          path='/'
          element={authUser ? <HomePage /> : <Navigate to={'/auth'} />}></Route>
        <Route
          path='/auth'
          element={!authUser ? <AuthPage /> : <Navigate to={'/'} />}></Route>
        <Route path='/:username' element={<ProfilePage />}></Route>
      </Routes>
    </PageLayout>
  );
};
export default App;
