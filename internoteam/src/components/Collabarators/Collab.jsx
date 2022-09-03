import React from 'react'

import "./Collab.css"

import first from "./images/first.svg"

import collab2 from "./images/collab2.svg"

import collab3 from "./images/collab3.svg"

import collab4 from "./images/collab4.svg"

import last from "./images/last.svg"


export const Collab = () => {
    return (
        <div className="collabarators">
            <div className="cont3">
                <a href="https://www.modernhome.md/">
                    <img src={first} alt="first" />
                </a>
                <a href="https://www.decorilla.com/online-decorating/interior-design-styles-101/">
                    <img src={collab2} alt="collab2" />
                </a>
                <a href="https://brand.uz/">
                    <img src={collab3} alt="collab3" />
                </a>
                <a href="https://www.naturehome.com/">
                    <img src={collab4} alt="collab4" />
                </a>
                <a href="https://www.classdesignstudio.com/">
                    <img src={last} alt="last" />
                </a>
            </div>
        </div>
    )
}
