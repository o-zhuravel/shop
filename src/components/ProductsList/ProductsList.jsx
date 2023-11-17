import './ProductsList.css';
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

const ProductsList = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
                .then(res=> {
                    console.log(res.data)
                    setProducts(res.data)
                })
    }, []);

    let sorting = (param) => {
        console.log(param);
        switch (param) {
            case 'category' :
                axios.get('https://fakestoreapi.com/products')
                    .then(res => {

                        let sortArray = [];

                        res.data.filter(prod => prod.category === 'jewelery').forEach(pr => {
                            sortArray.push(pr)
                        });

                        res.data.filter(prod => prod.category === 'women\'s clothing').forEach(pr => {
                            sortArray.push(pr)
                        });

                        res.data.filter(prod => prod.category === 'men\'s clothing').forEach(pr => {
                            sortArray.push(pr)
                        });

                        res.data.filter(prod => prod.category === 'electronics').forEach(pr => {
                            sortArray.push(pr)
                        });

                        setProducts(sortArray);
                    })
                break;
            case 'price' :
                axios.get('https://fakestoreapi.com/products')
                    .then(res=> {
                        console.log(res.data)
                        let sortArray = res.data.sort((a,b) => {
                            if (a.price > b.price) {
                                return -1;
                            }
                            if (a.price < b.price) {
                                return 1;
                            }
                            return 0;
                        });

                        console.log(sortArray)

                        setProducts(sortArray);
                    })
                break;
            case 'rating' :
                axios.get('https://fakestoreapi.com/products')
                    .then(res=> {
                        console.log(res.data)
                        let sortArray = res.data.sort((a,b) => {
                            if (a.rating.rate > b.rating.rate) {
                                return -1;
                            }
                            if (a.rating.rate < b.rating.rate) {
                                return 1;
                            }
                            return 0;
                        });

                        console.log(sortArray)

                        setProducts(sortArray);
                    })
                break;
        }

    }

    return (
        <div className='Products-list'>
            <div className='products-container'>
                {
                    products.length > 0 ? products.map(product => <Card product={product} key={product.id}/>) : <Loader/>
                }
            </div>
            <div className='sort'>
                <select className='select' name='select' onChange={(event) => sorting(event.target.value)}>
                    <option value={'category'}>Category</option>
                    <option value={'price'}>Price</option>
                    <option value={'rating'}>Rating</option>
                </select>
            </div>
        </div>
    )
}

export default ProductsList;