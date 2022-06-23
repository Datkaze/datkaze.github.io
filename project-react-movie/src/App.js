import "./css/filter.css";
import "./css/grid.css";
import "./css/main.css";
import "./css/reponsive.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import RouterPages from "./pages/RouterPages";
import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   window.location.reload()
  //   }, [])

  return (
    <div className="App">
      <Header />
      <RouterPages />
      <Footer />
    </div>
  );
}

export default App;
