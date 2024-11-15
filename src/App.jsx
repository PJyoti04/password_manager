import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-[87vh] ">
      </div> */}
        <Manager />
      <Footer />
    </>
  );
}

export default App;
