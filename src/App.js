import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import Demo from "./Components/Demo";
import Card from "./Components/Card/Card";
library.add(fab, fas, far);

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />

          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/demo" element={<Demo/>} />

          <Route path="/cart" element={<Card />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
