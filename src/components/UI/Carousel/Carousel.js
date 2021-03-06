import React, { Fragment, useEffect, useRef, useState } from 'react'
import { v4 as uuid_v4 } from "uuid";

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
        
        let time = currentIndex === 1 ? 2298 : 3000

        if (carouselItems.length === currentIndex - 1) {
            
            let id1 = setTimeout(() => {
                refArray.current.classList.remove('Carousel__inner__animation');
                setCurrentIndex(1);
            }, 702);
            return () => clearTimeout(id1);
        }
        
        let id2 = setTimeout(() => {
            if (currentIndex === 1) refArray.current.classList.add('Carousel__inner__animation');
            setCurrentIndex(currentIndex + 1);
        }, time);
        
        return () => clearTimeout(id2);
        

    }, [currentIndex, carouselItems.length]);
    
    
    return (
        <div className="Carousel" >
            <div ref={refArray} className={classes} style={styles.inner}>
                
            {
                    carouselItems.map((item, index) => {
                        if (carouselItems.length - 1 === index) {
                            return <Fragment key={uuid_v4()} >
                                        <div className="Carousel__item">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet={item.srcSmall} />
                                                <source media="(min-width: 769px)" srcSet={item.src} />
                                                <img className="Carousel__item__img" src={item.src} alt="Korpe od pruca"/>
                                            </picture>
                                        </div>
                                        <div className="Carousel__item">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet={carouselItems[0].srcSmall} />
                                                <source media="(min-width: 769px)" srcSet={carouselItems[0].src} />
                                                <img className="Carousel__item__img" src={carouselItems[0].src} alt="Korpe od pruca"/>
                                            </picture>
                                        </div>
                                    </Fragment>
                        } else if (index === 0) {
                            return <Fragment key={uuid_v4()} >
                                        <div className="Carousel__item">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet={carouselItems[carouselItems.length - 1].srcSmall} />
                                                <source media="(min-width: 769px)" srcSet={carouselItems[carouselItems.length - 1].src} />
                                                <img className="Carousel__item__img" src={carouselItems[carouselItems.length - 1].src} alt="Korpe od pruca"/>
                                            </picture>
                                        </div>
                                        <div className="Carousel__item">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet={item.srcSmall} />
                                                <source media="(min-width: 769px)" srcSet={item.src} />
                                                <img className="Carousel__item__img" src={item.src} alt="Korpe od pruca"/>
                                            </picture>
                                        </div>
                                    </Fragment>
                        } else {
                            return  <div key={uuid_v4()} className="Carousel__item">
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet={item.srcSmall} />
                                            <source media="(min-width: 769px)" srcSet={item.src} />
                                            <img className="Carousel__item__img" src={item.src} alt="Korpe od pruca"/>
                                        </picture>
                                    </div>
                        }
                        
                    })
            }
            </div>
            <div className="Carousel__caption">
                <div className="Carousel__caption__holder">
                    <h3 className="Carousel__caption__title">
                        Pletarska radnja <br/> <span className="Logo">Vrbov prut</span>
                    </h3>
                    <p className="Carousel__caption__paragraph">
                        Ako Vam se dopadne neki od na??ih proizvoda mo??ete poru??iti telefonom, e-mail-om ili popunjavanjem kotakt forme, a mi ??emo se postarati da odabrani proizvod kurirskom slu??bom po??aljemo u najkra??e mogu??em roku.
                    </p>
                </div>
            </div>
        </div>
    )
    
}



export default Carousel
