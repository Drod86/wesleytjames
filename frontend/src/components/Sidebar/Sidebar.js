import React, { useState } from "react";
import Login from "../Forms/Login";
import './Sidebar.css';
import Register from "../Forms/register";
import Input from "../Forms/Input";

export default function Sidebar({auth, onAuth, authing, onAuthing}) {
  const [closedSidebar, setclosedSidebar] = useState(true);
  console.log(authing);
  return (
    <aside className={!authing && closedSidebar && 'closedSidebar'}>
    <Input id="closeSidebar" label="close"
    labelClick={() => onAuthing(false)}
    type="checkbox" />
    {authing === 'login' && <Login onAuthing={onAuthing} />}
    {authing === 'register' && <Register onAuthing={onAuthing} />}
    </aside>
  )
}