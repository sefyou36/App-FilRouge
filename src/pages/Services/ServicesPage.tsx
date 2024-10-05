import ServicesFoodContent from "@/components/ServicesFoodContent/ServicesFoodContent";
import ServicesOptions from "@/components/ServicesOptions/ServicesOptions";
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import { foodItems } from "@/constants/index";

function ServicesPage() {
  return (
    <>
      <ShortBackground title="Services" background="/images/services.jpg" />
      <ServicesOptions />
      <ServicesFoodContent foodItems={foodItems} />
    </>
  );
}

export default ServicesPage;
