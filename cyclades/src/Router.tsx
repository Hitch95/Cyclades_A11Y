import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import HandleSubscription from './pages/HandleSubscription';
import Search from './pages/Search';
import CandidatePage from './pages/Candidate';

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
    path: '/handle-subscription',
    element: <HandleSubscription />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/candidate/:id',
    element: <CandidatePage />,
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
