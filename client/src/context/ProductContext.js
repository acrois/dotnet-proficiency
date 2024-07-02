import React, { createContext, useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProducts();
            setProducts(result);
            setLoading(false);
        };

        fetchData();
    }, []);

    const addProduct = async (product) => {
        const newProduct = await createProduct(product);
        setProducts([...products, newProduct]);
    };

    const updateExistingProduct = async (id, product) => {
        await updateProduct(id, product);
        setProducts(products.map(p => (p.id === id ? product : p)));
    };

    const removeProduct = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, loading, addProduct, updateExistingProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
