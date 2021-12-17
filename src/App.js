import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getCryptos,getExchanges, getNews } from "./actions";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getExchanges());
    dispatch(getCryptos());
    dispatch(getNews());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__navbar">
          <Navbar />
        </div>
        <div className="app__main">
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <div className="app__footer">
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
