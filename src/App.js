import React, { Component } from "react";
import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
        name : "",
        contact : "",
        email : "",
        isEditOn : true,
    }
  }

  handleChange = (e) => { 
    this.setState({
        [e.target.name] : e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  }
  handleSubmit = (e) => {
    this.setState({
      isEditOn : false,
    })
    e.preventDefault();
  }
  enableEdit = (e) => {
    e.preventDefault();
    this.setState({
      isEditOn : true,
    })
  }

  render(){
    const {name, contact, email, isEditOn} = this.state;
    if(isEditOn) {
      return (
        <div className="App">
          <section className="Basic-Info">
            Basic Information
            <form onSubmit={this.handleSubmit}>
              <fieldset>
              <label>
                  Name:
                  <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
              <label>
                  Contact #:
                  <input type="number" name="contact" value={contact} onChange={this.handleChange} />
              </label>
              <label>
                  Email:
                  <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              </fieldset>        
            </form>
          </section>
        </div>
      );
    }
    else {
      return (
        <div> {name} {contact} {email} <button onClick={this.enableEdit}>Edit </button></div>
      )
    }
  }
}

export default App;
