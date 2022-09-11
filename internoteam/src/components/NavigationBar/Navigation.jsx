import "./Navigation.css"

import Logo from "./images/logo.svg"

import { useState } from "react"


export const Navigation = () => {
  const [value, setValue] = useState("☰")
  const handleOnClick = () => {
    setValue("╳")
  }
  return (
    <div className="navigationbar">
      <div className="cont">
        <div className="logo">
          <a className="logohref" href="/">
            <img src={Logo} alt="logo" />
            <h1>Interno</h1>
          </a>
        </div>
        <div className="navigate">
          <ul>
            <li className="navigators hidden"><button type="button" onClick={handleOnClick}>{value}</button></li>
            <li className="navigators"><a className="Home" href="/">Home</a></li>
            <li className="navigators"><a href="/about">About Us</a></li>
            <li className="navigators"><a href="/services">Services</a></li>
            <li className="navigators"><a href="/pages">Pages</a></li>
            <li className="navigators"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
