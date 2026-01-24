import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Attractions from "@/components/Attractions";
import InternationalTours from "@/components/InternationalTours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Attractions />
      <InternationalTours />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
