import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// let contact_list = [];
// contact_list.push(new Contact('Alice','555-555-5555','alice@fake.com','none',false));
// contact_list.push(new Contact('Bob','555-555-5555','alice@fake.com','family',false));
// contact_list.push(new Contact('Carol','555-555-5555','alice@fake.com','friend',true));
// contact_list.push(new Contact('Dan','555-555-5555','alice@fake.com','coworker',false));

// class AddContact extends React.Component {
//   constructor(props) {
//     super();
//     this.state = props.state;
//   }
//   render() {
//     return (
//       <div className={this.state.covered ? "add_contact" : "noshow"}>
//         <div className="add_title"><div className="text_contain emph_text">Add New Contact</div></div>
//         <div><div className="text_contain">Name: </div></div>
//         <input className="form-control" type="text" value={this.state.name} onChange={event => {this.makeStateChange('name',event)}}/>
//         <div><div className="text_contain">Phone: </div></div>
//         <input className="form-control" type="tel" value={this.state.phone} onChange={event => {this.makeStateChange('phone',event)}}/>
//         <div><div className="text_contain">Email: </div></div>
//         <input className="form-control" type="email" value={this.state.email} onChange={event => {this.makeStateChange('email',event)}}/>
//         <div><div className="text_contain">Type: </div></div>
//         <select className="form-control" onChange={event => {this.makeStateChange('type',event)}}>
//           <option value="none">None</option>
//           <option value="family">Family</option>
//           <option value="friend">Friend</option>
//           <option value="coworker">Coworker</option>
//         </select>
//         <div id="creator_container"><div className="create_contact add_control"><div className="text_contain" onClick={event => {this.addContact()}}>Create Contact</div></div></div>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      edit_id: undefined,
      name: '',
      phone: '',
      email: '',
      type: 'none',
      favorite: false,
      covered: false,
      fave_filter: false
    };
  }
  componentDidMount() {
    $.get('http://localhost:3001/api/contacts')
      .then((data) => {
        this.setState({
          contacts: data
        });
      });
  }
  makeStateChange(str,event) {
    let x = this.state;
    x[str] = event.target.value;
    this.setState(x);
  }
  covered(bool) {
    this.setState({
      covered: bool
    });
  }
  addContact() {
    let c = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      type: this.state.type
    };
    if (this.state.edit_id !== undefined) {
      c.id = this.state.edit_id;
      $.ajax({
        method: 'PUT',
        url: 'http://localhost:3001/api/contacts',
        data: JSON.stringify(c),
        contentType: 'application/json'
      }).then((data) => {
        console.log(data);
        let current = this.state.contacts.filter((element) => {
          return element.id !== this.state.edit_id;
        });
        current.push(data);
        this.setState({
          contacts: current,
          edit_id: undefined,
          name: '',
          phone: '',
          email: '',
          type: 'none',
          favorite: false,
          covered: false
        });
      });
    } else {
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3001/api/contacts',
        data: JSON.stringify(c),
        contentType: 'application/json'
      }).then((data) => {
        let current = this.state.contacts;
        current.push(data);
        this.setState({
          contacts: current,
          edit_id: undefined,
          name: '',
          phone: '',
          email: '',
          type: 'none',
          favorite: false,
          covered: false
        });
      });
    }
  }
  editContact(idx) {
    let current = this.state;
    let editing = this.state.contacts.filter((element) => {
      return element.id === idx;
    });
    editing = editing[0];
    current.name = editing.name;
    current.phone = editing.phone;
    current.email = editing.email;
    current.type = editing.type;
    current.covered = true;
    current.edit_id = idx;
    this.setState(current);
  }
  deleteContact(idx) {
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3001/api/contacts/${idx}`,
    }).then((data) => {
      let current = this.state.contacts.filter((element) => {
        return element.id !== idx;
      });
      this.setState({
        contacts: current,
        covered: false
      });
    });
  }
  toggleFave(idx) {
    let c = this.state.contacts;
    $.ajax({
      method: 'PUT',
      url: `http://localhost:3001/api/favorite/${idx}`
    }).then((data) => {
      let current;
      this.state.contacts.filter((element, index) => {
        if (element.id === idx) {
          current = index;
        }
        return element.id === idx;
      });
      c[current] = data;
      this.setState({contacts: c});
    });
  }
  toggleFaveFilter() {
    this.setState({
      fave_filter: !this.state.fave_filter
    });
  }
  render() {
    let current_contacts = this.state.contacts.map((element,idx) => {
      element.idx = idx;
      return element;
    });
    if (this.state.fave_filter) {
      current_contacts = current_contacts.filter((element) => {
        return element.favorite;
      });
    }
    console.log(this.state.contacts);
    return (
      <div className="app">
        <div className={this.state.covered ? "add_contact_wrap" : "noshow"}>
          <div className={this.state.covered ? "add_contact" : "noshow"}>
            <div className="add_title"><div className="text_contain emph_text">{this.state.edit_id !== undefined ? "Edit Contact" : "Add New Contact"}</div></div>
            <div><div className="text_contain">Name: </div></div>
            <input className="form-control" type="text" value={this.state.name} onChange={event => {this.makeStateChange('name',event)}}/>
            <div><div className="text_contain">Phone: </div></div>
            <input className="form-control" type="tel" value={this.state.phone} onChange={event => {this.makeStateChange('phone',event)}}/>
            <div><div className="text_contain">Email: </div></div>
            <input className="form-control" type="email" value={this.state.email} onChange={event => {this.makeStateChange('email',event)}}/>
            <div><div className="text_contain">Type: </div></div>
            <select className="form-control" value={this.state.type} onChange={event => {this.makeStateChange('type',event)}}>
              <option value="none">None</option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="coworker">Coworker</option>
            </select>
            <div id="creator_container">
              <div className="create_contact add_control">
                <div className="text_contain" onClick={event => {this.addContact()}}>Save Changes</div>
              </div>
              <div className="go_back add_control">
                <div className="text_contain" onClick={event => {this.covered(false)}}>Go Back</div>
                </div>
              </div>
          </div>
        </div>
        <div className="contact_list">
          <div className="list_title">
            <div className="text_contain emph_text">Contacts</div>
            <div className="app_controls">
              <div className="text_contain app_control" onClick={event => {this.covered(true)}}>Add Contact</div>
              <div className="text_contain app_control" onClick={event => {this.toggleFaveFilter()}}>{this.state.fave_filter ? "Show All" : "Show Favorites"}</div>
              {/*<div className="text_contain app_control">Menu</div>*/}
            </div>
          </div>
          {current_contacts.map((element) => (
            <div key={element.id} className="contact">
              <div className="c_name"><div className="text_contain">{element.name}</div><div className="text_contain c_type">{element.type}</div></div>
              <div className="c_phone"><div className="text_contain"><i className="fa fa-fw fa-phone-square"></i>{element.phone}</div></div>
              <div className="c_email"><div className="text_contain"><i className="fa fa-fw fa-envelope"></i>{element.email}</div></div>
              <div className="controls"><div className="text_contain favorite contact_control"><i className={element.favorite ? "fa fa-fw fa-star" : "fa fa-fw fa-star-o"} onClick={event => {this.toggleFave(element.id)}}></i></div><div className="text_contain edit contact_control" onClick={event => {this.editContact(element.id)}}>Edit</div><div className="text_contain delete contact_control" onClick={event => {this.deleteContact(element.id)}}>Delete</div></div>
            </div>
          ))}
        </div>
        <div className={this.state.covered ? "app_cover" : ""} onClick={event => {this.covered(false)}}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
