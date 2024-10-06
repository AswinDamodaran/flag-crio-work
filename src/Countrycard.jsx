import React from 'react'
import styles from "./Countrycard.module.css"

function Countrycard({image,name}) {
  return (
    <div className={styles.main}>
        <img className={styles.image} src={image} alt={name} />
        <h4>{name}</h4>
    </div>
  )
}

export default Countrycard