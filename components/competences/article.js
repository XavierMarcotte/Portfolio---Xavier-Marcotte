function article({nom, logo}){
    return(
        <>
            <article>
                {logo}
                <p>{nom}</p>
            </article>
        </>
    )
}


export default article;