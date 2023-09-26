import { Navigate, createBrowserRouter } from 'react-router-dom'
import NotFound from '../error/NotFound';
import Home from '../views/Home';
import GuestLayout from '../layouts/GuestLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'home'} />
            },
            {
                path: 'home',
                element: <Home />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }
])

export default router;