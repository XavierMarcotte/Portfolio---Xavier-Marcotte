import image from '/pdp.jpg'


function header(){
    return(
        <header>
            <img src={image} alt="Mon image" />
            {/* <h1>Xavier Marcotte</h1> */}
            <nav>
                <a href="">Accueil</a>
                <a href="">Projets Perso</a>
                <a href="">Compétences</a>
                <a href="">Apprentissage</a>
                <a href="" className="contact">Me contacter</a>
            </nav>
        </header>
    )
}

export default header;