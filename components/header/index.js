import image from '/pdp.jpg'


function header(){
    const handleLinkClick = (event) => {
        event.preventDefault();
    };
    return(
        <header>
            <img src={image} alt="Mon image" />
            <nav>
                <a href="/" onClick={handleLinkClick}>Accueil</a>
                <a href="/#presentation">Présentation</a>
                <a href="/#projets">Projets Perso</a>
                <a href="/#competences">Compétences</a>
                <a href="/#contact" className="contact">Me contacter</a>
            </nav>
        </header>
    )
}

export default header;