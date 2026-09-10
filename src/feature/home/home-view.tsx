import Hero from "./sections/hero";
import Features from "./sections/features";
import ProductsGallery from "./sections/products";
import Process from "./sections/process";
import Portfolio from "./sections/portfolio";
import WhyChooseUs from "./sections/why-choose-us";
import Faq from "./sections/faq";

export default function HomeView() {
  return (
    <div>
      <main className="bg-white">
        <Hero />
        <WhyChooseUs />
        <Process />
        <Features />
        <Portfolio />
        <Faq />
        {/* <ProductsGallery /> */}
      </main>
    </div>
  );
}
