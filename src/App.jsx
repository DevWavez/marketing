import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import PageInfo from "./components/PageInfo";

const App = () => {
  return (
    <div>
      <HeroSection />
      <PageInfo />

      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default App;
