import './Product.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router";
import Loader from "../Loader/Loader";

const Product = () => {
    let [product, setProduct] = useState({});
    let {productId} = useParams();
    const navigation = useNavigate();

    useEffect(() => {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
                .then(res=> {
                    console.log(res)
                    setProduct(res.data)
                });
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
                </div>
                    : <Loader/>
            }

        </div>
    )
}

export default Product;