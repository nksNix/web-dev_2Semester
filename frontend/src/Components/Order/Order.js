import { useEffect, useState } from 'react';
import './Order.css'

function Order(props){
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('http://127.0.0.1:3050/product/' + props.props.productId, {method: "GET"})
            .then(x => x.json())
            .then(x => setProduct(x));
    }, [])

    function DeleteRequest(){
        fetch(`http://127.0.0.1:3050/order/${product.Id}`, {method: "DELETE"});
        product = [];
    }

    return (
        <div class="product_order">
        <div class="product_img">
            <img src={product.ProductPhoto}></img>
        </div>
        <div class="info">
            <span>{product.Name}</span>
            <span>{product.Price} x {props.props.counts}</span>
            <span>До сплати: {product.Price * props.props.counts} грн</span>
        </div>
        <div class="buttons">
            <button class="buatiful_button red" onClick={DeleteRequest}>Видалити</button>
            <button class="buatiful_button green">Редагувати</button>
        </div>
        </div>
    );
}

export default Order;