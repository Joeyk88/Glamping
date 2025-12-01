import PageHeader from "../components/pageHeader/PageHeader";
import InfoSection from "../components/infosection/InfoSection";
import Reviews from "../components/reviews/Reviews";
import heroImage from "../Gittes_Glamping_Assets/image_00.jpg";

const Home = () => {
  return (
    <>
      <PageHeader bgImg={heroImage} />
      <InfoSection />
      <Reviews />
    </>
  );
};

export default Home;
