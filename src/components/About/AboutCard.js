
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Japheth James Arcilla </span>
            from <span className="purple"> Manila, Philippines.</span>
            <br />
            I am currently a full-time <span className="purple">IT Support </span> at <span className="purple">Omniquest Inc.</span>
            <br />
            And working as a part-time <span className="purple">Meta Developer </span> at <span className="purple">BruntWork</span>
            <br />
            I have a bachelor's degree in <span className="purple">Bachelor of Science in Information Technology</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball and Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Animes and K-dramas
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime {" "}
          </p>
          <footer className="blockquote-footer"> David Leinweber</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
