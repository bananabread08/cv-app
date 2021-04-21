import React, {Component} from "react";
import { TextField } from '@material-ui/core';

export default class Experience extends Component {
  constructor(){
      super();

      this.state = {
          company : 'Wright & Co. Law Firm',
          jobTitle : 'Defense Attorney',
          startYear : '2015',
          endYear : '2021',
          jobDescription : 'Taking pro-bono cases, ',
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
    const {company, jobTitle, startYear, endYear, jobDescription, isEditOn} = this.state;
    if(isEditOn) {
      return (
        <section className="Experience">
        Experience
        <form onSubmit={this.handleSubmit}>
          <TextField id="outlined-basic" label="Company Name..." variant="outlined" name="company" value={company} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Job Title..." variant="outlined" name="jobTitle" value={jobTitle} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Year Started..." variant="outlined" name="startYear" value={startYear} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Year Ended..." variant="outlined" name="endYear" value={endYear} onChange={this.handleChange} />
          <TextField id="outlined-basic" label="Job Description..." variant="outlined" name="jobDescription" value={jobDescription} onChange={this.handleChange} />
        <input type="submit" value="Submit" />      
        </form>
      </section>
      )
    }
    else {
      return (
        <div className="ExperiencePreview">
          <h1>Experience</h1>
          <h2>{company}</h2>  
          <p>{jobTitle}</p> 
          <p>{jobDescription}</p>
          <p>Years: {startYear}-{endYear}</p>
          <button onClick={this.handleSubmit}>Edit Experience</button>
        </div>
      )
    }
  }
}