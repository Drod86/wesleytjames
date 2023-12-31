import React, { useState } from "react";
import Login from "../Forms/Login";
import './Sidebar.css';
import Register from "../Forms/register";
import Input from "../Forms/Input";
import { users } from "../../data/Database";

export default function Sidebar({auth, onAuth, authing, onAuthing}) {
  const [closedSidebar, setclosedSidebar] = useState(true);
  return (
    <aside className={!authing && closedSidebar && 'closedSidebar'}>
    <Input id="closeSidebar" label="close"
    labelClick={() => onAuthing(false)}
    type="checkbox" />
    {
      !auth 
      ? <>
          {authing === 'login' && <Login onAuthing={onAuthing} users={users} />}
          {authing === 'register' && <Register onAuthing={onAuthing} users={users}/>}
        </>
      : <>
          <h3>You are logged in!</h3>
        </> 
    }
    
    </aside>
  )
}