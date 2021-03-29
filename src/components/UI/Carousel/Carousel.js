import React, { Fragment, useEffect, useRef, useState } from 'react'

const Carousel = ({ carouselItems }) => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const refArray = useRef([]);


    let styles = {
        inner: {
            'transform': `translateX(-${currentIndex}00%)`
        }
    }

    let classes = ['Carousel__inner', 'Carousel__inner__animation'].join(' ');

    useEffect(() => {

        if (carouselItems.length + 1 === currentIndex) {
            
            let id = setTimeout(() => {
                refArray.current.classList.remove('Carousel__inner__animation');
                setCurrentIndex(1);
                
            }, 1000);
            return () => clearTimeout(id);
        } else {
            
            let id = setTimeout(() => {
                refArray.current.classList.add('Carousel__inner__animation');
                setCurrentIndex(currentIndex + 1)
            }, 3000);
            return () => clearTimeout(id);
        }

        

    }, [currentIndex]);
    
    console.log(currentIndex);
    //ref={ref => refArray.current[index] = ref}
    return (
        <div className="Carousel" >
            <div ref={refArray} className={classes} style={styles.inner}>
            {
                    carouselItems.map((item, index) => {
                        if (carouselItems.length - 1 === index) {
                            return <Fragment>
                                        <div  key={index + 11} className="Carousel__item">
                                            <img className="Carousel__item__img" src={item.src} alt="test"/>
                                        </div>
                                        <div  key={index} className="Carousel__item">
                                            <img className="Carousel__item__img" src={carouselItems[0].src} alt="test"/>
                                        </div>
                                    </Fragment>
                        } else if (index === 0) {
                            return <Fragment>
                                        <div  key={index} className="Carousel__item">
                                            <img className="Carousel__item__img" src={carouselItems[carouselItems.length - 1].src} alt="test"/>
                                        </div>
                                        <div  key={index  + 11} className="Carousel__item">
                                            <img className="Carousel__item__img" src={item.src} alt="test"/>
                                        </div>
                                    </Fragment>
                        } else {
                            return  <div  key={index} className="Carousel__item">
                                        <img className="Carousel__item__img" src={item.src} alt="test"/>
                                    </div>
                        }
                        
                    })
            }
            </div>
        </div>
    )
    
}



export default Carousel
