import React from 'react'


import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import SingleCard from '../components/SingleCard'


export const Home = () => {
    return (
        <div>
            <div style={{ margin: "5rem 0 0 0" }}>
                <Hero />
            </div>
            <Cards />
            <SingleCard />
            <Footer />
        </div>
    )
}
