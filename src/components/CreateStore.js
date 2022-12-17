import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const CreateStore = () => {
    const [name, setName] = useState('')
    const [openingDate, setopeningDate] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint + '/saveStore', {name:name,openingDate:openingDate})
        navigate('/getStores')
    }
  return (
    <div>
        <h3>Agregar Producto</h3>
        <form onSubmit={store}>
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
                <label className='form-label'>fecha de apertura:</label>
                <input
                    value = {openingDate} 
                    onChange = {(e) => setopeningDate(e.target.value)}
                    type="date"
                    className='form-control' 
                    timezone="en-US"
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateStore