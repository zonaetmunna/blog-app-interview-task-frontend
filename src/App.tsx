import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
import Loading from './components/atoms/Loading';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Suspense fallback={<Loading />}>
						<RouterProvider router={router} />
						<Toaster />
					</Suspense>
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;
