import { useEffect, useState } from 'react';
import BlogCard from '../../components/molecules/BlogCard';
import { useGetsBlogQuery } from '../../redux/features/blog/blogApi';
import { useAppSelector } from '../../redux/hooks';
import { TBlog } from '../../types/types';

const HomePage = () => {
	const { data, isLoading } = useGetsBlogQuery();
	const blogs = data?.data;

	const [isFavorite, setIsFavorite] = useState(false);

	const { favoritePosts } = useAppSelector((state) => state.favoritePost);

	useEffect(() => {
		if (blogs && favoritePosts.some((post) => blogs.map((blog) => blog.id).includes(post.id))) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [blogs, favoritePosts]);

	if (isLoading) return <div className='text-center mt-8'>Loading...</div>;
	// if (error) return <div className='text-center mt-8'>Error: {error}</div>;

	return (
		<div className=' px-4 py-8'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{blogs &&
						blogs?.map((blog: TBlog) => (
							<BlogCard
								key={blog.id}
								blog={blog}
								isFavorite={isFavorite}
								setIsFavorite={setIsFavorite}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
