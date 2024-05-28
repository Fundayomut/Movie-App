import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom'
import userLocalStorage from "./userLocalStorage";


export default function Login({ handleLogin }) {
const [name,setName]=useState("");
const [password, setPassword]=useState("");
const {getItem, setItem, setUserItem}=userLocalStorage(name);
const localInfo=getItem();

  const navigate=useNavigate()

  const toRegister=()=>{
    navigate("/Register")
  }

 // console.log("Login localinfo---->",typeof localInfo)


  const toLogin=()=>{
    const findInfo=localInfo.find((item)=>item.name===name && item.password===password);
    if(findInfo){
      findInfo.userLogin=true
      const userNameInfo={userName:name}
      setItem(localInfo);
      setUserItem(userNameInfo);
      handleLogin ();
      navigate('/home');
    }else{
      alert("Benutzername und Passwort konnten nicht gefunden werden, bitte registrieren Sie sich")
    }
  }



  return (
    <div>
      <div className="logindiv">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
          </Form.Group>

          <Button onClick={toLogin} style={{marginRight:"20px"}} variant="primary" type="submit">
            Login
          </Button>
          <Button onClick={toRegister} variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
