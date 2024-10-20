import React from 'react'
import Profile from "../../assets/farhan.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa";
import  "./home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Farhan Habsyie.</span> Software Engineer
                    </h1>

                    <p className="home__description">
                        I'm a Indonesian based software engineer & fullstack developer focused on 
                        crafting clean & user-freindly experiences
                        </p>

                        <Link to='/About' className='button'>
                            More About Me{''} 
                            <span className='button__icon'>
                                <FaArrowRight />
                            </span>
                        </Link>
                </div>
            </div>
            <div className="color__block"></div>
        </section>
    )
}
export default Home