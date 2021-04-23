import React, { Component } from 'react';

export default class Skills extends Component {
  constructor() {
    super();

    this.state = {
      skill: 'HTML-CSS-Bootstrap-JavaScript-Webpack-ReactJS',
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
      skill: this.state.skill,
      isEditOn: !this.state.isEditOn,
    });
    e.preventDefault();
  };

  render() {
    const { skill, isEditOn } = this.state;
    if (isEditOn) {
      return (
        <section className='Skills'>
          Skills
          <form onSubmit={this.handleSubmit}>
            <textarea
              name='skill'
              value={skill}
              onChange={this.handleChange}
            ></textarea>
            <input type='submit' value='Submit' />
          </form>
        </section>
      );
    } else {
      return (
        <div className='SkillsPreview'>
          Skills
          <p>{skill}</p>
          <button onClick={this.handleSubmit}>
            <img
              src={this.props.editIcon}
              alt='Edit'
              className='EditIcon'
            ></img>
          </button>
        </div>
      );
    }
  }
}
