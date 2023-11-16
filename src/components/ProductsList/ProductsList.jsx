import './ProductsList.css';
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductsList = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
                .then(res=> {
                    console.log(res.data)
                    setProducts(res.data)
                })
    }, []);

    return (
        <div className='Products-list'>
            {
                products.length > 0 ? products.map(product => <Card product={product} key={product.id}/>) : <h1>Loading...</h1>
            }
            <div>ddddd</div>
        </div>
    )
}

export default ProductsList;