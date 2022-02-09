import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ botInfo, Login }) => {
  return (
    <Router>
      <Routes>
        {botInfo ? (
          <Route exact path="/" element={<Home botInfo={botInfo} />} />
        ) : (
          <Route exact path="/" element={<Auth Login={Login} />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
