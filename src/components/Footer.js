import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logov1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
                   <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/vladimir-auvray/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/Vlad-auvray"><img src={navIcon2} alt="github" /></a>
                <a href="https://www.twitch.tv/n3olys_tv/"><img src={navIcon3} alt="twitch" /></a>
              </div>
            <p>Copyright 2023. Tous droits réservés</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
