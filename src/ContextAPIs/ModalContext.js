import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false);

    const showModalHendler = () => setShowModal(!showModal);


    return (
        <ModalContext.Provider value={{showModal, showModalHendler}}>
            {children}
        </ModalContext.Provider>
    )

}