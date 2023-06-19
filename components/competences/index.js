import React, { useState, useEffect } from 'react';
import Outils from './outils';
import Front from './front';
import Back from './back';

function Competences() {
  const [selectedCompetence, setSelectedCompetence] = useState('front');

  const handleCompetenceClick = (competence) => {
    setSelectedCompetence(competence);
  };

  useEffect(() => {
    const lis = document.querySelectorAll('.maliste li');
    lis[0].classList.add('selected');

    lis.forEach((li) => {
      li.addEventListener('click', () => {
        lis.forEach((item) => {
          item.classList.remove('selected');
        });
        li.classList.add('selected');
      });
    });
  }, []);

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
      <div className='ajust'>
        <h2>Mes compétences</h2>
        <ul className='maliste'>
          <li onClick={() => handleCompetenceClick('front')}>Front-end</li>
          <li onClick={() => handleCompetenceClick('back')}>Back-end</li>
          <li onClick={() => handleCompetenceClick('devops')}>Technos</li>
        </ul>
        <div className="competencescontent">
          {competenceContent}
        </div>
      </div>
    </section>
  );
}

export default Competences;