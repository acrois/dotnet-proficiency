import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import NavBar from './components/NavBar';
import { ProductProvider } from './context/ProductContext';
import './App.css';

const App = () => {
    return (
        <ProductProvider>
            <Router>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/add" element={<AddProduct />} />
                        <Route path="/edit/:id" element={<EditProduct />} />
                    </Routes>
                </div>
            </Router>
        </ProductProvider>
    );
};

export default App;
