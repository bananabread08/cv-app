import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import '../styles/GeneralInfo.css';

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Phoenix Wright',
      role: 'Defense Attorney',
      contact: '0912334555466',
      email: 'theaceattorney12#@gmail.com',
      site: 'https://github.com/daphoenix12#',
      isEditOn: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //utilizes the HTML name attribute of the node that is changed
    });
  };
  handleSubmit = (e) => {
    this.setState({
      isEditOn: !this.state.isEditOn,
    });
    e.preventDefault();
  };
  render() {
    const { name, role, contact, email, site, isEditOn } = this.state;
    return (
      <div>
        {isEditOn ? (
          <section className="GeneralInfo">
            <h3 className="SectionLabels">General Information</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  id="GiName"
                  label="Name..."
                  variant="outlined"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <TextField
                  id="GiRole"
                  label="Role/Position..."
                  variant="outlined"
                  name="role"
                  value={role}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <TextField
                  id="GiContact"
                  label="Contact#..."
                  variant="outlined"
                  name="contact"
                  type="number"
                  value={contact}
                  onChange={this.handleChange}
                />
                <TextField
                  id="GiEmail"
                  label="Email Address..."
                  variant="outlined"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <TextField
                  id="GiSite"
                  label="Website..."
                  variant="outlined"
                  name="site"
                  value={site}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </section>
        ) : (
          <div className="GeneralInfoPreview">
            <img
              src={this.props.editIcon}
              alt="Edit"
              className="EditIcon"
              onClick={this.handleSubmit}
            ></img>
            <div>
              <h2>{name}</h2>
              <h4>{role}</h4>
            </div>
            <div>
              <p>Contact#: {contact}</p>
              <p>Email: {email}</p>
              {site && (
                <p>
                  Site: <a href={site}>{site}</a>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
