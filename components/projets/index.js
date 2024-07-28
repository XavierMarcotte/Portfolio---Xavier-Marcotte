import projetsTab from "./projets";

function projets() {
  console.log(projetsTab);

  const projetsEach = projetsTab.map((index) => (
    <article className="projets--article--article" key={index.id}>
      <img
        src={index.photo}
        className="projets--article--article--photo"
        alt={index.name}
      ></img>
      <h2 className="projets--article--article--title">{index.name}</h2>
      <p className="projets--article--article--text">{index.description}</p>
      <p className="projets--article--article--link">
        <a href={index.link} target="_blank">
          Voir le dépôt
        </a>
      </p>
    </article>
  ));
  return (
    <section className="projets" id="projets">
      <div>
        <h2>Mes projets</h2>
        <div className="projets--article">{projetsEach}</div>
      </div>
    </section>
  );
}
export default projets;
