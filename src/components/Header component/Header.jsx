import React from 'react'
import Navigation from '../Nav component/Navigation'
import './header.css'
import hero from '../../assets/images/image-hero-desktop.jpg'

const Header = () => {
  return (
    <section className='header' style={{backgroundImage:`url(${hero})`}}>
      <Navigation />
    </section>
  )
}

export default Header