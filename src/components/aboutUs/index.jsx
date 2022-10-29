import React from "react";
import { Container, Row, Col1, Col2 } from "./aboutStyle";

const About = () => {
  return (
    <Container>
      <Row>
        <Col1>
          <div>
            <h2>OUR MISSION</h2>
            <p>
              Designing sustainable, high-performance buildings requires an
              integration of architectural and engineered systems into a
              balanced design of sustainability…
            </p>
            <ul>
              <li>Based on your project, get only what's needed</li>
              <li>Cost effective, to secure construction process</li>
              <li>Premium quality,we always get the best people</li>
            </ul>
          </div>
        </Col1>
        <Col2>
          <div>
            <h2>OUR VISION</h2>
            <p>
              We are here to meet your demand and resolve architecture issues
              the most beneficial way for you. Our skilled experts are able to
              resolve complex and unusual cases in the shortest time.
            </p>
            <ul>
              <li>Each case for us is unique</li>
              <li>People are our ultimate resource</li>
              <li>We take Visa, MasterCard, Discover and American Express</li>
            </ul>
          </div>
        </Col2>
      </Row>
    </Container>
  );
};

export default About;
