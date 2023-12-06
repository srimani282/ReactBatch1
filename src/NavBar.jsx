import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active mr-3">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link to="/">Home</Link>
      </li>
      <li class="nav-item mr-3">
      <Link to="/state">Simple State</Link>
      </li>
      <li class="nav-item dropdown mr-3">
      <Link to="/form">Controlled Form</Link>
      </li>
      <li class="nav-item dropdown mr-3">
      <Link to="/users">Users</Link>
      </li>
      <li class="nav-item dropdown mr-3">
      <Link to="/effect">effect</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link to="/childtoparent">Child to parent</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link to="/ui-library">UI Library</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link to="/graphs">Graphs</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link to="/graph-api">Graphs from api</Link>
      </li>
     <li class="nav-item dropdown mr-3">
        <Link  to="/ui-harika">UI harika</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link  to="Graph">Graph</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link  to="context-component">Context Component</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link  to="redux-component">Redux Component</Link>
      </li>
      <li class="nav-item dropdown mr-3">
        <Link  to="posts">Posts</Link>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav> 
}

export default NavBar