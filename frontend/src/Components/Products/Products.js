import "./Products.css"
import ProductCard from "../ProductCard/ProductCard"
import ProductFilter from "../ProductFilter/ProductFilter";
import React, { useEffect, useState } from 'react';

function Header(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:3050/products', {method: "GET"}).then(x => x.json()).then((x) => setProducts(x));
    }, [])
    return (
    <div id="content">
        <div id="items">
            {products.map(x => <ProductCard product={x} />)}
        </div>
    </div>
    );
}

export default Header;