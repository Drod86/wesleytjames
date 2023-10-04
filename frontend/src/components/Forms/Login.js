import React from "react";
import Input from "./Input";
import Button from "../Button/Button";
import './Forms.css';

export default function Login() {
  return (
    <form className="login">
      <Input id="login-email" type="email" onChange={(e) => console.log(e.target.value)} placeholder={'email'} />
      <Input />
      <Button text="Login" type="submit" handleClick={() => console.log('login')} />
    </form>
  )
}