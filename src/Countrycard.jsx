import React from 'react'
import './Countrycard.css'

function Countrycard({image,name}) {
  return (
    <div className="countryCard">
        <img className="image" src={image} alt={`${name} flag`} />
        <h2>{name}</h2>
    </div>
  )
}

export default Countrycard