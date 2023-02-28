import Modal from './Modal';
import React from 'react';
import CrudForm from './CrudForm';

const Modals = () => {
    return (
        <div style={{"marginTop" :"2rem", "marginLeft": "25rem"}}>
            Modales
            <button>Modal 1  </button>
            <Modal>
            <CrudForm/>
            </Modal>
        </div>
    );
}

export default Modals;
