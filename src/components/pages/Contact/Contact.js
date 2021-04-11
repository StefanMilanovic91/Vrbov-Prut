import React, { useState } from 'react';

import { checkFirstLastName, checkEmail, checkText } from '../../validation/validation';

import Map from '../../UI/Map/Map';

const Contact = () => {

    const [form, setForm] = useState({
        firstName: {
            value: '',
            name: 'firstName',
            isValid: false,
            isTouched: false
        },
        lastName: {
            value: '',
            name: 'lastName',
            isValid: false,
            isTouched: false
        },
        email: {
            value: '',
            name: 'email',
            isValid: false,
            isTouched: false
        },
        text: {
            value: '',
            name: 'text',
            isValid: false,
            isTouched: false
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(null);

    const defaultInputClasses = ["Contact__form__group__input"].join(' ');
    const badInputClasses = ["Contact__form__group__input", "Contact__form__group__input-bad"].join(' ');
    const loader = <div class="lds-dual-ring"></div>

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
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }

        // set new state
        setForm(temporaryForm);
    }

    const submit = (e) => {
        
        e.preventDefault();
        // start loading
        setShowLoader(true)
        // append data in new FormData structure
        let data = new FormData();
        for ( let key in form ) {
            data.append(key, form[key].value);
        }
        
        fetch('https://formspree.io/f/xbjqjpna', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            setShowLoader(false)
            setShowSuccessMsg('Poruka je poslata');
            setTimeout(() => setShowSuccessMsg(null), 5000);
            console.log(response);
        }).catch(error => {
            setShowLoader(false)
            setShowSuccessMsg('Oops, pokusajte kasnije, hvala');
            setTimeout(() => setShowSuccessMsg(null), 5000);
            console.log("Oops! There was a problem submitting your form");
          });
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
                                <li className="Navbar-item">vrbovprut035@gmail.com</li>
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
                                    <input onChange={onChangeInput} name="firstName" value={form['firstName'].value} type="text" className={form.firstName.isTouched ? form.firstName.isValid ? defaultInputClasses : badInputClasses : defaultInputClasses} placeholder="Ime" required />
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Prezime</label>
                                    <input onChange={onChangeInput} name="lastName" value={form['lastName'].value} type="text" className={form.lastName.isTouched ? form.lastName.isValid ? defaultInputClasses : badInputClasses : defaultInputClasses} placeholder="Prezime" required />
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Email adresa</label>
                                    <input onChange={onChangeInput} name="email" value={form['email'].value} type="email" className={form.email.isTouched ? form.email.isValid ? defaultInputClasses : badInputClasses : defaultInputClasses} placeholder="Email adresa" required />
                                </div>
                                <div className="Contact__form__group">
                                    <label className="Contact__form__label">Text poruke</label>
                                    <textarea onChange={onChangeInput} name="text" value={form['text'].value} type="text" className={form.text.isTouched ? form.text.isValid ? defaultInputClasses : badInputClasses : defaultInputClasses} cols="30" rows="10" placeholder="Vaša poruka" required ></textarea>
                                </div>
                                <button disabled={!formIsValid} onClick={submit} className={formIsValid ? "btn btn-block btn-success" : "btn btn-block btn-disabled"}>{ showLoader ? loader : showSuccessMsg ? showSuccessMsg : 'Pošalji poruku'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
