"use client";
import React, { useEffect, useState } from "react";
import Header from "../Base/Header";
import Hero from "./components/Hero";
import Solver from "./components/Solver";
import Info from "./components/Info";
import Join from "./components/Join";
import Footer from "../Base/Footer";
import Speak from "./components/Speak";
import Service from "./components/Service";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <Solver />
        <Info />
        <Service />
        <Pricing />
        <Speak />
        <Join />
      </main>
      <Footer />
    </>
  );
}
