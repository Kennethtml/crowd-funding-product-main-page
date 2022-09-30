import React from 'react'
import { useState } from 'react'
import './button.css'

const Button = ({text,type}) => {
    const [color,setColor]=useState('--Moderate-cyan') 



  return (
    <button
      style={
        type === true
          ? { background: `var(${color})` }
          : { background: `var(--Dark-gray)` }
      }
      onClick={() => setColor("--Dark-cyan")}
    >
      {text}
    </button>
  );
}

export default Button

//  type === true
        //   ? { background: `var(${color})` }
        //   : { background: `var(--dark-grey)` }