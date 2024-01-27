import { useParams } from 'react-router-dom';
import {
	TComment,
	useGetCommentsForBlogQuery,
	useGetSingleBlogQuery,
} from '../../redux/features/blog/blogApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { TBlog, toggleFavorite } from '../../redux/features/favoriteBlog/favoriteBlogSlice';
import { useEffect, useState } from 'react';
import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/react/16/solid';

const BlogDetailsPage = () => {
	const { id } = useParams();

	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useAppDispatch();

	const { data: blogData } = useGetSingleBlogQuery(Number(id));
	const blog = blogData?.data as TBlog;

	const { data: comments } = useGetCommentsForBlogQuery(Number(id));

	const { favoritePosts } = useAppSelector((state) => state.favoritePost);

	useEffect(() => {
		if (blog && favoritePosts.some((post) => post.id === blog?.id)) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [blog, favoritePosts]);

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(blog as TBlog));
		setIsFavorite(!isFavorite);
	};

	return (
		<div className='px-4 py-8'>
			<div className='container mx-auto '>
				<div className='flex items-center justify-start space-x-10'>
					<h1 className='text-3xl font-bold'>{blog?.title}</h1>
					<button
						className={`mt-4 px-4 py-2 rounded-md ${
							isFavorite ? 'bg-yellow-500' : 'bg-gray-500'
						} text-white font-semibold`}
						onClick={handleToggleFavorite}>
						{isFavorite ? (
							<BookmarkSlashIcon className='h-6 w-6' />
						) : (
							<BookmarkIcon className='h-6 w-6' />
						)}
					</button>
				</div>

				{blogData && (
					<div className='bg-white shadow p-6 rounded-lg'>
						<p className='text-gray-800'>{blog?.body}</p>

						{/* Comments section */}
						{comments && (
							<div className='mt-8'>
								<h3 className='text-xl font-semibold mb-4'>Comments</h3>
								{comments?.data?.map((comment: TComment) => (
									<div key={comment?.id} className='border border-gray-300 p-4 mb-4 rounded-lg'>
										<p className='text-gray-700'>{comment?.body}</p>
										<p className='text-gray-500 mt-2'>- {comment?.name}</p>
									</div>
								))}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogDetailsPage;
