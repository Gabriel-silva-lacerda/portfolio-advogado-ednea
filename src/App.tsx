import { Header } from "./components/header/Index";
import { GlobalStyle } from "./styles/Styles";
import { Home } from "./pages/home/initialSection/Index";
import { AboutSection } from "./pages/home/aboutSection/Index";
import { OccupancyAreaSection } from "./pages/home/occupancyAreaSection/Index";
import { ContactSection } from "./pages/home/contactSection/Index";
import { Footer } from "./components/footer/Index";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <AboutSection />
      <OccupancyAreaSection />
      <ContactSection />
      <Footer />
    </>
  );
};
