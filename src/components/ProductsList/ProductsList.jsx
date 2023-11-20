import './ProductsList.css';
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader";
import data from '../../data/data';

const ProductsList = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.prod);
    }, []);

    let sorting = (param) => {
        switch (param) {
            case 'category' :

                let sortArrayCategory = [];
                data.prod.filter(prod => prod.category === 'jewelery').forEach(pr => {
                    sortArrayCategory.push(pr)
                });

                data.prod.filter(prod => prod.category === 'women\'s clothing').forEach(pr => {
                    sortArrayCategory.push(pr)
                });

                data.prod.filter(prod => prod.category === 'men\'s clothing').forEach(pr => {
                    sortArrayCategory.push(pr)
                });

                data.prod.filter(prod => prod.category === 'electronics').forEach(pr => {
                    sortArrayCategory.push(pr)
                });

                setProducts(sortArrayCategory);
                break;
            case 'price' :
                        let sortArrayPrice = data.prod.sort((a,b) => {
                            if (a.price > b.price) {
                                return -1;
                            }
                            if (a.price < b.price) {
                                return 1;
                            }
                            return 0;
                        });

                        setProducts(sortArrayPrice);

                break;
            case 'rating' :
                        let sortArrayRate = data.prod.sort((a,b) => {
                            if (a.rating.rate > b.rating.rate) {
                                return -1;
                            }
                            if (a.rating.rate < b.rating.rate) {
                                return 1;
                            }
                            return 0;
                        });

                        setProducts(sortArrayRate);

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