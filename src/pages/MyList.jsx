import HeroSection from "../components/heroSection/HeroSection";
import heroImage from "../Gittes_Glamping_Assets/image_05.jpg";

const MyList = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Min Liste"
        title="Antal aktiviteter og ophold i din liste:"
      />
    </div>
  );
};

export default MyList;
