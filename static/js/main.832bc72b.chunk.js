(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(4),c=n.n(s),l=(n(32),n(7)),r=n(5),d=n(9),o=n(8),j=(n(33),n.p+"static/media/edit.1610f3fa.svg"),h=n(6),b=n(68),u=n(1),O=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.setState({isEditOn:!a.state.isEditOn}),e.preventDefault()},a.state={name:"Phoenix Wright",contact:"0912334555466",email:"theaceattorney12#@gmail.com",isEditOn:!1},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.contact,a=e.email,i=e.isEditOn;return Object(u.jsx)("div",{children:i?Object(u.jsxs)("section",{className:"GeneralInfo",children:["General Information",Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)(b.a,{id:"GiName",label:"Name...",variant:"outlined",name:"name",value:t,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"GiContact",label:"Contact#...",variant:"outlined",name:"contact",type:"number",value:n,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"GiEmail",label:"Email Address...",variant:"outlined",type:"email",name:"email",value:a,onChange:this.handleChange}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]}):Object(u.jsxs)("div",{className:"GeneralInfoPreview",children:[Object(u.jsx)("button",{onClick:this.handleSubmit,children:Object(u.jsx)("img",{src:this.props.editIcon,alt:"Edit",className:"EditIcon"})}),Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("p",{children:a})]})})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){a.setState({isEditOn:!a.state.isEditOn}),e.preventDefault()},a.state={school:"Ivy University",gradDate:"2015",course:"Juris Doctor",isEditOn:!1},a}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.school,n=e.gradDate,a=e.course,i=e.isEditOn;return Object(u.jsx)("div",{children:i?Object(u.jsx)("section",{className:"Education",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)(b.a,{id:"outlined-basic",label:"School...",variant:"outlined",name:"school",value:t,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Graduation Date...",variant:"outlined",name:"gradDate",value:n,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Course...",variant:"outlined",name:"course",value:a,onChange:this.handleChange}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})}):Object(u.jsxs)("div",{className:"EducationPreview",children:[Object(u.jsx)("button",{onClick:this.handleSubmit,children:Object(u.jsx)("img",{src:this.props.editIcon,alt:"Edit",className:"EditIcon"})}),Object(u.jsx)("h3",{children:t}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("p",{children:a})]})})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){e.setState({isEditOn:!e.state.isEditOn}),t.preventDefault()},e.state={company:"Wright & Co. Law Firm",jobTitle:"Defense Attorney",startYear:"2015",endYear:"2021",jobDescription:"Taking pro-bono cases, ",isEditOn:!1},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.company,n=e.jobTitle,a=e.startYear,i=e.endYear,s=e.jobDescription,c=e.isEditOn;return Object(u.jsx)("div",{children:c?Object(u.jsxs)("section",{className:"Experience",children:["Experience",Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)(b.a,{id:"outlined-basic",label:"Company Name...",variant:"outlined",name:"company",value:t,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Job Title...",variant:"outlined",name:"jobTitle",value:n,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Year Started...",variant:"outlined",name:"startYear",value:a,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Year Ended...",variant:"outlined",name:"endYear",value:i,onChange:this.handleChange}),Object(u.jsx)(b.a,{id:"outlined-basic",label:"Job Description...",variant:"outlined",name:"jobDescription",value:s,onChange:this.handleChange}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]}):Object(u.jsxs)("div",{className:"ExperiencePreview",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("p",{children:s}),Object(u.jsxs)("p",{children:["Years: ",a,"-",i]}),Object(u.jsx)("button",{onClick:this.handleSubmit,children:Object(u.jsx)("img",{src:this.props.editIcon,alt:"Edit",className:"EditIcon"})})]})})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){e.setState({skill:e.state.skill,isEditOn:!e.state.isEditOn}),t.preventDefault()},e.state={skill:"HTML-CSS-Bootstrap-JavaScript-Webpack-ReactJS",isEditOn:!1},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.skill;return e.isEditOn?Object(u.jsxs)("section",{className:"Skills",children:["Skills",Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("textarea",{name:"skill",value:t,onChange:this.handleChange}),Object(u.jsx)("input",{type:"submit",value:"Submit"})]})]}):Object(u.jsxs)("div",{className:"SkillsPreview",children:["Skills",Object(u.jsx)("p",{children:t}),Object(u.jsx)("button",{onClick:this.handleSubmit,children:Object(u.jsx)("img",{src:this.props.editIcon,alt:"Edit",className:"EditIcon"})})]})}}]),n}(a.Component),p=n(14),g=n.n(p),f=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addEducation=function(t){t.preventDefault(),e.setState({id:g()(),schoolList:e.state.schoolList.concat(e.state.id)})},e.addExperience=function(t){t.preventDefault(),e.setState({id:g()(),experienceList:e.state.experienceList.concat(e.state.id)})},e.state={schoolList:[1],experienceList:[2],id:g()()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.schoolList,n=e.experienceList;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{editIcon:j}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.addEducation,children:"Add"}),"Education",t.map((function(e){return Object(u.jsx)(m,{id:e,editIcon:j},e)}))]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.addExperience,children:"Add"}),"Experience",n.map((function(e){return Object(u.jsx)(v,{id:e,editIcon:j},e)}))]}),Object(u.jsx)("hr",{}),Object(u.jsx)(x,{editIcon:j})]})}}]),n}(a.Component);c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.832bc72b.chunk.js.map