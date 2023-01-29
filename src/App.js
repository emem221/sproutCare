import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Search from "./component/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
