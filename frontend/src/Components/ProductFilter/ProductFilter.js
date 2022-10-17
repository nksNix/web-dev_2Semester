import './ProductFilter.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';

function ProductFilter() {

    function onMinChange(e){
        setValues({...values, min: e.target.value})
    }
    
    function onMaxChange(e){
        setValues({...values, max: e.target.value})
    }

    const [values, setValues] = useState({min: 0, max: 10000})
    return (
    <div id="filters">
        <div class="price filter">
            <span>Ціна </span>
            <input type="text" class="inputtext" onChange={onMinChange} id="price_min"></input>
            <span>-</span>
            <input type="text" class="inputtext" onChange={onMaxChange} id="price_max"></input>
        </div>
    </div>
    );
}

export default ProductFilter;