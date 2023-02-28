import React from 'react';

const Modal = ({ children, isOpen, closeModalEditar,title }) => {
  // console.log(isOpen)
  // evitamos el cierre dentro del modal
  const handleModalClick = (e) => { e.stopPropagation() }

  return (
    <>
      <div className={`fixed-top  min-vh-100 d-none justify-content-center align-items-center ${isOpen && 'd-flex'}`} style={{ "zIndex": "900", "backgroundColor": "rgba(0,0,0,0.75)" }} onClick={closeModalEditar}>
        <div className={`bg-light position-relative w-100 modal-dialog modal-dialog-centered`} onClick={handleModalClick}>
          <div className='modal-content'>
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
              <button onClick={closeModalEditar} className='close' data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>


        </div>
      </div>


    </>
  );
}

export default Modal;
