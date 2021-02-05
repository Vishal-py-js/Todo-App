import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from 'axios'
import  { useHistory } from 'react-router-dom'


export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory()

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.post('http://127.0.0.1:8000/api/register/',{
        username: username,
        password: password,
        password2: password2
    })
    .then(() => {
        history.push('/login')
    })
  }


  return (
        <div className="Login">
            <Form id='username' onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
                <Form.Label >Username</Form.Label>
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
                <Form.Group size="lg" controlId="password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                </Form.Group>
                <Button id='button' block size="lg" type="submit" disabled={!validateForm()}>
                Sign Up
                </Button>
            </Form>
        </div>
  );
}