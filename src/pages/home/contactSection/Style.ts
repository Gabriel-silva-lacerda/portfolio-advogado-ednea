import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const ContactSectionContainer = styled(motion.section)`
  margin: 0 auto;
  max-width: 1300px;

  padding: 6rem 1.5rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  position: relative;
  display: inline-block;

  &::before {
    content: "";
    background: #871034;
    width: 30%;
    height: 3px;
    position: absolute;
    bottom: 0;
  }
`;

export const ContactSectionImageContainer = styled.div`
  background: ${theme.colors.wine};
  padding: 1rem;
  position: relative;

  &::before {
    content: "";
    background: ${theme.colors.wine};
    width: 3px;
    height: 80%;
    position: absolute;
    right: -50px;
    top: 35px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 1100px) {
    &::before {
      display: none;
    }
  }
`;

export const ContactAddress = styled.div`
  ul {
    color: #5a5a5a;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      margin-bottom: 1rem;

      font-size: 1.1rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #871034;
    border: 1px solid #5e2a3b;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    transition: all 0.3s;
    text-transform: uppercase;

    font-size: 1rem;
    display: inline-block;

    &:hover {
      background: ${theme.colors.wine};
      color: ${theme.colors.beige};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
