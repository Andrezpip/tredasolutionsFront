import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/saveProduct'

const CreateProduct = () => {
    const [sku, setSku] = useState('')
    const [description, setDescription] = useState('')
    const [valor, setValor] = useState('')
    const [tienda, setTienda] = useState('')
    const [imagen, setImagen] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {sku:sku,description:description,valor:valor,tienda:tienda,imagen:imagen})
        navigate('/')
    }
  return (
    <div>
        <h3>Agregar Producto</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>SKU:</label>
                <input
                    value = {sku}
                    onChange = {(e) => setSku(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>description:</label>
                <input
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>valor:</label>
                <input
                    value = {valor}
                    onChange = {(e) => setValor(e.target.value)}
                    type="number"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>tienda:</label>
                <input
                    value = {tienda}
                    onChange = {(e) => setTienda(e.target.value)}
                    type="number"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>imagen:</label>
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

export default CreateProduct