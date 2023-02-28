import React, { useState, useEffect } from 'react';
import ModalFooter from '../ModalFooter';


const initialForm = {
    nombre: "",
    plantillaWord: "",
}
const FormularioNuevo = ({ createData,closeModalNuevo, isCreate }) => {
    const [form, setForm] = useState({ initialForm });
    useEffect(() => {
        if(isCreate){}
        setForm(form)
    }, [form]);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombre || !form.plantillaWord) {
            alert("Datos incompletos");
            return;
        }
        else if (form.nombre !== '' && form.plantillaWord !== '') {
            createData(form);
            alert('Datos creados');
          } 

        handleReset();
    };
    const handleReset = (e) => {
        setForm(initialForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Nombre*</label>
                    <div className='col-sm-9'>
                        <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={handleChange} value={form.nombre || ''} />
                    </div>
                </div>
                {/*<div className="col-sm-6">
            <input type='text' name='creacion' className='form-control' placeholder='Name'  onChange={handleChange} value={form.creacion || ""} />
            </div> */}
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Demo*</label>
                    <div className='col-sm-9'>
                        <input type='text' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleChange} value={form.plantillaWord || ''} />
                    </div>
                </div>
                <ModalFooter>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModalNuevo}>Cancelar</button>
                    {/* <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset} />*/}
                    <input type='submit' className='btn btn-success' value='Enviar' />
                </ModalFooter>

            </form>
        </div>
    );
}

export default FormularioNuevo;
