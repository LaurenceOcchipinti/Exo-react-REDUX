import React from 'react';
import './header.scss';

const Header = ({title,sujet,date}) => {
    return ( 
    <div className='header'> 
        <h1 className='header__titre'> {title} </h1>
        <p className='header__paragraphe'>{sujet}</p>
        <p>{date}</p>
     </div> //renvoie un seul objet DIV (qui contient 2 objets)
    )

}


export default Header;