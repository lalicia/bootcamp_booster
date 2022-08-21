import "./App.css";
import React from "react";

//imports for React Router as per docs
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import pages here
import Home from "./pages/Home";
import HtmlTopic from "./pages/HtmlTopic";
import CssTopic from "./pages/CssTopic";
import ReactTopic from "./pages/ReactTopic";
import UiUxTopic from "./pages/UiUxTopic";
import ErrorPage from "./pages/ErrorPage";

//deals with React Router to render the various pages
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HtmlTopic />} />
      <Route path="/css" element={<CssTopic />} />
      <Route path="/react" element={<ReactTopic />} />
      <Route path="/uiux" element={<UiUxTopic />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;