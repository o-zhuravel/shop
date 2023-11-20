import './Product.css';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import Loader from "../Loader/Loader";
import data from '../../data/data';
import ReviewList from "../ReviewList/ReviewList";
import ProductsList from "../ProductsList/ProductsList";

const Product = () => {
    let [product, setProduct] = useState({});
    let {productId} = useParams();
    const navigation = useNavigate();

    useEffect(() => {
            setProduct(data.prod[productId-1]);
        }, []);

    function comeBack () {
        navigation('/products-list');
    }

    return (
        <div className='Product'>
            {
                'id' in product ?
                    <div className='Product'>
                    <div className='back-button' onClick={comeBack}>Back to all products</div>
                        <div className='prod-container'>
                            <img src={product.image} alt={product.title}/>
                            <div className='info'>
                                <h2>{product.title}</h2>
                                <h3>category: {product.category}</h3>
                                <h4>rating: {product.rating.rate}</h4>
                                <p className='description'>{product.description}</p>
                                <h3>price: {product.price}<span>$</span></h3>
                            </div>
                        </div>
                        <ReviewList productId={productId} key={productId}/>
                </div>
                    : <Loader/>
            }

        </div>
    )
}

export default Product;