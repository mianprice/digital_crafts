import {MovieWidget} from './MovieWidget';
import actions from './MovieWidget.actions';
import * as ReactRedux from 'react-redux';

export const MovieWidgetContainer = ReactRedux.connect(
	state => ({base: state.base}),
	actions
)(MovieWidget);
