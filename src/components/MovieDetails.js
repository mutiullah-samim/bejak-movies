import React, { Component } from 'react'
import axios from 'axios';


export class MovieDetails extends Component {

	state = {
		id: this.props.match.params.id,
		details: {},
		detailFetched: false
	}

	componentDidMount() {
		axios.get('https://cdn-discover.hooq.tv/v1.2/discover/titles/' + this.state.id)
			.then(res => {
				console.log(res)
				this.setState({
					details: res.data.data,
					detailFetched: true
				})
			}).catch(err => console.log(err))
	}

	render() {
		if (!this.state.detailFetched) {
			return (<div className="d-flex justify-content-center"><div className="lds-ripple"><div></div><div></div></div></div>)
		} else {

			let banner;
			const banner_img = this.state.details.images.find(img => img.type === 'SPOTLIGHT')
			const banner_img2 = this.state.details.images.find(img => img.type === 'BACKGROUND')
			banner = banner_img || banner_img2
			const poster_img = this.state.details.images.find(img => img.type === 'POSTER')

			let actors = [];
			let directors = []
			this.state.details.people.filter(actor => actor.role !== 'DIRECTOR' ? actors.push(actor.name) : '')
			this.state.details.people.filter(actor => actor.role === 'DIRECTOR' ? directors.push(actor.name) : '')
			actors = actors.join(', ')
			directors = directors.join(', ')

			let labels = [];
			this.state.details.tags.map(tag => labels.push(tag.label))
			labels = labels.join(', ')
			return (
				<div className="d-flex flex-column w-100">
					<div className="d-flex w-100 position-relative" >
						<img className="banner_img w-100 h-auto" src={banner.url} alt={this.state.details.title} />
						<div className="video-play-button" href="#">
							<span></span>
						</div>
					</div>
					<div className="d-flex flex-row p-5">
						<div>
							<img className="poster_img" src={poster_img.url} alt={this.state.details.title} />
						</div>
						<div className="d-flex flex-column justify-content-center ml-4">
							<h4 className="primary-text">{this.state.details.title}</h4>
							<div className="d-flex flex-row second-text-size">
								<div className="d-flex flex-column flex-1 mr-3">
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Genre: </span>
										<div className="primary-text">
											{labels}
										</div>
									</div>
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Actor: </span>
										<div className="primary-text">
											{actors}
										</div>
									</div>
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Director: </span>
										<div className="primary-text">
											{directors}
										</div>
									</div>
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Description: </span>
										<div className="primary-text">
											{this.state.details.short_description}
										</div>
									</div>
								</div>
								<div className="d-flex flex-column flex-1">
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Release: </span>
										<div className="primary-text">
											{this.state.details.meta.releaseYear}
										</div>
									</div>
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Languages: </span>
										<div className="primary-text">
											{this.state.details.languages.join(', ')}
										</div>
									</div>
									<div className="d-flex flex-row">
										<span className="secondary-text mr-2">Age Rating: </span>
										<div className="primary-text">
											{this.state.details.meta.ageRating}
										</div>
									</div>
								</div>
								<div className="d-flex flex-column">
									<div className="primary-btn mb-3">Stream in HD</div>
									<div className="primary-btn">Download in HD</div>
								</div>

							</div>


						</div>

					</div>
				</div >
			)
		}

	}

}

export default MovieDetails
