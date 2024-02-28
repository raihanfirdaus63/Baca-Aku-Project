import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { USER_LOGIN } from "../store/actions/actionType";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/images/logo-baca-aku.png";

function NavbarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const doLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: USER_LOGIN,
          payload: false,
        });
        localStorage.clear();
        navigate("/login");
        Swal.fire({
          icon: "success",
          title: "Log Out!",
          text: "You have been successfully logged out.",
        });
      }
    });
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("access_token") ? true : false;
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const userLoggedIn = localStorage.getItem("access_token") ? true : false;
      setIsUserLoggedIn(userLoggedIn);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Memperbarui isUserLoggedIn setelah komponen di-mount
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("access_token") ? true : false;
    setIsUserLoggedIn(userLoggedIn);
  }, []);

  const username = localStorage.getItem("username");

  return (
    <Navbar
      style={{
        borderRadius: "30px",
        background: "#212121",
        boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
        color: "white",
      }}
      expand="lg"
      className="mb-3 p-1 mx-5 mt-2"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="mr-3 ml-2"
          style={{
            color: "#fae19d",
            fontSize: "1.5rem",
            fontFamily: "Garamond",
          }}
        >
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block"
            alt="Your Logo"
          />
          {" Baca Aku"}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "#fae19d",
            border: "none",
            height: "35px",
          }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mx-auto">
            <NavLink
              to="/karakterku"
              className="nav-link"
              style={{ color: "white", fontSize: "1.3rem" }}
            >
              Karakter
            </NavLink>
            <NavLink
              to="/comingsoon"
              className="nav-link"
              style={{ color: "white", fontSize: "1.3rem" }}
            >
              Kecocokan Pasangan
            </NavLink>
            <NavLink
              to="/comingsoon"
              className="nav-link"
              style={{ color: "white", fontSize: "1.3rem" }}
            >
              Pekerjaanku
            </NavLink>
            <NavLink
              to="/"
              className="nav-link"
              style={{ color: "white", fontSize: "1.3rem" }}
            >
              Home
            </NavLink>
          </Nav>
          <Nav>
            {/* Tautan menu logout */}
            {location.pathname !== "/login" &&
            location.pathname !== "/register"
           ? (
              <NavLink
                to="/comingsoon"
                className="nav-link"
                style={{
                  fontSize: "1.1rem",
                  color: "#d6caa9",
                  textDecoration: "none",
                }}
              >
                {`Hi, ${username}`}
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="nav-link"
                style={{
                  fontSize: "1.3rem",
                  color: "#d6caa9",
                  textDecoration: "none",
                }}
              >
                Login
              </NavLink>
            )}
            {/* Tautan menu logout */}
            {
            location.pathname !== "/login" &&
            location.pathname !== "/register"  ? (
              <Nav.Link
                onClick={doLogout}
                className="nav-link"
                style={{ color: "#fae19d", fontSize: "1.1rem" }}
              >
                Logout
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
