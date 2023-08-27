import React, { useState } from 'react';
import Outils from './outils';
import Front from './front';
import Back from './back';



// Manque les compétences acquises lors de mon porjet


function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState('front'); // Définir 'front' comme valeur par défaut

  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };

  let competenceContent = null;
  if (selectedCompetence === 'front') {
    competenceContent = <Front />;
  } 
  else if (selectedCompetence === 'devops') {
    competenceContent = <Outils />;
  }
  else if (selectedCompetence === 'back') {
    competenceContent = <Back />;
  } 
  else {
    competenceContent = <Front />;
  }

  return (
    <section className="competences" id='competences'>
      <div className="competences--div">
        <h2>Mes compétences</h2>
        <ul>
          <li onClick={() => handleCompetenceClick('front')} className={selectedCompetence === 'front' ? 'selected' : ''}>
            Front-end
          </li>
          <li onClick={() => handleCompetenceClick('back')} className={selectedCompetence === 'back' ? 'selected' : ''}>
            Back-end
          </li>
          <li onClick={() => handleCompetenceClick('devops')} className={selectedCompetence === 'devops' ? 'selected' : ''}>
            Technos
          </li>
        </ul>
        <div className="competencescontent">
          {competenceContent}
        </div>
      </div>
    </section>
  );
}

export default Competences;