import React from "react";

import './Nav.css'

export default function NavItem({ text }){
  return (
    <li className="nav-item"><a>{text}</a></li>
  )
}