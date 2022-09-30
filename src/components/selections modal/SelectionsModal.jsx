import React from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '../Modal component/Modal'
import Selection from '../Selection/Selection'
import { useContext } from 'react'
import './selections.css'
const SelectionModal = () => {
  const{setIsModalOpen}=useContext(ModalContext)
  const selections=[
    {
      heading:'Pledge with no reward',
      amount:'',
      details:' Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      accordion:false,
      donation:'$25'
    }
    ,
     {
      heading:'Bamboo Stand',
      pledge:' Pledge $25 or more',
      amount: 101,
      details:"  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      accordion:true,
      donation:'$25'
      
    },
      {
      heading:' Black Edition Stand',
      pledge:' Pledge $75 or more',
      amount: 64,
      details:"   You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      accordion:true,
      donation:'$75'
      
    },
      {
      heading:'Mahogany Special Edition',
      pledge:' Pledge $200 or more',
      amount: 0,
      details:"  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      accordion:true,
      donation:'$200'
      
    }

  ]



  return (
    <Modal>
      <div className="selections-container">
        <div className="selections-container-heading">
          <h3> Back this project</h3>
          <div className="close-button" onClick={()=>setIsModalOpen(false)}></div>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="selections">
          {selections.map((selection) => {
            return <Selection key={selection.heading} selection={selection} />;
          })}
        </div>
      </div>
    </Modal>
  );
}

export default SelectionModal