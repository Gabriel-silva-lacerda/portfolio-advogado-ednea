import * as S from "./Style";
import Logo from "../../../assets/logo.png";

export const Home = () => {
  return (
    <S.InitialHomePage id="home">
      <img src={Logo} alt="logo" />
     
      <a href="#occupancyArea">meus serviços</a>
    </S.InitialHomePage>
  );
};
