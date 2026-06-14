import TopBar from "./components/TopBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Statistics from "./components/Statistics";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <Technology />
        <Statistics />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
