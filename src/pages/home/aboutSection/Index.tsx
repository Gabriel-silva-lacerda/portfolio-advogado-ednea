import ImageAbout from "../../../assets/photo.png";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import * as S from "./Style";

export const AboutSection = () => {
  const { ref, controls } = useScrollAnimation<HTMLDivElement>();

  return (
    <S.AboutContainer
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <S.About>
        <h2>Sobre mim</h2>
        <p>
          Meu chamo Ednea Mendes, sou advogada há 16 anos, com especialização na
          área previdenciária. Graduada na Universidade Radial, com
          pós-graduação e MBA na Faculdade Legale.
        </p>
        <p>
          Minha dedicação se concentra em questões relacionadas ao INSS,
          abrangendo aposentadorias, benefício por incapacidade, Benefícios de
          Prestação Continuada, Auxílio Acidente, Revisão da Vida Toda, entre
          outros. Além disso, atuo no âmbito do direito de família, abordando
          temas como divórcio, pensão alimentícia, investigação de paternidade e
          guarda judicial, entre outros
        </p>
        <S.ButtonAbout>
          <a href="https://wa.me/5511982099540" target="_blank">
            Whatsapp <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100089839232816&locale=pt_BR"
            target="_blank"
          >
            Facebook <FaFacebookF />
          </a>
        </S.ButtonAbout>
      </S.About>
      <S.ImageAboutContainer>
        <img src={ImageAbout} alt="imagem advogada" />
      </S.ImageAboutContainer>
    </S.AboutContainer>
  );
};
