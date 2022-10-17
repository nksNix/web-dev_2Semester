import './ProductCard.css'
import {Link} from "react-router-dom"

function ProductCard(props) {
    const product = props.product;
    return (
        <div class="product">
            <div class="product_photo">
                <img src={product.ProductPhoto}></img>
            </div>
            <div class="product_name_buy">
                <span class="product_name">{product.Name}</span>
                <Link to={"product/" + product.Id}>
                <button class="buatiful_button">Купити</button>
                </Link>
            </div>
            <span class="product_price">{product.Price} грн.</span>
        </div>
    );
}

export default ProductCard;