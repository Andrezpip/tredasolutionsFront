import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const Showproducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/getProductsWithStores`)
        setProducts(response.data)
    }

    const deleteproduct = async (id) => {
        const response = await axios.delete(`${endpoint}/deleteProduct/${id}`)
        getAllProducts()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <div>
                    <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Agregar Producto</Link>
                </div>
            </div>
            <table className='table table-dark table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>SKU</th>
                        <th>DESCRIPCIÓN</th>
                        <th>VALOR</th>
                        <th>TIENDA</th>
                        <th>IMAGEN</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.description}</td>
                            <td>{product.valor}</td>
                            <td>{product.tienda}</td>
                            <td>{product.imagen}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteproduct(product.id)} className='btn btn-danger'>Eliminar</button>                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='d-grid gap-2'>
                <div>
                    <Link to="/getStores" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Tiendas</Link>
                </div>
            </div>
        </div>
    )
}

export default Showproducts