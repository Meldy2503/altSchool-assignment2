import React from "react";
import { Container, Contents, Link } from "./homeStyle";

const Home = () => {
  return (
    <Container>
      <Contents>
        <div>
          <h1>WE BUILD THE FUTURE</h1>
          <p>Best Ideas-Best Solution-Best Results</p>
          <Link path="/users">view more</Link>
        </div>
      </Contents>
    </Container>
  );
};

export default Home;
