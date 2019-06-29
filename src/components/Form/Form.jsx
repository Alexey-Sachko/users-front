import React, { Component } from 'react';

export default class Form extends Component {
  
  state = {
    name: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addUser(this.state);
  }

  render() {

    const { name, password } = this.state;

    return (
      <div className="w-50 px-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              className="form-control" 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={name}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              className="form-control" 
              type="text" 
              name="password" 
              onChange={this.handleChange}
              value={password}/>
          </div>
          <button type="submit" className="btn btn-success">Создать юзера</button>
        </form>
      </div>
    )
  }
}