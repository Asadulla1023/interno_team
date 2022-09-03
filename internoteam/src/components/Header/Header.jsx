import "./Header.css"

import { About } from "./about"

import { Tackling } from "./tackling"

import RightArrow from "./images/arrowRight.svg"

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="cont">
          <div className="headerTitle">
            <div className="headerleft">
              <h1 className="title">Let's Create Your Dream Interior</h1>
              <p>The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>
              <button>Get started
                <img src={RightArrow} alt="arrow" />
              </button>
            </div>
          </div>

        </div>
      </div>
      <About />
      <Tackling/>
      </>
  )

}
