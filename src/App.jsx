import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="app description" />
      </Helmet>
      <Navbar />
      <Routes></Routes>
    </Router>
  );
}

export default App;
