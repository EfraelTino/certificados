import React, { useState, useEffect } from 'react';

const initialForm = {
    nombre: "",
    plantillaWord:"",
}
const CrudForm = ({ item, setDataToEdit, updateData, dataToEdit, createData }) => {
    const [form, setForm] = useState({ initialForm });

    // debemos espcificar la estrucutra ya que si no lo ponemos nos puede generar errores

    const handleChange = (e) => {
        setForm({
            // EL spreadOperator nos dice que traigamos el estado actual del form
            ...form,
            // mas e.target el elemento que inicio el evento y desestructuranmos
            [e.target.name]: e.target.value,
        });
        // console.log(e.target.value)
    }

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit]);
    const handleSubmit = (e) => {
        //no te olvides poner en todos tus formularios
        e.preventDefault();

        //validaciones  de si nuestros inputs estan vacios
        if (!form.nombre || !form.plantillaWord) {
            alert('Datos incompletos');
            return;
        }

        //validacion de create data -> cuando no tiene ningun id se tiene  que crear con lo que tendrá nuestro variable de estado del formulario
        if (form.id === null) {
            createData(form);
            alert("Se a creado un nuevo usuario")
        } else {
            updateData(form)
            alert("Se han actualizado los datos")
        }
        // una vez terminado todo esto tendremos que limpiar nuestro formulario
        handleReset();

    }
    const handleReset = (e) => {
        // limipamos con el estado
        setForm(initialForm);
        //
        setDataToEdit(null);
    }
    return (
        <div className='mb-3 row'>
            <form onSubmit={handleSubmit} className="row d-flex justify-content-around">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Guardar</label>
                    <div className="col-sm-6">
                        <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={handleChange} value={form.nombre || item.nombre} />

                    </div>
                {/*<div className="col-sm-6">
                    <input type='text' name='creacion' className='form-control' placeholder='Name'  onChange={handleChange} value={form.creacion || ""} />
    </div> */}
                {
                    //El value de nuestro input sera: la propiedad de nuestro value

                }
                {
                    (<input type='submit' className='btn btn-success' value='Enviar' />)
                }
                <div className="col-sm-6">
                <input type='text' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleChange} value={form.plantillaWord || item.plantillaWord} />

            </div>
                <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudForm;
