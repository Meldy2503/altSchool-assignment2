import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  max-width: 120rem;
  margin: 8rem auto;
`;
export const Heading = styled.h2`
  text-align: center;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 10rem;
`;
export const Card = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #d0d0d0;
  position: relative;
  margin-bottom: 8rem;
`;
export const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  position: absolute;
  top: -6rem;
`;
export const Contents = styled.div`
  margin-top: 8rem;
  line-height: 1.1;
  font-weight: 400;
  padding: 2rem 1rem 3rem 1rem;
`;
export const Name = styled.h3`
  text-align: center;
`;
export const Gender = styled.p``;
export const Email = styled.h4`
  margin-bottom: 1rem;
  text-align: center;
`;
export const Username = styled.p``;
export const Age = styled.p``;
export const Phone = styled.p``;
export const Country = styled.p``;
export const PgNo = styled.p`
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.8rem;
`;
export const Btn = styled.button`
  padding: 1rem 2rem;
`;
export const PgNosBtn = styled.button`
  margin: 0 0.1rem;
  padding: 1rem 2rem;
  font-weight: bold;
`;
