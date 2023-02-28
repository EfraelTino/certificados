import React, {useState, useEffect} from 'react';
const initialForm = {
    nombre: "",
    plantillaWord:"",
}
const Prueba = ({createData, updateData, dataToEdit, setDataToEdit,}) => {
    const [form, setForm] = useState({ initialForm });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
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
    const handleReset = () => {
        // limipamos con el estado
        setForm(initialForm);
        //
        setDataToEdit(null);
    }
    return (
        <div className='mb-3 row'>
        <form  className="row d-flex justify-content-around" onSubmit={handleSubmit}>
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Guardar</label>
                <div className="col-sm-6">
                    <input type='text' onChange={handleChange} name='nombre' className='form-control' placeholder='Nombre'  value={form.nombre || ''} />

                </div>
            {
                (<input type='submit' className='btn btn-success' value='Enviar' />)
            }
            <div className="col-sm-6">
            <input type='text' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla'  value={form.plantillaWord || ''} />

        </div>
            <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset}  />
        </form>
    </div>
    );
}

export default Prueba;
