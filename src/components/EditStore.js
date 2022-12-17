import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api'
const endpointEdit = 'http://localhost:8000/api/showStore/'

const EditStore = () => {
    const [name, setName] = useState('')
    const [openingDate, setopeningDate] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint+'/updateStore/'}${id}`,{
            name:name,
            openingDate:openingDate
        })
        navigate('/getStores')
    }

    useEffect( () => {
        const getStoreById = async () => {
            const response = await axios.get(`${endpointEdit}${id}`)
            setName(response.data.name)
            setopeningDate(response.data.openingDate)
        }
        getStoreById()
    }, [])

    return (
        <div>
        <h3>Editar Tienda</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Fecha de apertura:</label>
                <input
                    value = {openingDate}
                    onChange = {(e) => setopeningDate(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )
}

export default EditStore