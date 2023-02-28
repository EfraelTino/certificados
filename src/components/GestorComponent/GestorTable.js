import React, { useState } from 'react';
import CrudTableRow from './GestorFilaTabla';
import Modal from '../Modal';
import { useModal } from '../hooks/useModal';
import CrudForm from './FormularioEditar';


const CrudTable = ({data, setDataToEdit,deleteData, createData, updateData, dataToEdit}) => {
    const [isOpenModalEditar, openModalEditar, closeModalEditar, isEdit, setIsEdit] = useModal(false);


    const [datos, setDatos] = useState('');
    const obtenerDatos = (datosObtenidos) =>{
        setDatos(datosObtenidos)
    }


    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                    <th className='text-center'>Código</th>
                        <th className='text-center'>Nombre</th>
                        <th className='text-center'>Demo de la plantilla</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.length > 0 ? (
                            data.map  ((item) =>(
                                <CrudTableRow 
                                    key={item.idPlantilla}
                                    item= {item}
                                    setDataToEdit={setDataToEdit}
                                    deleteData = {deleteData}
                                    openModalEditar = {openModalEditar}
                                    obtenerDatos={obtenerDatos}
                                    setIsEdit={setIsEdit}
                                />
                            ))
                        ) : (<td colSpan='3'>No se encontraro datos aún</td>)
                    }
                </tbody>
            </table>
            <Modal isOpen={isOpenModalEditar} closeModalEditar={closeModalEditar} >
                <CrudForm  item={datos} isEdit={isEdit} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} updateData={updateData} closeModalEditar={closeModalEditar}/>
            </Modal>
        </div>
    );
}

export default CrudTable;
