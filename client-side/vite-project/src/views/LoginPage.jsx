import React, { useState, useEffect } from "react";
import loaderImage from "../assets/images/loader-image.png";
import Container from "react-bootstrap/Container";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import loginImage from "../assets/images/register-image.png";
import sideImage from "../assets/images/side-login.png";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink dan useNavigate
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../store/actions/actionType";
import Swal from "sweetalert2";
import { loginUser } from "../store/actions/userAction";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const inputLogin = (e) => {
    const { value, name } = e.target;
    const newInput = {
      ...formLogin,
      [name]: value,
    };
    setFormLogin(newInput);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(loginUser(formLogin));
      

      // Pastikan bahwa result adalah objek yang memiliki properti access_token
      if (result && result.access_token) {
        localStorage.setItem("access_token", result.access_token);
        localStorage.setItem("username", result.username)
        dispatch({
          type: USER_LOGIN,
          payload: true,
        });
        // Navigasi ke halaman utama setelah login berhasil
        navigate("/");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      let errorMessage = "Something went wrong!";
      if (error.msg) {
        errorMessage = error.msg;
      }
      // Tampilkan pesan kesalahan menggunakan Sweet Alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
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
                width: "65%",
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
                  Please log in to your account
                </Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-2">
                    <Form.Label>Alamat Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      value={formLogin.email}
                      onChange={inputLogin}
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
                      id="password"
                      name="password"
                      value={formLogin.password}
                      onChange={inputLogin}
                      type="password"
                      placeholder="Enter your password"
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
                    Log In
                  </Button>
                </Form>
                <Card.Text className="mt-3 text-center">
                  {/* Ganti Card.Link dengan NavLink */}
                  Don't have an account?{" "}
                  <NavLink
                    to="/register"
                    style={{ color: "#fae19d", textDecoration: "none" }}
                  >
                    Sign Up
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

export default LoginPage;
