import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import loginImage from "../assets/images/Login-image.png";
import sideImage from "../assets/images/side-login.png";
import loaderImage from "../assets/images/loader-image.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../store/actions/userAction";
import { NavLink } from "react-router-dom"; // Import NavLink
import Swal from "sweetalert2";



function RegisterPage() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    birthDay: "",
    email: "",
    password: "",
  });
  const inputRegister = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...formRegister,
      [name]: value,
    };
    setFormRegister(newInput);
  };
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const result = await dispatch(registerUser(formRegister));
      if (result.msg === `${formRegister.email} successfully created`) {
        Swal.fire({
          icon: "success",
          title: "Registered!",
          text: `${formRegister.email} Successfully registered.`,
        }).then(() => {
          navigate("/login");
        });
      } else {
        throw new Error(`${result.msg}`);
      }
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ganti angka 2000 dengan durasi loading yang diinginkan dalam milidetik
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container>
      {loading ? (
        <div className="loader">
          <img src={loaderImage} alt="" style={{ width: "100%" }} />
        </div>
      ) : (
        <Row>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                width: "80%",
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
              }}
              className="my-3"
            >
              <Card.Img variant="top" src={loginImage} alt="Login Image" />
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Register your account
                </Card.Title>
                <Form onSubmit={handleRegister}>
                  <Form.Group  className="mb-2">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                    name="firstName"
                    id="firstName"
                     value={formRegister.firstName}
                     onChange={inputRegister}
                      type="Text"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        borderBottom: "2px solid white",
                        color: "white",
                        outline: "none",
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control
                    name="birthDay"
                    id="birthDay"
                     value={formRegister.birthDay}
                     onChange={inputRegister}
                      type="date"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        borderBottom: "2px solid white",
                        color: "white",
                        outline: "none",
                      }}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ color: "white" }}
                    ></Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-2">
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control
                    name="email"
                    id="email"
                     value={formRegister.email}
                     onChange={inputRegister}
                      type="email"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        borderBottom: "2px solid white",
                        color: "white",
                        outline: "none",
                      }}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                     value={formRegister.password}
                     onChange={inputRegister}
                     name="password"
                     id="password"
                      type="password"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        borderBottom: "2px solid white",
                        color: "white",
                        outline: "none",
                      }}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="mt-3"
                    style={{
                      width: "100%",
                      backgroundColor: "#fae19d",
                      color: "black",
                      border: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "3px 3px 8px #0d0d0d",
                    }}
                  >
                    Register
                  </Button>
                </Form>
                <Card.Text className="mt-3 text-center">
                  Have an account?{" "}
                  <NavLink
                    to="/login"
                    style={{ color: "#fae19d", textDecoration: "none" }}
                  >
                    Log in
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={sideImage} alt="" style={{ width: "90%" }} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default RegisterPage;

