import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: #000;
  font-family: "Poppins", sans-serif;
  color: #fff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
export const Contents = styled.div`
  width: 90%;
  max-width: 120rem;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;

  p {
    line-height: 1.4;
  }

  span {
    color: #f7992b;
  }
`;
