import DeliveryAbout from "@/components/DeliveryAbout/DeliveryAbout";
import HeroContent from "@/components/HeroContent/HeroContent";
import Trending from "@/components/Trending/Trending";

function AboutPage() {
  return (
    <section>
      <HeroContent
        title="Enjoy Eatsy Burgers at home!"
        subtitle="You can order until 10PM"
        backgroundImage="/images/hero_about.jpg"
      />
      <DeliveryAbout />
      <Trending />
    </section>
  );
}

export default AboutPage;
