// import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import Home from "./pages/Home";
import Papers from "./pages/Papers";
import Detail from "./components/Detail";
import Summary from "./components/Summary";
import Mission from './pages/Mission'
import Experiments from "./pages/Experiments";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/papers" element={<Papers />} />
          <Route path='/missions' element={<Mission/>}/>
          <Route path="/paper/:id" element={<Detail />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;















