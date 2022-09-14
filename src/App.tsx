import { BrowserRouter } from 'react-router-dom';
import Router from '@/router';
import AuthRouter from '@/router/auth-router';

function App() {
	return (
		<BrowserRouter>
			<AuthRouter>
				<Router />
			</AuthRouter>
		</BrowserRouter>
	);
}

export default App;
