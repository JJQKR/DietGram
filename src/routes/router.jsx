import { createBrowserRouter } from 'react-router-dom';
import Test from '../Test';
import DefaultLayout from '../layouts/DefaultLayout';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyPostPage from '../pages/MyPostPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from '../pages/SignUpPage';
import UpdatePage from '../pages/UpdatePage';
import UploadPage from '../pages/UploadPage';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/detail/:detailId', element: <DetailPage /> },
      { path: '/mypost', element: <MyPostPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/profile/:profileId', element: <ProfilePage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/update', element: <UpdatePage /> },
      { path: '/upload', element: <UploadPage /> },
      { path: '/test', element: <Test /> }
    ]
  }
]);

export default router;
