import React from 'react'
import { useContext } from 'react';
import Button from '../Button component/Button';
import './heading.css';
import Logo from '../../assets/images/logo-mastercraft.svg'
import bookmark from './../../assets/images/icon-bookmark.svg'
import { ModalContext } from '../context/ModalContext';

const Heading = () => {
  const{setIsModalOpen,isModalOpen}=useContext(ModalContext)
  return (
    <section className="about">
      <img src={Logo} alt="" className="logo" />
     
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>A beautiful & handcrafted stand to reduce neck and eye strain</p>
      <div className="buttons">
        <div className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
          <Button text={"Back this project"} type={true} />
        </div>

        <button className="bookmark">
          <img src={bookmark} alt="" />
          <span>Bookmarked</span>
        </button>
      </div>
    </section>
  );
}

export default Heading;