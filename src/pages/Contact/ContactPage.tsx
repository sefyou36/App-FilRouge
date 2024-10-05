import ContactUs from "@/components/ContactUs/ContactUs";
import ShortBackground from "@/components/ShortBackground/ShortBackground";

function ContactPage() {
  return (
    <section>
      <ShortBackground
        title="Contact Us"
        background="/images/hero_contactus.jpg"
      />
      <ContactUs />
    </section>
  );
}

export default ContactPage;
