import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
	return (
		<div className='w-full'>
			<Navbar />
			<div className=' px-4 py-8'>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
