import React, { useState } from 'react'

const Carousel = ({ crsItems }) => {

    const [children, setChildren] = useState(crsItems);
    console.log(crsItems.length);
    return (
        <div className="Carousel">
            {
                crsItems.map(item => <div style={{"transform": `translateX(${crsItems.length + 1}00%)`}} className="Carousel__item">
                    <img className="Carousel__item__img" src={item.src} alt="test"/>
                </div>)
            }
            
        </div>
    )
}

export default Carousel
