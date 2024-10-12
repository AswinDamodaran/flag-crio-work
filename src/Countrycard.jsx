import React from 'react'
import './Countrycard.css'

function Countrycard({image,name}) {
  return (
    <div className="countryCard">
        <img className="image" src={image} alt={name} />
        <h4>{name}</h4>
    </div>
  )
}

export default Countrycard