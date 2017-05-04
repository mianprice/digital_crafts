import React from 'react';

export class MovieWidget extends React.Component {
	render() {
		return (
			<div><span>Hello and {this.props.base}</span></div>
		);
	}
};
