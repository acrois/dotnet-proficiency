import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const { products, loading } = useContext(ProductContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <Link to={`/edit/${product.id}`} className="edit-link">Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
