import React from 'react';


const CrudTableRow = ({ item,  deleteData, openModalEditar,obtenerDatos, setIsEdit }) => {
    let { idPlantilla, plantillaWord, nombre, } = item;
    return (
        <>
            <tr key={idPlantilla}>
            <td className='text-center'>{idPlantilla}</td>
            <td>{nombre}</td>
            
            <td className='text-center'> <a href="download/acme-doc-2.0.1.txt" download={plantillaWord}>Descargar</a>
            </td>
                <td className='text-center '>
                    // {/*<button className='btn btn-success mx-1' onClick={() => setDataToEdit(item)}>editar</button>*/}
                    <button className='btn btn-success ' onClick={() =>{obtenerDatos(item); openModalEditar();setIsEdit(true)}}>Editar</button>
                    <button className='btn btn-danger mx-2' onClick={() => deleteData(idPlantilla)}>Eliminar</button>

                </td>
            </tr>

        </>

    );
}

export default CrudTableRow;
