import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";
import Home from "./pages/Home";
import Stay from "./pages/Stay";
import ContactPage from "./pages/ContactPage";
import Events from "./pages/Events";
import MyList from "./pages/MyList";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ophold" element={<Stay />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/aktiviteter" element={<Events />} />
        <Route path="/min-liste" element={<MyList />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
