// Main Imports
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Import Home
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
    	<div className='container px-3'>
			<Routes>
				<Route path='/' element={ <HomePage /> } />
			</Routes>
		</div>
    </div>
  );
}

export default App;
