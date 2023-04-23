import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const TheNavbar = () => {
  const [activeLink, setAcctiveLink] = useState("home");

  const [scrolled, setScrolled] = useState(false);

  const handleClick = (e, link) => {
    e.preventDefault();

    window.open(link, "_blank");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll());

    return () => window.removeEventListener("scroll", onScroll());
  }, []);

  const onUpdateActiveLink = (value) => {
    setAcctiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/segunmaru-faozan"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://web.facebook.com/segunmaru.faozan"
                target="_blank"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={(e) =>
                handleClick(e, "https://linkedin.com/in/segunmaru-faozan")
              }
            >
              <span>Let’s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TheNavbar;
