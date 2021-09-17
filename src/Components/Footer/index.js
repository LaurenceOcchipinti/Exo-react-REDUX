import React from 'react';


const Footer = ({techno,user,date}) => {
//PROPS venant du composant APP et définit dans APP (techno et user)
    return ( 
    <footer>
        <p>Footer {techno} by {user} since {date}</p>
    </footer>
    )

}

export default Footer;
