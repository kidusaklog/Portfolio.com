import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillPhone,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know Who  <span className="purple"> I'M </span>
            </h1>
            <p className="home-about-body">
             Welcome! I'm Kidus Aklog, and I know I can help your company create stunning visuals.
             As someone who has worked in machine opreator and graphic design for over year and half,
             I know what brands need to capture their audiences' attention.
             With my powerful design skills and knack for marketing, I have the right background for your brand's needs.
             While software development and graphic design are my two passions, I also enjoy &nbsp;
              
              
              <i>
                <b className="purple">Cinematography, &nbsp;exploring the world. </b>
              </i>
              
              
              &nbsp; I am insanely curious about different cultures, so you'll also 
                find my nose buried in a book or travel blog. &nbsp;
              <i>
                <b className="purple"> </b>
                {" "}
                <b className="purple">
                 
                </b>
              </i>
              <br />
              <br />
              When you're ready for your brand to reach its next level of success, call or email me. 
              I have the right tools and expertise to turn your brand into a household name.
              See it for yourself in<b className="purple"> &nbsp;Project section </b> and
              <i>
                <b className="purple">
                  {" "}
                 
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://t.me/kiddyoo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kiddyo9?t=tm0c7Cy_x0iMcQsezoL1MQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kidus-aklog-166391252"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://instagram.com/_kiddyooo?utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
