import React, { useState } from 'react';
import Map from '../../UI/Map/Map';

const Contact = () => {

    const [form, setForm] = useState({ name: '', email: '', text: '' });

    const name = (value) => {
        let patt = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$ // /^[A-Z]{1}[A-Za-z]{2,25}$/;
    
        if(!patt.test(value.replace(/\s/g,''))){
            return false;
        }else {
            return true;
        }
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(name(form.name)); 
        
    }

    return (
        <div className="Page Contact">
            <div className="container">
                <h1 className="Main-title">Kontakt</h1>
                <div className="underline"></div>
            </div>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-6 pb-5">
                        <Map />
                    </div>
                    <div className="col-12 col-md-6 pb-5">
                        <div className="Contact__data">
                            <ul className="Navbar__list">
                                <li className="Navbar-item">063 / 814 - 68 - 29</li>
                                <li className="Navbar-item">035 / 275 - 201</li>
                                <li className="Navbar-item">vrbovprut@gmail.com</li>
                                <a href='http://www.facebook.com' target="blank" className="Navbar-item">Facebook</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="Contact__form">
                            <form>
                                <h3 className="second-title text-center">Kontakt Forma</h3>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Ime i prezime</label>
                                    <input onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} name="name" value={form.name} type="text" className="Contact__form__group__input" placeholder="Ime i prezime"/>
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Email adresa</label>
                                    <input onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} name="email" value={form.email} type="email" className="Contact__form__group__input" placeholder="Email adresa"/>
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Text poruke</label>
                                    <textarea onChange={(e) => setForm({...form, [e.target.name]: e.target.value})} name="text" value={form.text} type="text" className="Contact__form__group__input-text" cols="30" rows="10" placeholder="Vaša poruka"></textarea>
                                </div>
                                <button onClick={submit} className="btn btn-block btn-success">Pošalji poruku</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
