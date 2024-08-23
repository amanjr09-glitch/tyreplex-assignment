import "./App.css";
import Header from "./components/Header/Header";
import Breadcrumb from "./components/Breadcrumbs/Breadcrumb";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import Deals from "./components/Deals/Deals";
import Footer from "./components/Footer/Footer";
import CallToAction from "./components/CTA/cta";
import DealerServices from "./components/services/DealerServices";
import DealerTires from "./components/TyresShop/TireCard";

function App() {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <Hero />
      <DealerServices/>
      <DealerTires/>
      <Reviews />
      <Deals />
      <CallToAction/>
      <Footer />
    </div>
  );
}

export default App;
