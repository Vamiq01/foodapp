import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="m-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};
