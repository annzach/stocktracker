import React, { Component } from 'react';
import SearchForm from './SearchForm'

export default class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-center">Stock Tracker</h1>
      <SearchForm/>
      </div>
    )
  }
}
