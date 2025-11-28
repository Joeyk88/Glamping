import HeroSection from "../components/heroSection/HeroSection";
import ActivitiesSection from "../components/activitiesSection/ActivitiesSection";
import heroImage from "../Gittes_Glamping_Assets/image_04.jpg";

const Activities = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        headerTitle="Aktiviteter"
        title="Oplev naturen på din måde"
        subtitle="Vi tilbyder et bredt udvalg af aktiviteter, så du kan nyde din tid hos os på netop den måde, du ønsker. Fra afslappende naturvandringer til spændende kanosejladser - der er noget for enhver smag."
      />
      <ActivitiesSection />
    </div>
  );
};

export default Activities;
