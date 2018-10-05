import React, { Component } from "react";
import "./startHosting.css";

class StartHosting extends Component {
  constructor() {
      super();
      this.state = {
          form: {
              title: 'mr',
              first_name: '',
              last_name: '',
              email: '',
              password: ''
          },
          termsAgreed: false,
          formCompleted: false
      }
      this.isCompleted = this.isCompleted.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  isCompleted(){
    for(let field in this.state.form){
      if(this.state.form[field] === ""){
        return false;
      }
    }
    return true;
  }
  handleChange(evt) {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(target.type === 'checkbox'){
        this.setState({
            [name] : !this.state.termsAgreed,
            formCompleted: this.isCompleted()
        })
    } else {
        let change = Object.assign({}, this.state.form, {[name]: value});
        this.setState({
            form: change,
            formCompleted: this.isCompleted()
        });
    }
  }
  render() {
    return (
      <main className="signup-page">
        <h1 className="signup-title">Awesome! Let's dive right in!</h1>
        <form action="index.html" className="signup-form">
          <label htmlFor="title">Title</label>
          <select 
            id="title" 
            name='title' 
            value={this.state.form.title}
            onChange={this.handleChange}  
          >
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
          </select>
          <label htmlFor="first-name">First name</label>
          <input 
            type="text" 
            id="first-name"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.form.first_name}
          />
          <label htmlFor="last-name">Last name</label>
          <input 
            type="text" 
            id="last-name"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.form.last_name}
          />
          <label htmlFor="email">E-Mail</label>
          <input 
            type="email" 
            id="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.form.email}
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            onChange={this.handleChange}
            value={this.state.form.password}
          />
          <input 
            type="checkbox" 
            id="agree-terms"
            name="termsAgreed"
            checked={this.state.termsAgreed}
            onChange={this.handleChange}
         />
          <label htmlFor="agree-terms">
            Agree to
            <a>Terms &amp; Conditions</a>
          </label>
          <input type="submit" className="button" value="Sign Up"/>
        </form>
      </main>
    );
  }
}

export default StartHosting;
