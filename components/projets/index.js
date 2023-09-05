import projetsTab from './projets';

function projets(){
    console.log(projetsTab);

    const projetsEach = projetsTab.map(index => (
        <article key={index.id} className='projets--article--article'>
            <img src={index.photo} className='projets--article--article--photo'></img>
            <h2 className='projets--article--article--title'>{index.name}</h2>
            <p className='projets--article--article--text'>{index.description}</p>
            <p className='projets--article--article--link'><a href={index.link} target="_blank">Voir le dépôt</a></p>
        </article>
    ))
    return(
        <section className="projets" id="projets">
            <div>
                <h2>Mes projets</h2>
                <div className="projets--article">
                    {projetsEach}
                    {/* Je pourrais mettre l'api react de fin de saison, le projet de cohérence cardiaque et le pilori là où on y a touché pour la dernière fois (probablement après le côté back) */}
                </div>
            </div>
        </section>
    )
}
export default projets;