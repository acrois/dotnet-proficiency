import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProducts();
            setProducts(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
