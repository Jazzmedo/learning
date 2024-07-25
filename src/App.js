
import React, { Component} from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './components/Home/style.css';
import './main.css';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }
}


