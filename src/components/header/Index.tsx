import { useEffect, useState } from "react";
import HeaderLogo from "../../assets/header-logo.png";
import * as S from "./Style";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const targetInnerHeightPercentage = 85;

      const targetInnerHeight =
        (targetInnerHeightPercentage / 100) * screenHeight;

      const isScrolled = window.scrollY > targetInnerHeight;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header scrolled={scrolled} active={active}>
      <S.HeaderContainer>
        <S.Logo href="home">
          {" "}
          <img src={HeaderLogo} alt="logo" />
        </S.Logo>

        <S.Nav className={active ? "active" : ""}>
          <S.MobileMenu
            onClick={() => setActive((boolean) => !boolean)}
            className="mobileMenu"
          >
            <span></span>
          </S.MobileMenu>
          <S.HeaderList className="menu" onClick={() => setActive(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#occupancyArea">Áreas de atuação</a>
            </li>
            <S.ButtonContact>
              <a href="#contact">Contato</a>
            </S.ButtonContact>
          </S.HeaderList>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  );
};
