import React, {createContext, useContext, useReducer, useState} from "react";
import { Modal } from 'antd';


const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null); // {title, content}

    const open = (title, content) => {
        setModalData({
            title: title,
            content: content
        })
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
        setModalData(null)
    }


    return <ModalContext.Provider value={{
        open: (title, content) => open(title, content),
        close: () => close()
    }}>
        <Modal title={modalData?.title} open={isOpen} onCancel={close}>
            {modalData?.content}
        </Modal>
        {children}
    </ModalContext.Provider>
}

export const useModal = () => {
    return useContext(ModalContext)
}

export default ModalProvider;