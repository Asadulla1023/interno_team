import React from 'react'

import "./Tackling.css"

import tackle from "../images/Tackle.png"

import RightArrow from "../images/arrowRight.svg"

import Call from "../images/Call.svg"

export const Tackling = () => {
    return (
        <div className='Tackling'>
            <div className="cont">
                <div className="tackleLeft">
                    <h2>We Tackle The Most Challenging Designs</h2>
                    <p>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</p>
                    <div className="contact">
                        <div className="call">
                            <a href="tel:+012345678">
                                <img src={Call} alt={Call} />
                            </a>
                        </div>
                        <div className="numbertocall">
                            <a href="tel:+012345678">012345678</a>
                            <p>Call Us Anytime</p>
                        </div>
                    </div>
                    <button>Get Free Estimate
                        <img src={RightArrow} alt="arrow" />
                    </button>
                </div>
                <div className="tackleRight">
                    <img src={tackle} alt={tackle} />
                </div>
            </div>
        </div>
    )
}
