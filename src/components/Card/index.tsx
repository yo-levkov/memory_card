import React, {VFC} from 'react';

import {DEFAULT_IMAGE_ALT} from "./constants";
import {CardProp} from './interfaces';

import './styles.css';

/**
 * Карточка, которая показывает картинки
 */
export const Card: VFC<CardProp> = ({img1, img2, onClick, count}) => {
  return (
    <div className="memory-card" onClick={onClick}>
      {count}
      {/*<img className="front-face" src={img1} alt={DEFAULT_IMAGE_ALT}/>*/}
      {/*<img className="back-face" src={img2} alt={DEFAULT_IMAGE_ALT}/>*/}
    </div>
  )
};