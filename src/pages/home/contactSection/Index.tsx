import * as S from "./Style";
import Logo from "../../../assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <S.ContactSectionContainer id="contact">
      <S.ContactTitle>Contate-me</S.ContactTitle>
      <S.ContactContainer>
        <S.ContactSectionImageContainer>
          <img src={Logo} alt="" />
        </S.ContactSectionImageContainer>
        <S.ContactAddress>
          <ul>
            <li>
              <FaMapMarkerAlt />
              Lr. 13 de Maio, 520 - Cj 72 - Santo Amaro SP, 05822-020
            </li>
            <li>
              <FaPhoneAlt /> (11) 94977-6197
            </li>
            <li>
              {" "}
              <FaEnvelope /> edneagama@hotmail.com
            </li>
          </ul>
          <a href="https://wa.me/5511982099540" target="_blank">
            falar com advogada
          </a>
        </S.ContactAddress>
      </S.ContactContainer>
    </S.ContactSectionContainer>
  );
};
