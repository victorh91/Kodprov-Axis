import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../Libs/contextLib";
import Alert from "react-bootstrap/Alert";
import logo from "../../Images/axis.png";

export default function Login() {
  //the login page

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const [show, setShow] = useState(false);
  const history = useHistory();

  function validateForm() {
    //form validation
    return username.length > 0 && password.length > 0;
  }
  function AlertDismissible() {
    //gives the user an error message if the login fails
    return (
      <>
        <Alert
          id="alertBox"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>
            You have entered incorrect login information.{" "}
          </Alert.Heading>
          <p>Please try again</p>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }

  async function handleSubmit(event) {
    //submit function
    event.preventDefault();
    storeAndUpdate();
    history.push("/");
  }
  const storeAndUpdate = async () => {
    /*authenticate the user based on localstorage and db credentials 
    and set the values for localstorage if succeded*/
    let uri = "http://localhost:3000/users";
    const res = await fetch(uri);
    const posts = await res.json();
    posts.map((credentials) => {
      if (
        credentials.username === username &&
        credentials.password === password
      ) {
        localStorage.username = username;
        localStorage.password = password;
        userHasAuthenticated(true);
      } else {
        setShow(true);
      }
    });
  };
  return (
    <div className="login">
      {show && <AlertDismissible />}
      <img src={logo} id="logoAxis" />
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
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
        <Button
          id="submitClick"
          block
          size="lg"
          action="/"
          type="submit"
          disabled={!validateForm()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
