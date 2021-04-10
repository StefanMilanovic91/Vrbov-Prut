import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../UI/Carousel/Carousel';

const AboutUs = () => {

    const images = [ 
        {
            srcSmall: "images/slide-small-4.jpg", 
            src: "images/slide-4.jpg"
        },
        {
            srcSmall: "images/slide-small-3.jpg",
            src: "images/slide-3.jpg"},
        {
            srcSmall: "images/slide-small-2.jpg",
            src: "images/slide-2.jpg"
        },
        {
            srcSmall: "images/slide-small-1.jpg",
            src: "images/slide-1.jpg"
        }]


    return (
        <main className="Page AboutUs">
            <div className="container">
                <Carousel carouselItems={images} />
            </div>
            <div className="container">
                <div className="AboutUs__title">
                    <h1 className="Main-title">O Nama</h1>
                    <span className="underline"></span>
                </div>
                <div className="AboutUs__paragraphs">
                    <div className="AboutUs__paragraph">
                        Pletarska radnja Vrbov prut ima tradiciju dugu vise od 40 godina. To je postao porodični posao koji se prenosi kroz generacije.
                    </div>
                    <div className="AboutUs__paragraph">
                        Za to vreme smo uspeli da podignemo kvalitet izrade naših proizvoda na najviši nivo i postavimo standarde u proizvodnji.
                    </div>
                    <div className="AboutUs__paragraph">
                        Imamo paletu najrazlicitijih proizvoda od pruća kao sto su stolice, koferi, korpe za kukuruz, trmke, kolevke,
                        ali nasa specijalnost su:
                        <ul className="AboutUs__links-holder">
                            <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/korpe"># Korpe</Link></li>
                            <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/baloni"># Baloni</Link></li>
                            <li className="Navbar__list-item"><Link className="Navbar__link" to="/proizvodi/flaše"># Flase</Link></li></ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs
