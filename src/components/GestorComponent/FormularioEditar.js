import React, { useState, useEffect } from 'react';
import ModalFooter from '../ModalFooter';

const initialForm = {
    nombre: "",
    plantillaWord: "",
}
const CrudForm = ({ item, setDataToEdit, updateData, dataToEdit, closeModalEditar, isEdit }) => {
    const [form, setForm] = useState({ initialForm });

    useEffect(() => {
        // console.log('useefect')
        // console.log(item)
        // console.log('useefect')
        if (isEdit)
            setForm(item)
    }, [item])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    console.log(form)

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombre || !form.plantillaWord) {
            alert("Datos incompletos");
            return;
        } else {
            updateData(form);
            alert('Datos actualizados')
            closeModalEditar();
        }

        handleReset();
    };
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Nombre*</label>
                        <div className='col-sm-9'>
                            <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={handleChange} value={isEdit ? item.nombre : form.nombre} />
                        </div>
                    </div>
                    {/*<div className="col-sm-6">
                    <input type='text' name='creacion' className='form-control' placeholder='Name'  onChange={handleChange} value={form.creacion || ""} />
                    </div> */}
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Demo*</label>
                        <div className='col-sm-9'>
                            <input type='text' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleChange} value={isEdit ? item.plantillaWord : form.plantillaWord} />
                        </div>
                    </div>
                    <ModalFooter>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                {/* <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset} />*/}
                        <input type='submit' className='btn btn-success' value='Enviar' />
                    </ModalFooter>

                </form>
            </div>


        </>

    );
}

export default CrudForm;
