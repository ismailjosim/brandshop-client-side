import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import SingleBrand from '../pages/SingleBrand'
import MovieDetails from '../pages/MovieDetails'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Private from './Private'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/brands/:name',
                element: <SingleBrand />,
            },
            {
                path: '/movieDetails/:id',
                element: (
                    <Private>
                        <MovieDetails />
                    </Private>
                ),
            },
            {
                path: '/cart',
                element: (
                    <Private>
                        <Cart />
                    </Private>
                ),
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
])

export default routes
