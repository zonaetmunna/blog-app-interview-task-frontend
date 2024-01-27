import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='bg-gray-400 p-4'>
			<div className='container mx-auto'>
				<div className=' flex items-center justify-between'>
					<Link to='/' className='text-white text-2xl font-bold'>
						My Blog App
					</Link>
					<ul className='flex space-x-4'>
						<li>
							<Link to='/' className='text-white hover:text-gray-300'>
								Home
							</Link>
						</li>
						<li>
							<Link to='/favorite' className='text-white hover:text-gray-300'>
								Favorites
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
