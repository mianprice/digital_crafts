import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Contact {
  constructor(n,p,e,t,f) {
    this.name = n;
    this.phone = p;
    this.email = e;
    this.type = t;
    this.fave = f;
  }
}

let contact_list = [];
contact_list.push(new Contact('Alice','555-555-5555','alice@fake.com','test',false));
contact_list.push(new Contact('Bob','555-555-5555','alice@fake.com','test',false));
contact_list.push(new Contact('Carol','555-555-5555','alice@fake.com','test',true));
contact_list.push(new Contact('Dan','555-555-5555','alice@fake.com','test',false));

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      contacts: props.contactList,
      contact_ind: 0,
      name: undefined,
      phone: undefined,
      email: undefined,
      type: 'none',
      fave: false,
      covered: false
    };
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
  render() {
    console.log(this.state.name);
    console.log(this.state.phone);
    console.log(this.state.email);
    console.log(this.state.type);
    console.log(this.state.fave);
    return (
      <div className="app">
        <div className={this.state.covered ? "add_contact" : "noshow"}>
          <div className="add_title"><div className="text_contain emph_text">Add New Contact</div></div>
          <div><div className="text_contain">Name: </div></div>
          <input className="form-control" type="text" value={this.state.name} onChange={event => {this.makeStateChange('name',event)}}/>
          <div><div className="text_contain">Phone: </div></div>
          <input className="form-control" type="tel" value={this.state.phone} onChange={event => {this.makeStateChange('phone',event)}}/>
          <div><div className="text_contain">Email: </div></div>
          <input className="form-control" type="email" value={this.state.email} onChange={event => {this.makeStateChange('email',event)}}/>
          <div><div className="text_contain">Type: </div></div>
          <select className="form-control" onChange={event => {this.makeStateChange('type',event)}}>
            <option value="none">None</option>
            <option value="family">Family</option>
            <option value="friend">Friend</option>
            <option value="coworker">Coworker</option>
          </select>
          <div id="creator_container"><div className="create_contact"><div className="text_contain">Create Contact</div></div></div>
        </div>
        <div className="contact_list">
          <div className="list_title"><div className="text_contain emph_text" onClick={event => {this.covered(true)}}>Contacts</div></div>
          {this.state.contacts.map((element,idx) => (
            <div key={idx} className="contact">
              <div className="c_name"><div className="text_contain">{element.name}</div><div className="text_contain c_type">{element.type}</div></div>
              <div className="c_phone"><div className="text_contain"><i className="fa fa-fw fa-phone-square"></i>{element.phone}</div></div>
              <div className="c_email"><div className="text_contain"><i className="fa fa-fw fa-envelope"></i>{element.email}</div></div>
              <div className="controls"><div className="text_contain favorite"><i className={element.fave ? "fa fa-fw fa-star" : "fa fa-fw fa-star-o"}></i></div><div className="text_contain edit">Edit</div><div className="text_contain delete">Delete</div></div>
            </div>
          ))}
        </div>
        <div className={this.state.covered ? "app_cover" : ""} onClick={event => {this.covered(false)}}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <App contactList={contact_list}/>,
  document.getElementById('root')
);
