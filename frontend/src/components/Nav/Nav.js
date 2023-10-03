import React from "react";
import NavItem from "./NavItem";
import Button from "../Button/Button"
import './Nav.css'

export default function Nav() {
  return (
    <nav className='nav'>
      <NavItem text={'Home'} />
      <NavItem text={'Book Me'} />
      <NavItem text={'About'} />
      <Button type={'button'} text={'Login'} />
    </nav>
  )
}