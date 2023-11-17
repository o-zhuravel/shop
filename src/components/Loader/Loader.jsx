import './Loader.css'
import loader from '../../assets/img/loading.png';

const Loader = () => {
    return (
        <div className='Loader'>
            <img src={loader} alt='loader'/>
        </div>
    )
}

export default Loader;