import React from 'react'

import "./About.css"

import Arr from "../images/arrowRight.svg"

export const About = () => {
    return (
        <div className="design">
            <div className="cont">
                <div className="interior">
                    <div className="toCenter">
                        <h3>Interior Design</h3>
                        <p>Enhancing the interior to achieve a healthier environment for the people using right space.</p>
                        <div className="pWithImg">
                            <div className="centerAbout">
                                <a href="/about">View More</a>
                                <img src={Arr} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="interior">
                    <div className="toCenter">
                        <h3>Furniture</h3>
                        <p>Movable articles that are used to make a room or building suitable for living or working.</p>
                        <div className="pWithImg">
                            <div className="centerAbout">
                                <a href="/about">View More</a>
                                <img src={Arr} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="interior">
                    <div className="toCenter">
                        <h3>Flooring</h3>
                        <p>Thin object any finished material applied over a floor structure to provide a walking surface.</p>
                        <div className="pWithImg">
                            <div className="centerAbout">
                                <a href="/about">View More</a>
                                <img src={Arr} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
