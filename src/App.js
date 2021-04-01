import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
	return (
		<div className="container">
			<Header />

			<Switch>
				<Route path='/' exact component={Home} />
			</Switch>

			<Footer />
		</div>

	);
}

export default App;
