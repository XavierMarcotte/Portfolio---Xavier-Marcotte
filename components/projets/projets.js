import pilori from "./photos/pilori.png";
import recherche from "./photos/recherche.png";
import carhub from "./photos/carhub.png";
import quizz from "./photos/quizz.png";
import joomla from "./photos/joomla.png";
import lieu from "./photos/lieu.png";
import qualiextra from "./photos/qualiextra.png";
const projetsTab = [
  {
    name: "Pilori",
    photo: pilori,
    description: `Projet présenté lors du passage du titre DWWM en Avril 2024. Création d'un site web dans lequel il est possible de signaler des sites défectueux ou présentant des failles. Possibilité de créer un compte et de s'y connecter, espace commentaires et article disponible. (Node.js, postgresql, Scss)`,
    link: "https://github.com/XavierMarcotte/pilori",
  },
  {
    name: "Recherche API",
    photo: recherche,
    description: `Création d'un site web qui permet de se renseigner sur la population d'une ville. Possibilité de recherche par nom ou code psotal. Utilisation de l'API du gouvernement 'API découpages administratif : communes'. (React.JS, Scss) `,
    link: "https://github.com/XavierMarcotte/Trouve-Ta-Ville",
  },
  {
    name: "CarHub",
    photo: carhub,
    description: `Site web catalogue de voiture avec utilisation de deux API (voir dépôt). L'intérêt de ce projet est de mieux comprendre l'importance du typage des variables/fonctions grâce à Typescript, du style grâce à tailwindCSS et l'organisation du projet grâce au framework Next.js. (Next.js, TypeScript.js, TailwindCSS, React.js) `,
    link: "https://github.com/XavierMarcotte/Car_Hub",
  },
  {
    name: "Quizz-couleur",
    photo: quizz,
    description: `Site quizz où l'on peut chercher une couleur à partir d'un nom et vice versa. Base de données en ligne sur Supabase. Site en ligne à cette adresse : https://quizz-couleur-indol.vercel.app/ (Next.js, Node.js, TailwindCSS) `,
    link: "https://github.com/XavierMarcotte/pilori",
  },
  {
    name: "Composant Joomla",
    photo: joomla,
    description: `Documentation réalisée dans le cadre de mon stage en entreprise pour mettre en place un compsoant Joomla. Inspiré et traduit de la documentation officielle :  https://docs.joomla.org/Component`,
    link: "https://github.com/XavierMarcotte/ComposantMVC-Joomla",
  },
  {
    name: "Trouve ton lieu",
    photo: lieu,
    description: `Site singlepage pour rechercher une adresse postale. Utilisation de leaflet et Openstreetmap avec perspective d'évolutions comme la mise en place d'un futur gps et enregistrement utilisateur d'adresse favorites. (Next.js, TailwindCSS, Node.js)`,
    link: "https://github.com/XavierMarcotte/Depot-TrouveTonLieu",
  },
  {
    name: "Qualiextra",
    photo: qualiextra,
    description: `Projet de fin de formation pour l'entreprise Qualiextra. Réalisé en équipe de 3 personnes avec des collègues de ma promotion, 2 mois de développement et remise au client à la date butoire. (React.js, Node.js, Scss, PostgreSQL)`,
    link: "https://github.com/XavierMarcotte/test-qualiextra",
  },
];

export default projetsTab;
