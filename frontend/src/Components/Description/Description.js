import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import './Description.css'



function Description(){
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://127.0.0.1:3050/product/${id}`, {method: "GET"})
            .then(x => x.json())
            .then(data => setProduct(data));
    }, []);

    function PostRequest(){
        fetch(`http://127.0.0.1:3050/order/${id}?count=${count}`, {method: "POST"})
                .then(x => x.json)
                .then(x => console.log(x));
    }

    function OnCountChange(e){
        var value = e.target.value;
        value != undefined || value != null ? setCount(value) : setCount(1);
    }
    return (
        <div id="content">
            <div className="item">
            <div class="product_image">
                <img src='/1.jpg'></img>
            </div>
            <div class="container_1">
            <div class="info">
                <span class="title">{product.Name}</span>
                <span class="description">{product.Description}</span>
            </div>    
            <div class="buy_section">
                <div class="container_1">
                <span>Кількість</span>
                <input class="inputtext" onChange={OnCountChange} type="text" value={1}></input>
                <span class="price">До сплати: {product.Price * count}</span>
                </div>
                <button class="buatiful_button green" onClick={PostRequest}>Buy</button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Description;