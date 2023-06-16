import React, { useState } from 'react';
import Outils from './outils';
import Front from './front';
import Back from './back';

function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState(null);

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
      <ul>
        <li onClick={() => handleCompetenceClick('front')}>Front-end</li>
        <li onClick={() => handleCompetenceClick('back')}>Back-end</li>
        <li onClick={() => handleCompetenceClick('devops')}>Technos</li>
      </ul>
      <div className="competencescontent">
        {competenceContent}
      </div>
    </section>
  );
}

export default Competences;