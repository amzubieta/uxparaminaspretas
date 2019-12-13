import React from 'react'
import {Route, Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './styles.css'

class LinkMenu extends React.Component {

    render() {

        return (
            <nav>
                <div className='navbar'>
                <img
                    className='navbar-logo'
                    src={Logo}
                    alt='Logotipo de UX para minas pretas'
                />
                    <ul className='navbar-links'>
                        <li>
                        <a href="#player">Home</a>
                        </li>
                        <li>
                        <a href="#fondo">Quiene Somos</a>        
                        </li>
                        <li>
                        <a href="#eventos">Eventos</a>                
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default LinkMenu;