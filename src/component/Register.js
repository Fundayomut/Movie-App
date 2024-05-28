import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import userLocalStorage from "./userLocalStorage";
import { useNavigate } from 'react-router-dom'


export default function Register() {
  const[name,setName]=useState("");
  const[userName,setUserName]=useState("");
  const[eMail,setEMail]=useState("");
  const[telefon,setTelefon]=useState("");
  const[password,setPassword]=useState("");
  const userKey=name;

  const navigate=useNavigate();
 
  const{setItem, getItem, removeItem}=userLocalStorage(userKey);
 

  const handleRegister=(e)=>{
    e.preventDefault();

    if(name!=="" && userName!=="" && eMail!=="" && password!=="" ){
        const registerInfo ={id: uuidv4(), name:name , userName:userName, eMail:eMail, telefon:telefon, password:password, userLogin:false}
        const updateRegisterInfo=[...getItem(), registerInfo];
        console.log("updateregister--->",updateRegisterInfo)
        setItem(updateRegisterInfo);
        setName("");
        setUserName("");
        setEMail("");
        setPassword("");
        setTelefon("");
        alert("Die Registrierung wurde erfolgreich abgeschlossen")
        navigate('/Login');
    }else{
      alert("Bitte füllen Sie die markierten Felder aus")
    }
  }

  const userRemove=()=>{
    removeItem("");
  }

  return (
    <div>
      <div className="logindiv">
        <Form>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Name *</Form.Label>
            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="UserName">
            <Form.Label>User Name *</Form.Label>
            <Form.Control value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control value={eMail} onChange={(e)=>setEMail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefon">
            <Form.Label>Telefon Number</Form.Label>
            <Form.Control value={telefon} onChange={(e)=>setTelefon(e.target.value)} type="tel" placeholder="Enter Telefon" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={handleRegister} variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
      <button onClick={userRemove}>All User Remove</button>
    </div>
  );
}
