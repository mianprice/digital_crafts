import React from 'react';

export class MovieWidget extends React.Component {
	render() {
		return (
			<div className="main">
				<div className="search">
					<div className="searchTitle">Movie Search</div>
					<input className="searchInput" placeholder="Enter search terms here:" value={this.props.search.query} onChange={(event) => this.props.update_query(event)}/>
				</div>
			</div>
		);
	}
};
