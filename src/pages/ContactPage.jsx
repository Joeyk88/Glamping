import HeroSection from "../components/heroSection/HeroSection";
import ContactForm from "../components/contactForm/ContactForm";
import heroImage from "../Gittes_Glamping_Assets/image_04.jpg";

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Kontakt Gitte"
        title="Vil du booke et ophold? Eller har du blot et spørgsmål?"
        subtitle="Så tøv ikke med at tage kontakt til os herunder. Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer."
      />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
