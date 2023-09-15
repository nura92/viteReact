import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderLink(props) {
  return (
    <li className="nav-item">
    <NavLink
      to={props.linkUrl}
      activeClassName="active"
      className="nav-link js-scroll-trigger"
    >
      {props.linkName}
    </NavLink>
  </li>
  )
}

