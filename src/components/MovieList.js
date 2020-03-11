import React, { Component } from 'react'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import MovieRow from './MovieRow'

export class MovieList extends Component {

	state = {
		movies: [],
		loadMovie: {
			page: 1,
			perPage: 20,
			region: 'ID',
			hasMore: true
		},
	}

	componentDidMount() {
		this.fetchMovies(this.state.loadMovie)
	}

	fetchMovies = (params) => {
		axios.get('https://cdn-discover.hooq.tv/v1.2/discover/feed', { params })
			.then(res => {
				this.setState({
					movies: this.state.movies.concat(res.data.data.filter(movie => movie.type === 'Multi-Title-Manual-Curation' && movie.data !== null
					)),
					loadMovie: {
						page: this.state.loadMovie.page + 1,
						perPage: 20,
						region: 'ID',
						hasMore: res.data.pagination.totalPages > this.state.loadMovie.page ? true : false
					},
				})
			})
			.catch(err => console.log(err))
	}
	render() {

		return (
			<InfiniteScroll
				dataLength={this.state.movies.length}
				next={this.fetchMovies.bind(this, this.state.loadMovie)}
				hasMore={this.state.loadMovie.hasMore}
				loader={<div className="d-flex justify-content-center"><div className="lds-ripple"><div></div><div></div></div></div>}
			>
				{this.state.movies.map((row, index) => <MovieRow key={index} row={row} />)}
			</InfiniteScroll>
		)

	}
}



export default MovieList
