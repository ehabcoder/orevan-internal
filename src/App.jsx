import "./App.css";
import { Login } from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Communication } from "./Components/Communication/Communication";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import "./style.css";
import { Footer } from "./Components/Footor/Footor";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassowrd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          {/* <Route path="/Footer" element={<Footer />} /> */}
          <Route element={<Navbar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
