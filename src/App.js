import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import MovieList from './components/MovieList';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<Router>
			<Header />
			<Route exact path="/" component={MovieList} />
			<Route path="/movie-details/:id" component={MovieDetails} />
		</Router>
	);
}

export default App;




