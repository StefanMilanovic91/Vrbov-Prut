import React, { useRef, useState } from 'react';
import Map from '../../UI/Map/Map';

const Contact = () => {

    const [form, setForm] = useState({
        firstName: {
            value: '',
            name: 'firstName',
            isValid: false,
            isRequired: true,
            isTouched: false
        },
        lastName: {
            value: '',
            name: 'lastName',
            isValid: false,
            isRequired: true,
            isTouched: false
        },
        email: {
            value: '',
            name: 'email',
            isValid: false,
            isRequired: true,
            isTouched: false
        },
        text: {
            value: '',
            name: 'text',
            isValid: false,
            isRequired: true,
            isTouched: false
        },
        isValid: false
    });

    const checkFirstLastName = (value) => {
        let patt = /[A-Za-z]{3,25}$/;

        if (!patt.test(value.replace(/\s/g, ''))) {
            return false;
        } else {
            return true;
        }
    }

    const checkEmail = (value) => {
        let patt = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9.]+)\.([a-zA-Z]{2,6})$/;
    
        if(!patt.test(value.trim())){
            return false;
        } else {
            return true;
        }
    }
    const checkText = (value) => {
        let patt = /^.{5,150}$/;

        if (!patt.test(value.replace(/\s/g, ''))) {
            return false;
        } else {
            return true;
        }
    }

    const onChangeInput = (e) => {
        
        let temporaryForm = { ...form };
        temporaryForm[e.target.name].value = e.target.value;
        temporaryForm[e.target.name].isTouched = true;
        
        
        // check input is valid
        switch (e.target.name) {
            case 'firstName':
                temporaryForm[e.target.name].isValid = checkFirstLastName(form.firstName.value);
                break;
            case 'lastName':
                temporaryForm[e.target.name].isValid = checkFirstLastName(form.lastName.value);
                break;
            case 'email':
                temporaryForm[e.target.name].isValid = checkEmail(form.email.value);
                break;
            case 'text':
                temporaryForm[e.target.name].isValid = checkText(form.text.value);
                break;
            default:
                break;
        }

        // check form is Valid
        if (temporaryForm['firstName'].isValid &&
            temporaryForm['lastName'].isValid &&
            temporaryForm['email'].isValid &&
            temporaryForm['text'].isValid
        ){
            temporaryForm.isValid = true;
        } else {
            temporaryForm.isValid = false;
        }

        // set new state
        setForm(temporaryForm);
    }

    const submit = (e) => {
        
        e.preventDefault();
        console.log(form);
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
                    <div className="col-12 col-md-6">
                        <div className="Contact__form">
                            <form>
                                <h3 className="second-title text-center">Kontakt Forma</h3>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Ime</label>
                                    <input required onChange={onChangeInput} name="firstName" value={form['firstName'].value} type="text" className={form.firstName.isTouched ? form.firstName.isValid ? "Contact__form__group__input" : "Contact__form__group__input Contact__form__group__input-bad" : "Contact__form__group__input"} placeholder="Ime"/>
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Prezime</label>
                                    <input required onChange={onChangeInput} name="lastName" value={form['lastName'].value} type="text" className={form.lastName.isTouched ? form.lastName.isValid ? "Contact__form__group__input" : "Contact__form__group__input Contact__form__group__input-bad" : "Contact__form__group__input"} placeholder="Prezime"/>
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Email adresa</label>
                                    <input required onChange={onChangeInput} name="email" value={form['email'].value} type="email" className={form.email.isTouched ? form.email.isValid ? "Contact__form__group__input" : "Contact__form__group__input Contact__form__group__input-bad" : "Contact__form__group__input"} placeholder="Email adresa"/>
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Text poruke</label>
                                    <textarea required onChange={onChangeInput} name="text" value={form['text'].value} type="text" className={form.text.isTouched ? form.text.isValid ? "Contact__form__group__input-text" : "Contact__form__group__input-text Contact__form__group__input-bad" : "Contact__form__group__input-text"} cols="30" rows="10" placeholder="Vaša poruka"></textarea>
                                </div>
                                <button disabled={!form.isValid} onClick={submit} className={form.isValid ? "btn btn-block btn-success" : "btn btn-block btn-darkgrey" }>Pošalji poruku</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
