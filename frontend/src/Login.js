import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios'
import  { useHistory } from 'react-router-dom'


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  let innhtml2 = document.getElementById('login-request')
  if (localStorage.getItem('Token')) {
    innhtml2.innerHTML = `Already logged in as ${localStorage.getItem('User')}`
}

  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.post('https://todo-appfullstack.herokuapp.com/api/api-token-auth/',{
        username: username,
        password: password
    })
    .then(res =>{
        const tokenauth = res.data.token
        localStorage.setItem('Token', tokenauth)
        localStorage.setItem('User', username) 
    })
    .catch(error => {
        console.log(error)
      })
    .then(() => {
        history.push('/')
    })
  }

  return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button id='button' block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
            </Form>
        </div>
  );
}