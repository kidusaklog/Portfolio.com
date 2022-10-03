import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Football Kit Design"
              description="One of my favorite designs is one I created for a football team named Ethiopian Coffee S.C. 
              The inspiration for the design came from their original shirt from the first time they wore it.
               Ethiopian Coffee S.C. has over 1 million fans in Ethiopia, and the fans loved all of the designs and fought to have them."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Football Hoodies Design"
              description="I design hoodies for the Ethiopian Coffee S.C. 
              football team. What makes it interesting is that it is the first time in Ethiopia for clubs to have their own hoodie,
               and I was extremely thrilled to be a part of that initiative, which has had a positive response from the fan base."
 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="curtains Design"
              description="One of my most popular designs is for the brand ke ha eske po advertising.
               I've created entire prints on curtains inspired by African and Ethiopian cultures."
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="pillow Design"
              description="Again, 
              it's for a company called ke ha eske pe entertainment, and I developed full-color printed pillows with African
               and Ethiopian designs.."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Logo Design"
              description="I've also designed logos for organizations you might recognize,
               such as Tsehay Educational Agency and Geez Print and Advertisement."

            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
