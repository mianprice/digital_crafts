import React from 'react';

export class MovieWidget extends React.Component {
	render() {
		let movie = this.props.search.movieData;
		let movieDisplay;
		if (movie) {
			let movieImages = movie.results.filter((element) => {
				return element.poster_path !== null;
			});
			movieDisplay = (
				<div className="movies">
					{movieImages.map((element, idx) =>
						<div className="movie" key={idx}>
							<img src={'https://image.tmdb.org/t/p/w500' + element.poster_path} alt={element.title}/>
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
