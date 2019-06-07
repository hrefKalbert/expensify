import React from 'react'
import {NavLink} from 'react-router-dom'


const Header = () =>
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact={true}>Dash board</NavLink>
    <NavLink activeClassName="is-active" to="/create">Go to Create page</NavLink>
  </header>
 

export default Header