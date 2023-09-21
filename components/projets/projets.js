import pilori from './photos/pilori.png'
import recherche from './photos/recherche.png'
import carhub from './photos/carhub.png'

const projetsTab = [
    {name : "Pilori", photo: pilori, description: `Création d'un site web dans lequel il est possible de signaler des sites défectueux ou présentant des failles. Possibilité de créer un compte et de s'y connecter. (node.js, psql, Scss)`, link:'https://github.com/XavierMarcotte/pilori'},
    {name : "Recherche API", photo: recherche, description: `Création d'un site web qui permet de se renseigner sur la population d'une ville. Possibilité de recherche par nom ou code psotal. Utilisation de l'API du gouvernement 'API découpages administratif : communes'. (React.JS, Scss) `, link:'https://github.com/XavierMarcotte/Trouve-Ta-Ville'},
    {name : "CarHub", photo: carhub, description: `Site web catalogue de voiture avec utilisation de deux API (voir dépôt). L'intérêt de ce projet est de mieux comprendre l'importance du typage des variables/fonctions grâce à Typescript, du style grâce à tailwindCSS et l'organisation du projet grâce au framework Next.js. (Next.js, TypeScript.js, TailwindCSS, React.js) `, link:'https://github.com/XavierMarcotte/Car_Hub'},

]

export default projetsTab;