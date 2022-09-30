import React from 'react'

const Stat = ({datum}) => {
    const{value, total}=datum
  return (
    <div className='stat'>
        <h1>{value}</h1>
        <p>{total}</p>
    </div>
  )
}

export default Stat