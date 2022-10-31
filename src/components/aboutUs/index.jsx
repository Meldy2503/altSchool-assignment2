import React from "react";
import {
  Container,
  Contents,
  Partners,
  Row,
  Col1,
  Col2,
  Price,
  Cards,
  PriceWrapper,
} from "./aboutStyle";
import { data, price } from "./data";

const About = () => {
  return (
    <Container>
      <Contents>
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
        <Partners>
          <h1>OUR CLIENTS AND PARTNERS</h1>
          <div>
            {data.map((item) => {
              return <img key={item.id} src={item.img} alt="partner logos" />;
            })}
          </div>
        </Partners>
      </Contents>
      <PriceWrapper>
        <Price>
          <h4>our pricing</h4>
          <p>
            Transform your everyday environment with these 3 different sets of
            architecture services offered at affordable price. Every pricing
            package can be customized according to your wishes.
          </p>
          <Cards>
            {price.map((items) => {
              return (
                <div
                  key={items.id}
                  style={{
                    backgroundColor: items.bgco,
                  }}
                >
                  <h3
                    style={{
                      color: items.titleco,
                    }}
                  >
                    {items.title}
                  </h3>
                  <h1
                    style={{
                      color: items.priceco,
                    }}
                  >
                    $<span>{items.price}</span>.00
                  </h1>
                  <ul>
                    {items.list.map((options, index) => {
                      return (
                        <li
                          key={index}
                          style={{
                            color: items.listco,
                          }}
                        >
                          {options}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Cards>
        </Price>
      </PriceWrapper>
    </Container>
  );
};

export default About;
