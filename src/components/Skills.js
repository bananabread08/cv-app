import React, {Component} from "react";
import { TextField } from '@material-ui/core';

export default class Skills extends Component {
  constructor(){
      super();

      this.state = {
        skillList : ['Objection'],
        skill : '',
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
      skillList: this.state.skillList.concat(this.state.skill),
      skill: '',
      isEditOn : !this.state.isEditOn,
    })
    e.preventDefault();
  }

  render() {
    const {skillList, skill, isEditOn} = this.state;
    if(isEditOn) {
      return (
        <section className="Skills">
        Skills
        <form onSubmit={this.handleSubmit}>
          <TextField id="outlined-basic" label="Add Skill.." variant="outlined" name="skill" value={skill} onChange={this.handleChange} />
        <input type="submit" value="Submit" />      
        </form>
      </section>
      )
    }
    else {
      return (
        <div className="SkillsPreview">
        Skills
        {skillList.map((skill) => {
          return <p>{skill}</p>;
        })}
        <button onClick={this.handleSubmit}><img src={this.props.editIcon} alt="Edit" className="EditIcon"></img></button>
        </div>
      )
    }
  }
}
