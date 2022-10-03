import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           This is due to the fact that I have a great deal of knowledge in this area and also give certain unique services that other designers do not.
           dependable communication, print-ready files with bleeds, trim marks, and safe margins, source files, and designs without any copyright restrictions.
           You will gain all of these advantages by working with me, and I am eager to finish your assignment. Contact me at any time. Why are we both waiting 
           when I can discover the best customer and you can find the right designer? Let's get going.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kidus Aklog</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
