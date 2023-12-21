import Logo from "../../../assets/logo.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import * as S from "./Style";

export const ContactSection = () => {
  const { ref, controls } = useScrollAnimation();
  return (
    <S.ContactSectionContainer
      id="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
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
