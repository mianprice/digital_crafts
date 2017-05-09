import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Page.action';

class Page extends React.Component {
  componentWillReceiveProps(newProps) {
    if (this.props.params.title !== newProps.params.title) {
      this.props.fetchPage(newProps.params.title);
    }
  }
  componentDidMount() {
    this.props.fetchPage(this.props.params.title)
  }
  render() {
    function wikiLinkify(contents) {
      return contents.replace(/([a-z]*)([A-Z][a-z]+){1,}/g, function(match) {
        return `<a href="#/page/${match}">${match}</a>`;
      });
    }
    function createMarkup(c) {
      return {__html: wikiLinkify(c)};
    }
    function page_content(c) {
      return <div dangerouslySetInnerHTML={createMarkup(c)}></div>
    }
    console.log(this.props.page);
    let pageInfo = this.props.page;
    let pageContent = page_content(pageInfo.content);
    let body_content = pageInfo.editing ? (
      <textarea className="body_edit" value={pageInfo.content} onChange={event => this.props.contentUpdate(event.target.value)}/>
    ) : (pageInfo.newPage ? (
      <div>{"This page doesn't exist yet."}</div>
    ) : pageContent);
    let save_control = <div className="base_link save_control" onClick={(event) => {this.props.updatePage(pageInfo.title,pageInfo.content,this.props.login.token);}}>Save Changes</div>;
    let editButton = this.props.login.token ? (
      <div className="edit_button base_link" onClick={this.props.toggleEdit}>{pageInfo.newPage ? "Create this page" : "Edit Page"}</div>
    ) : "";
    let editedBy = pageInfo.last_edit ? (
      <div className="last_edited">
        <div>Page last edited by: {pageInfo.last_edit}</div>
      </div>
    ) : "";
    return (
      <div className="page_i">
        <div className="page_header">
          <div className="page_title">
            <div>{pageInfo.title}</div>
          </div>
          {editButton}
          {editedBy}
        </div>
        <div className="page_body">
          {body_content}
          {pageInfo.editing ? save_control : ""}
        </div>
      </div>
    );
  }
}

const PageContainer = ReactRedux.connect(
  state => ({
    page: state.page,
    login: state.login
  }),
  actions
)(Page);

export default PageContainer;
