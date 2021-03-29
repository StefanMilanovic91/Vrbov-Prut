import React, { useState } from 'react';

import Carousel from '../../UI/Carousel/Carousel';

const AboutUs = () => {

    const [images, setImages] = useState([{src: "images/slide-1.jpg"}, {src: "images/slide-2.jpg"},{src: "images/slide-3.jpg"},{src: "images/slide-4.jpg"}])


    return (
        <main className="Page AboutUs">
            <div className="container">
                <Carousel carouselItems={images} />
            </div>
        </main>
    )
}

export default AboutUs
