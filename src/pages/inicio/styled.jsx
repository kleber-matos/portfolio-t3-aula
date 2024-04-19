/** @format */
import carro from "../../assets/carro.jpg";

import styled from "styled-components";

export const Main = styled.main`
  border: solid 2px green;
  height: 100vh;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${carro});

  div {
    border: solid 3px red;
    width: 50%;
  }
`;
