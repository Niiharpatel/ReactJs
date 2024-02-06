import React from "react";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github from "./Components/GitHub/Github";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/github"
            // loader={githubInfoLoader}
            element={<Github />}
          />
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
