import { useState } from 'react';
import { removeFavorite } from '../../redux/features/favoriteBlog/favoriteBlogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BookmarkSlashIcon } from '@heroicons/react/16/solid';
import { TBlog } from '../../types/types';
import Button from '../../components/atoms/Button';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const FavoriteBlogPage = () => {
	const dispatch = useAppDispatch();
	const { favoritePosts } = useAppSelector((state) => state.favoritePost);
	const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

	const handleRemoveFromFavorites = (favoritePosts: TBlog) => {
		dispatch(removeFavorite(favoritePosts));
		toast.success('Blog removed from favorites!');
	};

	const toggleDescription = (postId: string) => {
		setExpandedPostId((prevId) => (prevId === postId ? null : postId));
	};

	return (
		<div className=' px-4 py-8'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold mb-4 text-center'>Your Favorite Blogs</h1>

				{favoritePosts.length === 0 ? (
					<p className='text-gray-600 text-center my-16'>
						You haven't added any blog post to favorites yet.
					</p>
				) : (
					<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{favoritePosts.map((post) => (
							<li
								key={post.id}
								className='bg-white shadow-lg px-5 py-4 rounded-lg relative space-y-6'>
								<Button
									type='button'
									className='absolute top-2 right-2 text-gray-500 hover:text-red-500'
									onClick={() => handleRemoveFromFavorites(post)}>
									<BookmarkSlashIcon className='h-6 w-6' />
								</Button>

								<h2 className='text-xl font-semibold mb-2'>{post.title}</h2>

								<p className='text-gray-700'>
									{expandedPostId === post.id ? post.body : `${post.body.slice(0, 100)}...`}
								</p>

								<div className='flex justify-start items-center gap-5'>
									<Button
										type='button'
										className=' bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
										onClick={() => toggleDescription(post.id)}>
										{expandedPostId === post.id ? 'Less' : 'More'}
									</Button>
									<Link
										to={`/blog-details/${post.id} `}
										className=' bg-gray-400 text-white font-semibold px-4 py-2 rounded-md'>
										Details
									</Link>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default FavoriteBlogPage;
