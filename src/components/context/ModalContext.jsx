import React, { useState } from 'react'
import { createContext } from 'react'

export const ModalContext= createContext({})
export const ModalProvider=({children})=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const value = {
      isModalOpen,
      setIsModalOpen,
      successModalOpen,
      setSuccessModalOpen,
    };
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}
