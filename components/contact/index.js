import li from './logosContact/li.png'
import gh from './logosContact/gh.png'
import mail from './logosContact/mail.png'

function contact(){
    return(
        <section className="contacter" id="contact">
            <div className='contacter-div'>
                <img className='contacter-div-photo' src={li}></img>
                <a href='https://www.linkedin.com/in/xaviermarcotte/' target='_blank' className='contacter-div-text'>LinkedIn</a>
            </div>
            <div className='contacter-div'>
                <img className='contacter-div-photo' src={gh}></img>
                <a href='https://github.com/XavierMarcotte' target='_blank' className='contacter-div-text'>GitHub</a>
            </div>
            <div className='contacter-div'>
                <img className='contacter-div-photo' src={mail}></img>
                <p className='contacter-div-text'>xaviermarcotte08@gmail.com</p>
            </div>
        </section>
    )
}


export default contact;
