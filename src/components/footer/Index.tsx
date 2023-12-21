import styled from "styled-components";
import { theme } from "../../theme/Index";

export const Footer = () => {
  const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2rem 1.5rem;

    background: ${theme.colors.wine};

    span {
      color: ${theme.colors.beige};
    }

    a {
      color: ${theme.colors.beige};
      transition: 0.3s;
      border-bottom: 1px solid ${theme.colors.beige};

      &:hover {
        color: #f2c36b;
        border-bottom: 1px solid #f2c36b;
      }
    }
  `;

  return (
    <Footer>
      <span>
        Todos os Direitos Reservados © 2023 Ednea Mendes | Criado por{" "}
        <a href="https://portfolio-gabrielsilva.netlify.app/" target="_blank">
          Gabriel Silva
        </a>
      </span>
    </Footer>
  );
};
