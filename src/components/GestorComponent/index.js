import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttps';
import CrudTable from './GestorTable';
import Loader from '../Loader';
import Message from '../Message';
import { useModal } from '../hooks/useModal';
import Modal from '../Modal';
import FormularioNuevo from './FormularioNuevo';
import CrudForm from '../CrudForm';
import Pruebas from '../Pruebas';

const Index = () => {
    const [dB, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isOpenModalNuevo, openModalNuevo, closeModalNuevo, isCreate, setIsCreate] = useModal(false);


    let api = helpHttp();
    let url = 'https://nh-generador-certificados-api.azurewebsites.net/api/Plantilla/consultar';

    // CONSUMIR API
    useEffect(() => {
        setLoading(true);
        helpHttp()
            .get(url)
            .then((res) => {
                if (!res.err) {
                    setDb(res.value)
                    setError(null);
                } else {
                    setDb(null)
                    setError(res)
                }
                setLoading(false);
            }
            )
    }, [url]);
    // CREAR DATOS
    const createData = (data) => {
        data.idPlantilla = Date.now();
        console.log("firstfirst")
        console.log(data)
        console.log("firstfirst")
        let options = {
            body: data,
            headers: { "content-type": "multipart/form-data" },
        };
        // aremos  un post a la pi
        api.post('https://nh-generador-certificados-api.azurewebsites.net/api/Plantilla/registrar', 
        options).then(res => {
            if (!res.err) {
                setDb([...dB, res.value])
                console.log(setDb([...dB, res.value]))
            } else {
                setError(res);
            }
        });
    }
    // ACTUALIZAR DATOS
    const updateData = (data) => {
        // console.log(endpoint);
        let endpoint = `${url}/${data.idPlantilla}`;
        // console.log(endpoint)

        // actualizamos con put
        let options = {
            body: data,
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Methods": 'patch'
            },
        };
        api.put(endpoint, options).then(res => {
            // console.log(res);
            if (!res.err) {
                let newData = dB.map(el => el.idPlantilla === data.idPlantilla ? data : el);
                setDb(newData);
            } else {
                setError(res)
            }
        });
    }
    // ELIMINAR DATOS
    const deleteData = (idPlantilla) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro el id '${idPlantilla}'`)
        let endpoint = `${url}/${idPlantilla}`;
        // no olvidar fijarse si el endpoint del backend necesita este header


        if (isDelete) {
            let options = {
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Methods": 'patch',
                },
            };
            // nuestro helper nos permite hacer el delete
            api.del(endpoint, options).then(res => {
                if (!res.err) {
                    let newData = dB.filter((el) => el.idPlantilla !== idPlantilla);
                    setDb(newData);
                } else {
                    setError(res)
                }
            })
        };
    }

    return (
        <>
            <div className="content-wrapper">
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Gestión de plantillas</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-end '>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="mb-3 row">
                                                    <CrudForm
                                                        createData={createData}
                                                        updateData={updateData}
                                                        dataToEdit={dataToEdit}
                                                        setDataToEdit={setDataToEdit} />
                                                </div>
                                                <Pruebas dB={dB} setDb= {setDb} setError={setError} />
                                            </div>

                                            <div className="d-flex">
                                                <div className="">
                                                    <button className="btn btn-warning" tabIndex="0" aria-controls="example1" type="button" onClick={()=>{openModalNuevo(); setIsCreate(true)}}><span>Nuevo</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/*MODAL NUEVO*/}
                                            <Modal
                                                isOpen={isOpenModalNuevo}
                                                closeModalEditar={closeModalNuevo}
                                                createData={createData}
                                                title='Agregar nueva plantilla'>
                                                <FormularioNuevo closeModalNuevo={closeModalNuevo} />
                                            </Modal>
                                        </div>

                                        {
                                            loading && <Loader />
                                        }
                                        {
                                            error && <Message message={`Error ${error.status} : ${error.statusText}`} cStyles='bg-danger' />
                                        }
                                        {
                                            dB &&
                                            <CrudTable
                                                data={dB}
                                                updateData={updateData}
                                                dataToEdit={dataToEdit}
                                                setDataToEdit={setDataToEdit}
                                                deleteData={deleteData} />
                                        }
                                        <Message />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Index;
