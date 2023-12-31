import React, { useEffect, useState } from 'react';

import HousingService from '../../utils/hooks/index';

import BannerImg from '../../assets/media/banner.jpg';

import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';

import './HomePage.css';
function Home() {
  // State (état, données)
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // Comportement
  useEffect(() => {
    HousingService.getAll()
      .then((housing) => {
        setData(housing);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h2 className="text-center">Oups il y a eu un problème</h2>;
  }

  // affichage (render)
  return (
    <div className="Home">
      <div className="Banner" style={{ backgroundImage: `url(${BannerImg})` }}>
        <span className="BannerEffect"></span>
        <div className="Banner-title">
          <h1>
            Chez vous,
            <span> partout et ailleurs</span>
          </h1>
        </div>
      </div>

      <div className="SectionCard">
        {isLoading ? (
          <Loader />
        ) : (
          <ul>
            {data.map((card, index) => (
              <Card
                title={card.title}
                cover={card.cover}
                key={`${card.title}-${index}`}
                id={card.id}
              ></Card>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
