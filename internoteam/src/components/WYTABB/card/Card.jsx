import React from 'react'

import Avatar from "../images/avatarForUser.png"

export const Card = ({
  name, desc, loc
}) => {

  
  return (
    <div className={"cards"}>
      <div className="centerthink">
        <div className="imgWithName">
          <img src={Avatar} alt="userAvatar" />
          <div className="names">
            <h3>{name}</h3>
            <p>{loc}</p>
          </div>
        </div>
        <p className='about'>{desc}</p>
      </div>
    </div>
  )
}