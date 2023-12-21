import styled from "styled-components";
import { theme } from "../../../theme/Index";
import { motion } from "framer-motion";

export const OccupancyAreaContainer = styled.section`
  background: ${theme.colors.wine};
  padding: 6rem 0rem;
`;

export const OccupancyTitle = styled.h2`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0rem 1.5rem;

  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 600;

  color: ${theme.colors.beige};

  position: relative;

  &::before {
    content: "";
    background: ${theme.colors.beige};
    width: 5.5%;
    height: 3px;
    position: absolute;
    bottom: -2px;
  }

  @media (max-width: 768px) {
    display: inline-block;
    &::before {
      width: 17%;
    }
  }
`;

export const OccupancyArea = styled(motion.ul)`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0rem 1.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 30px;

  li {
    border: 1px solid ${theme.colors.white};
    padding: 2rem 1.5rem;
    background: ${theme.colors.beige};

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    align-items: center;

    svg {
      font-size: 2rem;
      color: ${theme.colors.wine};
    }

    h2,
    p {
      color: ${theme.colors.textColor};
      text-align: center;
      letter-spacing: 1px;
    }

    p {
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
