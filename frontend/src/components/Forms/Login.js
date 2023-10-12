import React from "react";
import Input from "./Input";
import Button from "../Button/Button";
import './Forms.css';

export default function Login({onAuthing}) {
  return (
    <form className="login">
      <Input id="login-email" type="email" onChange={(e) => console.log(e.target.value)} placeholder={'email'} />
      <Input id="login-password" type="password" onChange={(e) => console.log(e.target.value)} placeholder={'password'} />
      <Button text="Login" type="submit" handleClick={() => console.log('login')} />
      <a href="#register" onClick={() => onAuthing('register')}>Register</a>
    </form>
  )
}