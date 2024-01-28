import { Link } from 'react-router-dom';
import { TBlog } from '../../types/types';
import Button from '../atoms/Button';
import { useAppDispatch } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/features/favoriteBlog/favoriteBlogSlice';
import { ArrowTopRightOnSquareIcon, BookmarkIcon } from '@heroicons/react/16/solid';
import toast from 'react-hot-toast';

type TBlogCardProps = {
	blog: TBlog;
	isFavorite: boolean;
	setIsFavorite: (isFavorite: boolean) => void;
};

const BlogCard = ({ blog, isFavorite, setIsFavorite }: TBlogCardProps) => {
	const dispatch = useAppDispatch();

	const handleToggleFavorite = () => {
		dispatch(toggleFavorite(blog as TBlog));
		setIsFavorite(!isFavorite);
		toast.success('Blog added to favorites!');
	};

	return (
		<div className='bg-white hover:bg-gray-100 shadow-lg p-4 rounded-lg flex flex-col space-y-5'>
			<div className='flex justify-end items-center my-3 gap-5'>
				<Link
					to={`/blog-details/${blog.id}`}
					className='mt-4 bg-gray-400 text-white px-4 py-2 rounded-md flex justify-between items-center space-x-3'>
					<span>Read More</span>
					<span>
						<ArrowTopRightOnSquareIcon className='h-6 w-6' />
					</span>
				</Link>

				<Button
					type='button'
					className={`mt-4 px-4 py-2 rounded-md bg-gray-500
					text-white font-semibold`}
					onClick={handleToggleFavorite}>
					<BookmarkIcon className='h-6 w-6' />
				</Button>
			</div>
			<Link to={`/blog-details/${blog.id}`} className='block'>
				<h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
			</Link>
			<p className='text-gray-700'>{blog.body.slice(0, 150)}</p>
		</div>
	);
};

export default BlogCard;
