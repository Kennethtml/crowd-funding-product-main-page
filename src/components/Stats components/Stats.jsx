import React from 'react'
import Stat from '../Stat/Stat';
import './stats.css'

const Stats = () => {
const data = [
  { value: "$89,914", total: "0f $100,000 backed" },
  { value: "5,007", total: "total backers" },
  { value: "56", total: "days left" }
]

  return (
    <section className='stats'>
    <div className="data">
        {data.map(datum=>{
            
            return(<Stat key={datum.value} datum={datum}/>)
        })}

    </div>

    <div className="progress-bar"></div>
        
    </section>
  )
}

export default Stats