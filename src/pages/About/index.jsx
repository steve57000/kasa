import React from 'react';

import BannerImgAbout from '../../assets/media/bannerAbout.jpg';
import Collapse from '../../components/Collapse/Collapse';

import './about.css'
import '../../assets/style/Banner.css';

const contentCollapse = [
  {
      id: '1',
    title: 'Fiabilité',
    description:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
      id: '2',
    title: 'Respect',
    description:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
      id: '3',
    title: 'Service',
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
      id: '4',
    title: 'Sécurité',
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const bannerUrl =`url(${BannerImgAbout})`
function About() {
  return (
    <>
        <div className="Banner" style={{backgroundImage: bannerUrl }} >
            <span className="BannerEffect"></span>
        </div>

        <div className='CollapseAbout'>
            {contentCollapse.map((content : {id: string, description: string, title: string}) => (
                <Collapse title={content.title} content={content.description} key={`${content.id}-${content.title}`} />
            ))
            }
        </div>
    </>
  );
}

export default About;
