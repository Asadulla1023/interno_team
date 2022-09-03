import React from 'react'

import "./ThinkAbout.css"

import { useState } from 'react'

import Avatar from "./images/avatarForUser.png"

import { Form } from './form'

import { Card } from './card'

export const ThinkAbout = () => {
  const [forms, setForms] = useState([]);
  // const deleteTodoHandler = (id) => {
  //   setForms(forms.filter((todo) => todo.id !== id));
  // };
  return (
    <>
      <div className="thinkAbout">
        <div className="cont">
          <div className="background">
            <div className="main">
              <div className="mainTitle">
                <h2>What the People Thinks About Interno</h2>
              </div>
              <section>
                <div className="aboutCard">
                  <div className="cards">
                    <div className="centerthink">
                      <div className="imgWithName">
                        <img src={Avatar} alt="userAvatar" />
                        <div className="names">
                          <h3>Lisa Clairton</h3>
                          <p>New York, USA</p>
                        </div>
                      </div>
                      <p className='about'>We selected Interno interior because of rigorous design background & education.</p>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="centerthink">
                      <div className="imgWithName">
                        <img src={Avatar} alt="userAvatar" />
                        <div className="names">
                          <h3>David Knight</h3>
                          <p>Sydney, Australia</p>
                        </div>
                      </div>
                      <p className="about">The team exceeded our expectations and emerged as leaders of our project’s.</p>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="centerthink">
                      <div className="imgWithName">
                        <img src={Avatar} alt="userAvatar" />
                        <div className="names">
                          <h3>Lisa Clairton</h3>
                          <p>Paris, France</p>
                        </div>
                      </div>
                      <p className="about">They balanced the architectural vision and the project realities beautifully.</p>
                    </div>
                  </div>
                  {forms.map(({ name, desc, loc, id }) => (
                    <Card
                      name={name}
                      desc={desc}
                      loc={loc}
                      id={id}
                      key={id}
                      />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Form forms={forms} setForms={setForms}/>
    </>
  )
}
