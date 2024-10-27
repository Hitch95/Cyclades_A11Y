import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/protected',
    element: <ProtectedRoute></ProtectedRoute>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
