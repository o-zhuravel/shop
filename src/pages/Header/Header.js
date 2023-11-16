import './Header.css';
import logo from '../../assets/img/logo1.png'
import {NavLink} from "react-router-dom";

export default function Header () {
    return (
        <header className='Header'>
            <img src={logo} alt='logo'/>
            <nav>
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='/products-list'>PRODUCTS</NavLink>
                <NavLink to='/future'>FUTURE</NavLink>
                <NavLink to='/contacts'>CONTACTS</NavLink>
            </nav>
        </header>
    )
}