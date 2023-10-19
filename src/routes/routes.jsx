import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import SingleBrand from '../pages/SingleBrand';
import MovieDetails from '../pages/MovieDetails';
import Cart from '../pages/Cart';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/brands/:name',
                element: <SingleBrand />
            },
            {
                path: "/movieDetails/:id",
                element: <MovieDetails />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
])

export default routes;
