import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Log_in_page from "./Components/LogInPage/LogPage";
import SignUp from "./Components/SignUp/SignUp";
import Card from "./Components/Card/Card";
library.add(fab, fas, far);

function App() {
  return (
    <>
      <BrowserRouter>
         
        <Routes>
          <Route path="/" element={<HeroSection />} />
          
          <Route path="Login" element={<Log_in_page/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
