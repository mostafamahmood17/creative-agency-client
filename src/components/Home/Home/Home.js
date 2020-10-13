import React from 'react';
import CarouselSection from '../CarouselSection/CarouselSection';
import ClientBrand from '../ClientBrand/ClientBrand';
import ClientSection from '../ClientSection/ClientSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="head">
            <div className="design">
             <div className="backgroundDesign">
                <Navbar></Navbar>
                <Header></Header>
             </div>
             <ClientBrand></ClientBrand>
             <Services></Services>
             <CarouselSection></CarouselSection>
             <ClientSection></ClientSection>
             <Footer></Footer>

            </div>
            



        </div>
    );
};

export default Home;