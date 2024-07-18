
import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './/components/Home/style.css';
import './main.css';

export default class App extends Component {
  render() {
    return (
      <>
        <nav id="Nv" class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/Home"><img src={require("./logo/wlogo.png")} height="24" /></Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" to="/Home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" to="/Explore">Explore</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" to="/Movies">Movies</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" href="/TV">TV Shows</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }
}


