import './ReviewList.css';
import Review from "../Review/Review";
import data from "../../data/data";
import {useEffect, useRef, useState} from "react";

const ReviewList = (props) => {
    const inputRev = useRef();
    const inputName = useRef();

    let [review, setReview] = useState(data.reviews[props.productId-1]);

    let [newRev, setNewRev] = useState('');
    let [newName, setName] = useState('');

    useEffect(() => {
        setReview(data.reviews[props.productId-1]);
    }, [review]);

    function addReview (e) {
        console.log(e.target.value);
        setNewRev(e.target.value);
    }

    function addName (e) {
        console.log(e.target.value);
        setName(e.target.value);
    }

    function postNewRev () {
        let newId = review.reviews.length+1;
        review.reviews.push(
            {
                userId: newName,
                id: newId,
                rating: 3,
                body: newRev,
            }
        );
        inputRev.value = '';
    }

    return (
        <div className='Review-list'>
            <h2>Reviews</h2>
            <div className='add-review'>
                <p>Enter your review</p>
                <textarea cols='60' rows='6' ref={inputRev} onChange={(e) => addReview(e)}/>
                <p>Enter your name</p>
                <input type="text" ref={inputName} onChange={(e) => addName(e)}/>

                <div className='add-review-btn' onClick={() => postNewRev()}>add review</div>
            </div>
            <div className='review-container'>
                {
                    review.reviews.map(rev => <Review rev={rev} key={rev.id}/>)
                }
            </div>
        </div>
    )
}

export default ReviewList;