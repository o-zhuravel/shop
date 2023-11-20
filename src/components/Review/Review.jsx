import './Review.css';

const Review = (props) => {
    console.log(props.rev)
    return (
            <div className='Review'>
                <h3>{props.rev.userId}</h3>
                <p>{props.rev.body} </p>
            </div>
        )
}

export default Review;