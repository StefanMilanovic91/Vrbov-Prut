import React, { useContext, useState } from 'react';
import { ProductContext } from '../../../ContextAPIs/ProductContext';
import { ModalContext } from '../../../ContextAPIs/ModalContext';

const Modal = () => {

    const { pickedProduct } = useContext(ProductContext);
    const { showModalHendler } = useContext(ModalContext)
    const [counter, setCounter] = useState(0);

    const nextPicture = () => {
        if(pickedProduct.sliderThmbs.length - 1 === counter){
            setCounter(0);
        }else {
            setCounter(counter + 1)
        }
    }
    const prevPicture = () => {
        if(counter === 0){
            setCounter(pickedProduct.sliderThmbs.length - 1);
        }else {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="Modal">
            <div className="container-fluid px-0">
                <div className="Modal__holder">
                    <div className="Modal__holder__img">
                        <img className="Modal__holder__img__item" src={'/' + pickedProduct.sliderThmbs[counter]} alt={pickedProduct.title} />
                    </div>
                    <div onClick={prevPicture} className="Modal__holder__prev-btn"></div>
                    <div onClick={nextPicture} className="Modal__holder__next-btn"></div>
                    <div onClick={showModalHendler} className="Modal__holder__exit-btn"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal
