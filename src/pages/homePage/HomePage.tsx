/* eslint-disable @typescript-eslint/no-unused-vars */
import BlogCard from '../../components/BlogCard';
import { useGetsBlogQuery } from '../../redux/features/blog/blogApi';
import { TBlog } from '../../redux/features/favoriteBlog/favoriteBlogSlice';

const HomePage = () => {
	const { data: blogs, isLoading } = useGetsBlogQuery();

	if (isLoading) return <div className='text-center mt-8'>Loading...</div>;
	// if (error) return <div className='text-center mt-8'>Error: {error}</div>;
	return (
		<div className=' px-4 py-8'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{blogs && blogs?.data?.map((blog: TBlog) => <BlogCard key={blog.id} blog={blog} />)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
