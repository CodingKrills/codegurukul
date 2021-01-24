import React from "react";
import './index.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Footer from './components/Footer'
import SingleCard from './components/SingleCard'


export default function App() {

  return (
    <>
      <Header />
      <div style={{ margin: "5rem 0 0 0" }}>
        <Hero />
      </div>
      <Cards />
      <SingleCard />
      <Footer />
    </>
  );
}