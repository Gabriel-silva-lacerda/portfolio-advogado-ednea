import styled from "styled-components";
import { theme } from "../../../theme/Index";
import BackGround from "../../../assets/group.png";

export const InitialHomePage = styled.section`
  background-size: cover;
  background-position: center center;
  height: 100dvh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background: url(${BackGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      max-width: 400px;
    }

    a {
      text-transform: uppercase;

      color: ${theme.colors.beige};
      border: 1px solid ${theme.colors.beige};

      display: block;
      padding: 1rem 2rem;
      margin: 2rem 0 0 0;

      transition: all 0.3s;

      &:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.wine};
        border-color: ${theme.colors.wine};
      }
    }
  }

  @media (max-width: 1024px) {
    background-position: right center;
  }

  @media (max-width: 578px) {
    background-position: 88%;
  }
`;
