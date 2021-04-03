import React, { useContext } from 'react'
import { ModalContext } from '../../../../ContextAPIs/ModalContext';


const Product = ({product, paramsId}) => {

    const { showModal, showModalHendler } = useContext(ModalContext);
    
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="Product">
                <div onClick={showModalHendler} className="Product__img">
                    <img src={product.src} alt={product.title}/>
                    <div className="Product__img__preview">
                        <div className="Product__img__preview__icon"></div>
                    </div>
                </div>
                <div className="Product__data">
                    <h3 className="Product__data__title">{product.title}</h3>
                    <div className="Product__data__box">
                        <div className="Product__data__box__1">
                            { (paramsId === 'baloni' || paramsId === 'flaše') && <p>Litara:</p> }
                            <p>Dužina:</p>
                            <p>Širina:</p>
                            <p>Visina:</p>
                            <p>Cena:</p>
                        </div>
                        <div className="Product__data__box__2">
                            { (paramsId === 'baloni' || paramsId === 'flaše') && <p className="Product__data__length">{product.liters}</p> }
                            <p className="Product__data__length">{product.length}</p>
                            <p className="Product__data__width">{product.width}</p>
                            <p className="Product__data__height">{product.height}</p>
                            <p className="Product__data__price">{product.price}</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default Product
