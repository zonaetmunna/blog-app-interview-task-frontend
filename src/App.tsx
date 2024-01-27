import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={router} />
				</PersistGate>
			</Provider>
		</>
	);
}

export default App;