import ImageAbout from "../../../assets/photo.png";
import { FaWhatsapp } from "react-icons/fa";
import * as S from "./Style";

export const AboutSection = () => {
  return (
    <S.AboutContainer id="about">
      <S.About>
        <h2>Sobre mim</h2>
        <p>
          Meu chamo Ednea Mendes, sou advogada há 16 anos, com especialização
          nas áreas previdenciária. Graduada na Universidade Radial, com
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
        <a href="">
          Whatsapp <FaWhatsapp />
        </a>
      </S.About>
      <S.ImageAboutContainer>
        <img src={ImageAbout} alt="" />
      </S.ImageAboutContainer>
    </S.AboutContainer>
  );
};
