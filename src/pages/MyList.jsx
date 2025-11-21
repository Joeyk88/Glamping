import HeroSection from "../components/heroSection/HeroSection";
import heroImage from "../Gittes_Glamping_Assets/image_05.jpg";

const MyList = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Min Liste"
        title="Dine favoritter"
        subtitle="Her kan du samle alle dine favorit ophold og aktiviteter, så du nemt kan finde tilbage til dem og planlægge dit perfekte glamping-ophold."
      />
    </div>
  );
};

export default MyList;
