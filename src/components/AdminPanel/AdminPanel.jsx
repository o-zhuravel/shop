import './AdminPanel.css';
import data from "../../data/data";
import {useRef, useState} from "react";

const AdminPanel = () => {
    let [products, setProducts] = useState([]);

    let [productId, setProductId] = useState(0);

    const inputDelete = useRef();

    let [newProdTitle, setNewProdTitle] = useState('');
    let [newProdPrice,setNewProdPrice] = useState(0);
    let [newProdDescription,setNewProdDescription] = useState('');
    let [newProdCategory,setNewProdCategory] = useState('');
    let [newProdImage,setNewProdImage] = useState('');

    const inputTitleAdd = useRef();
    const inputPriceAdd = useRef();
    const inputCategoryAdd = useRef();
    const inputImageAdd = useRef();
    const inputDescriptionAdd = useRef();

    function deleteProdHandler (e) {
        let prId = Number(e.target.value);
        setProductId(prId);
        console.log(prId);
        console.log(typeof(prId))
    }

    function deleteProd () {
        for (let i = 0; i < data.prod.length; i++) {
            let el = data.prod[i];
            if (el.id === productId) {
                data.prod.splice(i, 1);
            }
        }
        console.log(data.prod);
    }

    function addProdTitle (e) {
        let title = e.target.value;
        setNewProdTitle(title);
    }

    function addProdPrice (e) {
        let price = e.target.value;
        setNewProdPrice(price);
    }

    function addProdCategory (e) {
        let category = e.target.value;
        setNewProdCategory(category);
    }

    function addProdImage (e) {
        let image = e.target.value;
        setNewProdImage(image);
    }

    function addProdDescription (e) {
        let description = e.target.value;
        setNewProdDescription(description);
    }

    function addProd () {
        let newId = data.prod.length + 1;

        let newProd = {
            id: newId,
            title: newProdTitle,
            price: newProdPrice,
            description: newProdDescription,
            category: newProdCategory,
            image: newProdImage,
            rating: {
                rate: 0,
                count: 0,
            }
        };

        data.prod.push(newProd)

        console.log(data.prod);
    }

    return (
        <div className='Admin-panel'>
            <div className='delete-container'>
                <p>Enter product id to delete</p>
                <input ref={inputDelete} type='number' onChange={(e) => deleteProdHandler(e)}/>
                <div className='delete-btn' onClick={deleteProd}>delete product</div>
            </div>
            <div className='add-container'>
                <p>Enter product title to add</p>
                <input ref={inputTitleAdd} onChange={(e) => addProdTitle(e)}/>
                <p>Enter product price to add</p>
                <input ref={inputPriceAdd} onChange={(e) => addProdPrice(e)}/>
                <p>Enter product category to add</p>
                <input ref={inputCategoryAdd} onChange={(e) => addProdCategory(e)}/>
                <p>Enter product image src to add</p>
                <input ref={inputImageAdd} onChange={(e) => addProdImage(e)}/>
                <p>Enter product description to add</p>
                <textarea cols='60' ref={inputDescriptionAdd} onChange={(e) => addProdDescription(e)}/>
                <div className='add-btn' onClick={addProd}>add product</div>
            </div>
        </div>
    )
}

export default AdminPanel;