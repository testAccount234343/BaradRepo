import React from "react";
import HeaderNavbar from "../Components/HeaderNavbar";
import HeaderBody from "../Components/HeaderBody";

const HomePage = () => {
  return (
    <header className="header">
      {/* Navbar Component Start Here */}
      <HeaderNavbar />
      {/* Header Body Component Start Here */}
      <HeaderBody />
    </header>
  );
};

export default HomePage;
