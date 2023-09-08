import image from '/pdp.jpg'
import { useState } from 'react';

function header(){

    const [click, setClick] = useState(true)

    function handleShowLinks() {
        setClick(!click)
    }
    const handleLinkClick = (event) => {
        event.preventDefault();
    };
    return(
        <header>
            <img src={image} alt="Mon image" />
            <nav className={`navbar ${click ? "" : "print-nav" }`}>
                <a className='nav-desk' href="/" onClick={handleLinkClick}>Accueil</a>
                <a className='nav-desk' href="/#presentation">Présentation</a>
                <a className='nav-desk' href="/#projets">Projets Perso</a>
                <a className='nav-desk' href="/#competences">Compétences</a>
                <a href="/#contact" className="contact nav-desk">Me contacter</a>
            </nav>
            <i onClick={handleShowLinks} className="fa-solid fa-bars fa-2xl nav-mobile"></i>
        </header>
    )
}

export default header;