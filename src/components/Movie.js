import React from 'react'
import { Link } from "react-router-dom";
function Movie({ movie }) {
	const img = movie.images.find(img => img.type === 'POSTER')
	return (
		<Link to={'/movie-details/' + movie.id}>
			<div className="d-flex flex-column align-items-center">
				<img src={img.url} alt={movie.title} />
				<h4 className="text-center">{movie.title}</h4>
			</div>
		</Link>
	)
}

export default Movie
