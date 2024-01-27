/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const BlogDetailsPage = lazy(() => import('../pages/BlogDetailsPage/BlogDetailsPage'));
import Error from '../layout/Error';
const FavoriteBlogPage = lazy(() => import('../pages/favoriteBlogPage/FavoriteBlogPage'));

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
