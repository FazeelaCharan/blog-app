import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <div className="bg-blue-300 min-h-screen">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
