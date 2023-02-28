import React, { useState, useEffect } from 'react';

const initialForm = {
    idPlantilla:"",
    nombre: "",
    plantillaWord: "",
}
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    // console.log(item)
    const [form, setForm] = useState({ initialForm })
    const handleIncrease =(e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.files,
        })
    }
    // console.log(form)

    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
      }, [dataToEdit]);
      
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
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
        // else {
        //   updateData(form);
        //   alert('Datos actualizados')
        // }
    
        handleReset();
      };
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }
    return (
        <div className='mb-3 row'>
            <form onSubmit={handleSubmit} className="row d-flex justify-content-around">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">{dataToEdit ? 'Editar' : 'Agregar'}</label>
                <div className="col-sm-6">
                    <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={handleChange} value={form.nombre ||''} />

                </div>

                {
                    dataToEdit ? (<input type='submit' className='btn btn-success' value='Enviar' />) : (<input type='submit' value='Guardar' className='btn btn-primary' />)
                }
                <div className="col-sm-6">
                    <input type='text' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleChange} value={form.plantillaWord ||''} />
                    
                    {/*<input type='file' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleIncrease} value={form.plantillaWord == null ? '' :  form.plantillaWord} />*/}

                </div>
                <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudForm;
