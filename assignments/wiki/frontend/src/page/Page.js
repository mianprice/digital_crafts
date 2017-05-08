import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Page.action';

class Page extends React.Component {
  componentWillReceiveProps(newProps) {
    if (this.props.params.name !== newProps.params.name) {
      this.props.fetchPage(newProps.params.title);
    }
  }
  componentDidMount() {
    this.props.fetchPage(this.props.params.title)
  }
  render() {
    let pageInfo = this.props.page;
    return (
      <div>
        <h1>{pageInfo.title}</h1>
        <p>{pageInfo.content}</p>
      </div>
    );
  }
}

const PageContainer = ReactRedux.connect(
  state => ({
    page: state.page
  }),
  actions
)(Page);

export default PageContainer;
