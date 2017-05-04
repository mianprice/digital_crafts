import {MovieWidget} from './MovieWidget';
import * as actions from './MovieWidget.actions';
import * as ReactRedux from 'react-redux';

export const MovieWidgetContainer = ReactRedux.connect(
	state => ({search: state.search}),
	actions
)(MovieWidget);
