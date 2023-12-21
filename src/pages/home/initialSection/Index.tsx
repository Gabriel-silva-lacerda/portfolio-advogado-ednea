import Logo from "../../../assets/logo.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as S from "./Style";

export const Home = () => {
  const ref = useRef<HTMLElement | null>(null);
  return (
    <S.InitialHomePage id="home" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <img src={Logo} alt="logo" />

        <a href="#occupancyArea">meus serviços</a>
      </motion.div>
    </S.InitialHomePage>
  );
};
