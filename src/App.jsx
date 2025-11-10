import "./App.css";
import Reviews from "./components/reviews/Reviews";
import PageHeader from "./components/pageHeader/PageHeader";
import InfoSection from "./components/infosection/InfoSection";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <PageHeader />
      <InfoSection />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
