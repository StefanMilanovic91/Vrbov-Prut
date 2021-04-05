import React from 'react';
import Map from '../../UI/Map/Map';

const Contact = () => {
    return (
        <div className="Page Contact">
            <div className="container">
                <h1 className="Main-title">Kontakt</h1>
                <div className="underline"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="Contact__map">
                            <Map />
                        </div>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
