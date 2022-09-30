import './success-modal.css'
import React from 'react'
import Modal from '../Modal component/Modal'
import Button from '../Button component/Button'
import IconCheck from '../../assets/images/icon-check.svg'
import { ModalContext } from '../context/ModalContext'
import { useContext } from 'react'

const SuccessModal = () => {
    const { setSuccessModalOpen } = useContext(ModalContext);
  return (
    <Modal>
      <div className="success-modal">
        <img src={IconCheck} alt="" />
        <h2>Thanks for your support</h2>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <div className="btn" onClick={() => setSuccessModalOpen(false)}>
          <Button text="Got it !" type={true} />
        </div>
      </div>
    </Modal>
  );
}

export default SuccessModal