import React from 'react';

export class MovieWidget extends React.Component {
	render() {
		let movie = this.props.search.movieData;
		let movieDisplay;
		if (movie) {
			let movieImages = movie.results.filter((element) => {
				return element.poster_path !== null;
			});
			if (this.props.search.summary) {
				let current = movie.results.filter((element) => {
					return element.id === this.props.search.current_movie;
				});
				current = current[0];
				movieDisplay = (
					<div className="summary">
						<div className="m_title">{current.title}</div>
						<div className="m_release">{current.release_date}</div>
						<div className="m_overview">{current.overview}</div>
						<div className="m_votes">{current.vote_average}</div>
						<div className="m_back" onClick={(event) => this.props.back_to_results()}>Back to Search Results</div>
					</div>
				);
			} else {
				movieDisplay = (
					<div className="movies">
						{movieImages.map((element, idx) =>
							<div className="movie" key={idx} onClick={(event) => this.props.displaySummary(element.id)}>
								<img src={'https://image.tmdb.org/t/p/w500' + element.poster_path} alt={element.title}/>
							</div>
						)}
					</div>
				);
			}
		} else if (this.props.search.isFetching) {
			movieDisplay = <div><img src="/gears.gif" alt="loading"/></div>;
		} else if (this.props.search.error) {
			movieDisplay = <div>{this.props.search.error}</div>;
		}
		return (
			<div className="main">
				<div className="search">
					<div className="searchTitle">Movie Search</div>
					<input className="searchInput" placeholder="Enter search terms here:" value={this.props.search.query} onChange={(event) => this.props.update_query(event)}/>
					<button onClick={() => this.props.get_results(this.props.search.query)}>Search</button>
				</div>
				{movieDisplay}
			</div>
		);
	}
};
