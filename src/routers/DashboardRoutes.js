import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";
import { Home } from "../components/home/Home";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="search" element={<SearchScreen />} />
          <Route path="search/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
