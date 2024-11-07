import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import ToDo from "./Components/To-Do";  // This will be the   from which users navigate to the day-specific  s
import MondayPage from "./Components/days/monday";
import TuesdayPage from "./Components/days/tuesday";
import WednesdayPage from "./Components/days/wednesday";
import ThursdayPage from "./Components/days/thursday";
import FridayPage from "./Components/days/friday";
import SaturdayPage from "./Components/days/saturday";
import SundayPage from "./Components/days/sunday";
import Login from "./Components/Login";

const App = () => {
  return (
    <Router>
      <div id="i am tired">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<ToDo />} />
          {/* To keep track of when the pain starts */}
          <Route path="/monday" element={<Monday />} />
          <Route path="/tuesday" element={<TuesdayPage />} />
          <Route path="/wednesday" element={<Wednesday />} />
          <Route path="/thursday" element={<Thursday  />} />
          <Route path="/friday" element={<Friday  />} />
          <Route path="/saturday" element={<Saturday  />} />
          <Route path="/sunday" element={<Sunday  />} />

          
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
