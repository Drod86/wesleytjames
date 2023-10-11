import React from "react";
import Input from "./Input";
import Button from "../Button/Button";
import './Forms.css';

export default function Register({toggle}) {
  return (
    <form className="register">
      <Input id="register-name-first" type="text" onChange={(e) => console.log(e.target.value)} placeholder={'first name'} />
      <Input id="register-name-last" type="text" onChange={(e) => console.log(e.target.value)} placeholder={'last name'} />
      <Input id="register-email" type="email" onChange={(e) => console.log(e.target.value)} placeholder={'email'} />
      <Input id="register-password" type="password" onChange={(e) => console.log(e.target.value)} placeholder={'password'} />
      <Input id="register-password-verify" type="password" onChange={(e) => console.log(e.target.value)} placeholder={'verify password'} />
      <Button text="Register" type="submit" handleClick={() => console.log('register')} />
      <a href="#login" onClick={toggle}>Login</a>
    </form>
  )
}