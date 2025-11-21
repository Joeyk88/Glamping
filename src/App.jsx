import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Stay from "./pages/Stay";
import ContactPage from "./pages/ContactPage";
import Events from "./pages/Events";
import MyList from "./pages/MyList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ophold" element={<Stay />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/aktiviteter" element={<Events />} />
            <Route path="/min-liste" element={<MyList />} />
          </Routes>
          <Footer />
        </main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
