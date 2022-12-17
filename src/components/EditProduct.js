import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/updateProduct/'
const endpointEdit = 'http://localhost:8000/api/showProduct/'

const EditUser = () => {
    const [sku, setSku] = useState('')
    const [description, setDescription] = useState('')
    const [valor, setValor] = useState('')
    const [tienda, setTienda] = useState('')
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            sku:sku,
            description:description,
            valor:valor,
            tienda:tienda,
            imagen:imagen
        })
        navigate('/')
    }

    useEffect( () => {
        const getProductrById = async () => {
            const response = await axios.get(`${endpointEdit}${id}`)
            setSku(response.data.sku)
            setDescription(response.data.description)
            setValor(response.data.valor)
            setTienda(response.data.tienda)
            setImagen(response.data.imagen)
        }
        getProductrById()
    }, [])

    return (
        <div>
        <h3>Editar Producto</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Sku:</label>
                <input
                    value = {sku}
                    onChange = {(e) => setSku(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripcion:</label>
                <input
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Valor:</label>
                <input
                    value = {valor}
                    onChange = {(e) => setValor(e.target.value)}
                    type="number"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Tienda:</label>
                <input
                    value = {tienda}
                    onChange = {(e) => setTienda(e.target.value)}
                    type="number"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Imagen:</label>
                <input
                    value = {imagen}
                    onChange = {(e) => setImagen(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )
}

export default EditUser