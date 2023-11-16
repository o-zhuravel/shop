import './Product.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router";

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
                    <div className='Back' onClick={comeBack}>Back to all products</div>
                    PRODUCT
                    <img src={product.image} alt={product.title}/>
                    <h2>{product.title}</h2>
                    <h3>{}</h3>
                    <p className='description'>{product.description}</p>
                </div>
                    : <h1>Loading...</h1>
            }

        </div>
    )
}

export default Product;