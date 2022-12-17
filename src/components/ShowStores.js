import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const Showstores = () => {

    const [stores, setStores] = useState([])

    useEffect(() => {
        getAllStores()
    }, [])

    const getAllStores = async () => {
        const response = await axios.get(`${endpoint}/getStores`)
        setStores(response.data)
    }

    const deleteStore = async (id) => {
        const response = await axios.delete(`${endpoint}/deleteStore/${id}`)
        getAllStores()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <div>
                    <Link to="/createStore" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Agregar Tienda</Link>
                </div>
            </div>
            <table className='table table-dark table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>NOMBRE</th>
                        <th>FECHA DE APERTURA</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store) => (
                        <tr key={store.id}>
                            <td>{store.name}</td>
                            <td>{store.openingDate}</td>
                            <td>
                                <Link to={`/editStore/${store.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteStore(store.id)} className='btn btn-danger'>Eliminar</button>                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='d-grid gap-2'>
                <div>
                    <Link to="/" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default Showstores