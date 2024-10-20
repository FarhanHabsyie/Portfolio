import React from 'react';

import{
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaDribbble,
} from "react-icons/fa";

import{FiSend} from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    return (
        <section className='contact__section'>
            <h2 className="section__title">
                Get In <span>Touch</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">Don't Be Shy !</h3>

                        <p className="contact__description">
                            Feel Free to get touch with me. 
                            I am always open to discussing new projects, 
                            creative ideas or opportunities to be part of your vision.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className='info__icon'/>

                                <div>
                                    <span className="info__title">Mail me </span>
                                    <h4 className="info__desc">Farhanhabsyee7@gmail.com</h4>
                                </div>
                            </div>

                            <div className="info__item">
                                <FaPhoneSquareAlt className='info__icon'/>

                                <div>
                                    <span className="info__title">Call me </span>
                                    <h4 className="info__desc">+62 895 2390 2104</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">

                            <a href="https://facebook.com/varhan321" className="contact__social-link">
                                <FaFacebookF/>
                            </a>

                            <a href="https://www.instagram.com/farhan_al_habsyi/" className="contact__social-link">
                                <FaInstagram/>
                            </a>
                            
                            <a href="https://youtube.com/c/Farhanhabsyie" className="contact__social-link">
                                <FaYoutube/>
                            </a>

                            <a href="https://dribbble.com" className="contact__social-link">
                                <FaDribbble/>
                            </a>
                        </div>
                    </div>

                    <form className="contract__form">

                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input type="text" placeholder='Your Name' 
                                className="form__control" 
                                />
                            </div>

                            <div className="form__input-div">
                                <input type="email" placeholder='Your Email' 
                                className="form__control" 
                                />
                            </div>

                            <div className="form__input-div">
                                <input type="text" placeholder='Your Subject' 
                                className="form__control" 
                                />
                            </div>
                        </div>

                        <div className="form__input-div">
                               <textarea placeholder='Your Message' className="form__control textarea"></textarea>
                        </div>

                        <button className='button'>
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend />
                            </span>
                        </button>
                    </form>
                </div>
        </section>
    );
};
export default Contact