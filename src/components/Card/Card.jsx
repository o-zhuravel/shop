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
            <h2>title {product.product.title}</h2>
            <h3>price: {} <span>$</span></h3>
            <p className='category'>category {}</p>
            <p className='description'>description {product.product.description}</p>
            <button onClick={() => showMoreHandler()}>show more</button>
        </div>
    )
}

export default Card;