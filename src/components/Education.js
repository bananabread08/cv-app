import React, {Component} from "react";
import { TextField } from '@material-ui/core';

export default class Education extends Component {
  constructor(){
      super();

      this.state = {
          school : 'Ivy University',
          gradDate : '2015',
          course : 'Juris Doctor',
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

  render() {
    const {school, gradDate, course, isEditOn} = this.state;
    if(isEditOn) {
      return (
        <section className="Education">
        Education
        <form onSubmit={this.handleSubmit}>
          <TextField id="outlined-basic" label="School..." variant="outlined" name="school" value={school} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Graduation Date..." variant="outlined" name="gradDate" value={gradDate} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Course..." variant="outlined" name="course" value={course} onChange={this.handleChange} />
        <input type="submit" value="Submit" />      
        </form>
      </section>
      )
    }
    else {
      return (
        <div className="EducationPreview">
          <button onClick={this.handleSubmit}><img src={this.props.editIcon} alt="Edit" className="EditIcon"></img></button>
          <h2>Education</h2>
          <h3>{school}</h3>  
          <p>{gradDate}</p> 
          <p>{course}</p>
        </div>
      )
    }
  }
}