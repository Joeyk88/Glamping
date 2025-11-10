import "./App.css";
import Reviews from "./components/reviews/Reviews";
import PageHeader from "./components/pageHeader/PageHeader";
import InfoSection from "./components/infosection/InfoSection";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <PageHeader />
      <InfoSection />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
