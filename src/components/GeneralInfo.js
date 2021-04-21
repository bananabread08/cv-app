import React, {Component} from "react";
import { TextField } from '@material-ui/core';

export default class GeneralInfo extends Component {
  constructor(){
      super();

      this.state = {
          name : 'Phoenix Wright',
          contact : '0912334555466',
          email : 'theaceattorney12#@gmail.com',
          isEditOn : false,
      }
  }

  handleChange = (e) => { 
    this.setState({
        [e.target.name] : e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  }
  handleSubmit = (e) => {
    this.setState({
        isEditOn : !this.state.isEditOn,
    })
    e.preventDefault();
  }
  // enableEdit = (e) => {
  //   this.setState({
  //       isEditOn : true,
  // })
  //   e.preventDefault();
  // }
  render() {
    const {name, contact, email, isEditOn} = this.state;
    if(isEditOn) {
      return (
        <section className="GeneralInfo">
          General Information
          <form onSubmit={this.handleSubmit}>
            <TextField id="GiName" label="Name..." variant="outlined" name="name" value={name} onChange={this.handleChange} />
            <TextField id="GiContact" label="Contact#..." variant="outlined" name="contact" type="number" value={contact} onChange={this.handleChange} />
            <TextField id="GiEmail" label="Email Address..." variant="outlined" type="email" name="email" value={email} onChange={this.handleChange} />
            <input type="submit" value="Submit" />      
          </form>
      </section>
      )
    }
    else {
      return (
        <div className="GeneralInfoPreview">
          <h2>{name}</h2>  
          <p>{contact}</p> 
          <p>{email}</p> 
        <button onClick={this.handleSubmit}>Edit General Information </button>
        </div>
      )
    }
  }
}