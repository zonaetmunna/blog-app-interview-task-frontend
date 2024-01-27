import { TBlog } from '../redux/features/favoriteBlog/favoriteBlogSlice';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }: { blog: TBlog }) => {
	return (
		<div className='bg-white shadow p-4 rounded-lg'>
			<Link to={`/blog-details/${blog.id}`} className='block'>
				<h2 className='text-xl font-semibold mb-2'>{blog.title}</h2>
			</Link>
			<p className='text-gray-700'>{blog.body}</p>
		</div>
	);
};

export default BlogCard;
