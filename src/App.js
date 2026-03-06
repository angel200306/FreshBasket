import React, { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Stats from "./components/Stats";
import ShareButton from "./components/ShareButton";
import "./App.css"

function App() {
    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = (name, quantity, price) => {
        setProducts([
            ...products,
            {
                id: Date.now(),
                name,
                quantity,
                price,
                completed: false,
            },
        ]);
    };

    const toggleProduct = (id) => {
        setProducts(
            products.map((p) =>
                p.id === id ? { ...p, completed: !p.completed } : p
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    return (
        <div className="app">
            <div className="particles">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="particle"></div>
                ))}
            </div>

            <h1>Shopping List</h1>

            <AddProduct addProduct={addProduct} />

            <ProductList
                products={products}
                toggleProduct={toggleProduct}
                deleteProduct={deleteProduct}
            />

            <Stats products={products} />

            <ShareButton products={products} />
        </div>
    );
}

export default App;