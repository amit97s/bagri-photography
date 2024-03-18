import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
import Portfolio from "../Components/Portfolio";
import Finalcontact from "../Components/Finalcontact";
import Portwed from "../Components/Portwed";
import Porteng from "../Components/Porteng";
import PageNotFound from "../Components/PageNotFound";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Finalcontact />}></Route>
          <Route path="/wedding" element={<Portwed />}></Route>
          <Route path="/engagements" element={<Porteng />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
