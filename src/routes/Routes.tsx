import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/homePage/HomePage';
import BlogDetailsPage from '../pages/BlogDetailsPage/BlogDetailsPage';
import Error from '../layout/Error';
import FavoriteBlogPage from '../pages/favoriteBlogPage/FavoriteBlogPage';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <Error />,
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/blog-details/:id',
				element: <BlogDetailsPage />,
			},
			{
				path: '/favorite',
				element: <FavoriteBlogPage />,
			},
		],
	},
]);

export default router;
