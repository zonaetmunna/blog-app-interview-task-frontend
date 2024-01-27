import { useState } from 'react';
import { removeFavorite } from '../../redux/features/favoriteBlog/favoriteBlogSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { BookmarkSlashIcon } from '@heroicons/react/16/solid';
import { TBlog } from '../../types/types';

const FavoriteBlogPage = () => {
	const dispatch = useAppDispatch();
	const { favoritePosts } = useAppSelector((state) => state.favoritePost);
	const [expandedPostId, setExpandedPostId] = useState<string | null>(null);

	const handleRemoveFromFavorites = (favoritePosts: TBlog) => {
		dispatch(removeFavorite(favoritePosts));
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
							<li key={post.id} className='bg-white shadow p-4 rounded-lg relative'>
								<button
									className='absolute top-2 right-2 text-gray-500 hover:text-red-500'
									onClick={() => handleRemoveFromFavorites(post)}>
									<BookmarkSlashIcon className='h-6 w-6' />
								</button>
								<h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
								<p className='text-gray-700'>
									{expandedPostId === post.id ? post.body : `${post.body.slice(0, 100)}...`}
								</p>
								<button
									className='mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
									onClick={() => toggleDescription(post.id)}>
									{expandedPostId === post.id ? 'Less' : 'More'}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default FavoriteBlogPage;
