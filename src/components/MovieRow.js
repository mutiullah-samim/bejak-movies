import React from 'react'
import Slider from "react-slick";
import Movie from './Movie';


function MovieRow({ row }) {

	const slider_settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4
	}

	return (
		<>
			<div className="d-felx flex-column w-100 mt-5">
				<h3 className="px-3">{row.row_name}</h3>
				<div className="px-3 w-100">
					<Slider {...slider_settings}>
						{row.data.map((movie, index) => <Movie key={index} movie={movie} />)}
					</Slider>
				</div>
			</div>
		</>
	)
}

export default MovieRow
