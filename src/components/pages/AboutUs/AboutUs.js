import React from 'react';

import Carousel from '../../UI/Carousel/Carousel';

const AboutUs = () => {

    const images = [ {src: "images/slide-4.jpg"},{src: "images/slide-3.jpg"},{src: "images/slide-2.jpg"},{src: "images/slide-1.jpg"}]


    return (
        <main className="Page AboutUs">
            <div className="container">
                <Carousel carouselItems={images} />
            </div>
            <div className="container">
                <div className="AboutUs__title">
                    <h1 className="Main-title">O Nama</h1>
                    <span class="underline"></span>
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
                        <ul class="AboutUs__links-holder">
                            <li class="Navbar__list-item"><a class="Navbar__link" href="/"># Korpe</a></li>
                            <li class="Navbar__list-item"><a class="Navbar__link" href="/"># Baloni</a></li>
                            <li class="Navbar__list-item"><a class="Navbar__link" href="/"># Flase</a></li></ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs
