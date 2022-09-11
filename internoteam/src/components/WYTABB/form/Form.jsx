import React from 'react'

import "./Form.css"

import { useRef, useState } from 'react'

export const Form = ({ forms, setForms }) => {
  const nameRef = useRef(null)
  const locRef = useRef(null)
  const descRef = useRef(null)

  const [btnvalue, setBtnValue] = useState("Submit");


  const clearInputs = () => {
    nameRef.current.value = null;
    locRef.current.value = null;
    descRef.current.value = null
  }

  const addFormHandler = () => {
    if (!nameRef.current.value || !descRef.current.value || !locRef.current.value) {
      return;
    }

    if (!nameRef.current.value || !descRef.current.value || !locRef.current.value) {
      alert("Please fill the blanks")
    }


    const form = {
      name: nameRef.current.value,
      desc: descRef.current.value,
      loc: locRef.current.value,
      id: Math.floor(Math.random() * 1000),
    };

    setTimeout(() => {
      setBtnValue("Submitted")
      clearInputs()
      setForms([form, ...forms]);
      setTimeout(() => {
        setBtnValue("Submit")
      }, 1000)
    }, 1000);


    console.log(form);
  };


  return (
    <>
      <div className="centering">
        <div className="cont2">
          <h2>Add your opinion</h2>
          <form className='form' action="#">
            <div className="loc">
              <input type="text" ref={nameRef} placeholder='Enter your name' />
              <input type="text" ref={locRef} placeholder='Where are you from' />
              <button type='button' className={!btnvalue ? "hidden" : "ww"} onClick={addFormHandler}>{btnvalue}</button>
            </div>
            <textarea ref={descRef} cols="30" rows="10" placeholder='They balanced the architectural vision and the project realities beautifully.' />
          </form>
        </div>
      </div>
    </>
  )
}
