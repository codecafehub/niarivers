// resources/js/Context/ModalContext.jsx
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    // State to track which modal is open: null, 'login', or 'register'
    const [modalState, setModalState] = useState(null);
    // NEW state to hold data passed to the modal
    const [modalData, setModalData] = useState({});

    // The openModal function now accepts an optional payload of data
    const openModal = (type, data = {}) => {
        setModalData(data);
        setModalState(type);
    };

    const closeModal = () => {
        setModalState(null);
        setModalData({}); // Clear data when closing
    };

    // We now provide modalData in the context
    return (
        <ModalContext.Provider value={{ modalState, modalData, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Custom hook remains the same
export const useModal = () => useContext(ModalContext);