import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.section)`
  margin: 0 auto;
  max-width: 1300px;

  padding: 6rem 1.5rem;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1034px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const About = styled.div`
  position: relative;

  &::before {
    content: "";
    background: ${theme.colors.wine};
    width: 3px;
    height: 50%;
    position: absolute;
    right: -50px;
    top: 100px;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 600;

    color: ${theme.colors.textColor};

    position: relative;

    display: inline-block;

    &::before {
      content: "";
      background: ${theme.colors.wine};
      width: 30%;
      height: 3px;
      position: absolute;
      bottom: 0;
    }
  }

  p {
    max-width: 600px;
    text-align: justify;
    line-height: 1.5;
    letter-spacing: 0.3px;
    color: #5a5a5a;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1034px) {
    &::before {
      display: none;
    }
    p {
      max-width: initial;
    }
  }
`;

export const ButtonAbout = styled.div`
  display: flex;
  gap: 1rem;

  align-items: self-start;
  justify-content: flex-start;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${theme.colors.wine};

    border: 1px solid ${theme.colors.wine};
    padding: 0rem 1rem;

    width: 100%;
    height: 70px;

    font-size: 1.1rem;
    transition: all 0.3s;

    &:hover {
      background: ${theme.colors.wine};
      color: ${theme.colors.beige};
      border-color: ${theme.colors.white};
    }
  }
`

export const ImageAboutContainer = styled.div`
  position: relative;

  &::before,
  &::after {
    content: "";
    background: ${theme.colors.wine};
    width: 100%;
    height: 3px;
    position: absolute;
    right: 0px;
    bottom: 2px;
  }

  &::after {
    width: 3px;
    height: 99.5%;
    left: 0px;
  }

  img {
    max-width: 400px;
  }

  @media (max-width: 1034px) {
    img {
      max-width: 600px;
      width: 100%;
    }
  }

  @media (max-width: 578px) {
    display: none;
  }
`;
