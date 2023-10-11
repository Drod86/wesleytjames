import React from "react";
import NavItem from "./NavItem";
import Button from "../Button/Button"
import './Nav.css'

export default function Nav({auth, onAuth, authing, onAuthing}) {
  return (
    <nav className='nav'>
      <NavItem text={'Home'} />
      <NavItem text={'Book Me'} />
      <NavItem text={'About'} />
      {auth 
        ? <Button className="button button-sign-out" type="button" text="sign out" handleClick={() => {
          onAuth()
          onAuthing()}} /> 
        : !authing  || authing === 'register'
          ? <Button type={'button'} text={'Login'} handleClick={() => onAuthing('login')}/>
          : <Button className="button button-register" type={'button'} text={'Register'} handleClick={() => onAuthing('register')}/>
          
      }
    </nav>
  )
}