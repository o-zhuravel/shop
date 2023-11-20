import './Contacts.css';
import inst from '../../assets/img/logo-instagram.svg';
import tictok from '../../assets/img/logo-tiktok.svg';
import youtube from '../../assets/img/logo-youtube.svg';

const Contacts = () => {
    return (
        <div className='Contacts'>
            <div className='cont'>
                <h1>Merevita</h1>
                <h2>Sportivna plosha, 1a, "Guliver", 3 floor </h2>
                <div className='social'>
                    <a href='https://www.instagram.com/' target='blank'><img src={inst}/></a>
                    <a href='https://www.youtube.com/' target='blank'><img src={youtube}/></a>
                    <a href='https://www.tiktok.com/uk-UA/' target='blank'><img src={tictok}/></a>
                </div>
            </div>
            <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28743.11709430132!2d30.474192475145518!3d50.4493586825621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cefe0307e81f%3A0x1f234c3b0a0b492!2z0JPRg9C70ZbQstC10YA!5e0!3m2!1suk!2sua!4v1700244590605!5m2!1suk!2sua" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contacts;