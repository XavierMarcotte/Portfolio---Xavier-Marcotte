import React, { useState, useEffect } from 'react';
import Outils from './outils';
import Front from './front';
import Back from './back';



// Manque les compétences acquises lors de mon porjet


function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState('front');

  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };

  let competenceContent = null;
  if (selectedCompetence === 'front') {
    competenceContent = <Front />;
  } else if (selectedCompetence === 'devops') {
    competenceContent = <Outils />;
  } else if (selectedCompetence === 'back') {
    competenceContent = <Back />;
  } else {
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
        <div className="competencescontent competencescontent--desk">
          {competenceContent}
        </div>
        <div className="competencescontent competencescontent--mobile">
          <div className='competencescontent--div'>
            <h2>Front-end</h2>
            <div className='competencescontent--div--element'>
              <Front />
            </div>
          </div>
        </div>
        <div className="competencescontent competencescontent--mobile">
          <div className='competencescontent--div'>
            <h2>Back-end</h2>
            <div className='competencescontent--div--element'>
              <Back />
            </div>
          </div>
        </div>
        <div className="competencescontent competencescontent--mobile">
          <div className='competencescontent--div'>
            <h2>Technos</h2>
            <div className='competencescontent--div--element'>
              <Outils />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences;