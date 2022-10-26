import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { singIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // form.reset();

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="border rounded my-5 p-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          For Register. Please <Link to="/register">Register</Link>
        </p>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="mt-3 text-center">
          <Button
            onClick={handleGoogleSingIn}
            className="mb-2 w-100 p-3"
            variant="outline-primary"
          >
            Signin With Google
          </Button>
          <br />
          <Button className="mb-2 w-100 p-3" variant="outline-secondary">
            Signin With GitHub
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
