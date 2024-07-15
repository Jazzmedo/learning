
import React, { Component } from 'react'
import  Count  from './components/Home/Count'
import  Card  from './components/Home/Card'

export default class App extends Component {
  render() {
    return (
      <div>
        <Card/>
        <Count/>
      </div>
    )
  }
}


