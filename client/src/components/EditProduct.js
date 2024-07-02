import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { products, updateExistingProduct } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const pId = parseInt(id);
    const product = products.find(p => p.id === pId);

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateExistingProduct(pId, { id: pId, name, price: parseFloat(price) });
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProduct;
