import React, { useState } from 'react';
import leftArrow from '../../assets/media/arrow_left.svg';
import './Gallery.css';

const Gallery = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const [animName, setAnimName] = useState('');
  const length = pictures.length;

  let styleAnimation = {
    animation: `${animName} .3s ease-in 0s 1`,
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setAnimName('nextImg');
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setAnimName('prevImg');
  };

  return (
    <div className="Gallery ">
      {pictures.map(
        (picture, index) =>
          index === current && (
            <div className="Picture" key={'gallery_' + index}>
              <img src={picture} key={picture} alt="" style={styleAnimation} />
            </div>
          ),
      )}
      {length > 1 && (
        <div className="Buttons">
          <button className="Prev" onClick={prev}>
            <img src={leftArrow} alt="précédente" />
          </button>
          <button className="Next" onClick={next}>
            <img src={leftArrow} alt="suivante" />
          </button>
        </div>
      )}
      <span className="PictureCompteur">
        {current + 1}/{length}
      </span>
    </div>
  );
};

export default Gallery;
