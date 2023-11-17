import './Card.css';
import {useNavigate} from "react-router";


const Card = (product) => {

    const navigate = useNavigate();

    function showMoreHandler () {
        navigate(`/product/${product.product.id}`);
    }

    return (
        <div className='Card'>
            <img src={product.product.image} alt={product.product.title}/>
            <div className='title'>{product.product.title}</div>
            <h3>price: {product.product.price} <span>$</span></h3>
            <p className='category'>category: {product.product.category}</p>
            <p className='rating'>rating: {product.product.rating.rate}</p>
            <div className='description'>{product.product.description}</div>
            <div className='button' onClick={() => showMoreHandler()}>show more</div>
        </div>
    )
}

export default Card;