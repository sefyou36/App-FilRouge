/* eslint-disable react/react-in-jsx-scope */
import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import HowWork from "@/components/HowWork/HowWork";
import Restaurant from "@/components/Restaurant/Restaurant";
import WorkWithUs from "@/components/WorkWithUs/WorkWithUs";

function HomePage() {
  return (
    <section>
      <Hero />
      <HowWork />
      <Restaurant />
      <Banner />
      <WorkWithUs />
    </section>
  );
}

export default HomePage;
