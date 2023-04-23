import logo from "../assets/img/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-items">
        <Row>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo-image" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/segunmaru-faozan" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://web.facebook.com/segunmaru.faozan"
                target="_blank"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
