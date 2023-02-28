import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttps';



const Pruebas = (dB, setDb, setError) => {
    // console.log(item)
    const [nombre, setNombre] = useState('')
    const [file, setFile] = useState(null)

    // console.log(form)
    const api = helpHttp ();
    const url ='https://nh-generador-certificados-api.azurewebsites.net/api/Plantilla/registrar';
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
      
      const handleInputChange = (event) => {
        setNombre(event.target.value);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('nombre', nombre);
        let options = {
            body: formData,
            headers: { "content-type": "multipart/form-data, multipart/form-dat"}
        };
        api.post(url, options)
        .then((response) =>{
            if (!response.err) {
                setDb([...dB, response.value])
                alert('se creo correctamente')
            } else {
                setError(response)
            }
        })
        .catch((error) =>{
            console.log('firstfirst')
            console.log(error)
            console.log('firstfirst')
            alert('error')
        })
        handleReset();
    };
    const handleReset = (e) => {
        // setDataToEdit(null);
    }
    return (
        <div className='mb-3 row'>
            <form onSubmit={handleSubmit} className="row d-flex justify-content-around">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">'Agregar'</label>
                <div className="col-sm-6">
                    <input type='text' name='nombre' className='form-control' placeholder='Nombre' onChange={handleInputChange} value={nombre} />

                </div>
                <div className="col-sm-6">
                    <input type='file' name='plantillaWord' className='form-control' onChange={handleFileChange} />

                    {/*<input type='file' name='plantillaWord' className='form-control' placeholder='Demo de la plantilla' onChange={handleIncrease} value={form.plantillaWord == null ? '' :  form.plantillaWord} />*/}

                </div>
                <input type='submit' value='Guardar' className='btn btn-primary' />
                <input type='reset' className='btn btn-danger' value='Limpiar' onClick={handleReset} />
            </form>
        </div>
    );
}

export default Pruebas;
