import React, { Component } from 'react';
import './app.sass';

import Form from '../Form';
import CardsTable from '../CardsTable';

export default class App extends Component {

  state = {
    data: null,
    loading: false,
    selectColumn: null
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true })
    fetch('http://localhost:3001/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        this.setState({ loading: false, data })
      })
  }

  addUser = (user) => {

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.fetchData();
      })
  }

  deleteCard = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json" 
      }
    })
    .then(() => {
      this.fetchData();
    })
  }

  render() {

    const { data, loading } = this.state;

    return (
      <div className="container">
        <h1 className="mb-5">My Awesome App with React and Webpack</h1>

        <div className="mb-4">
          <Form addUser={this.addUser}/>
        </div>

        <CardsTable 
          cards={data} 
          loading={loading}
          deleteCard={this.deleteCard}/>
      </div>
    )
  }
}