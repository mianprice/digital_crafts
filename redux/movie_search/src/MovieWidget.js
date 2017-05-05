import React from 'react';

export class MovieWidget extends React.Component {
	render() {
		let movie = this.props.search.movieData;
		let movieDisplay;
		if (movie) {
			movieDisplay = (
				<div className="movies">
					{movie.results.map((element, idx) =>
						<div className="movie" key={idx}>
							<div className="movie_info">{element.overview}</div>
							<br/>
							<div className="movie_info">{element.release_date}</div>
							<br/>
							<div className="movie_info">{element.title}</div>
							<br/>
							<div className="movie_info">{element.popularity}</div>
							<br/>
							<div className="movie_info">{element.vote_average}</div>
						</div>
					)}
				</div>
			);
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
