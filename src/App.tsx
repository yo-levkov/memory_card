import React, {FC, useState} from 'react';
import {Card} from "./components/Card";
import './App.css';
import './index.css';

import top from './assets/top.svg';
import bottom from './assets/bottom.svg';
import {RickAndMortyMock} from "./mocks/rick-and-morty";

/**
 * index.tsx
 *   renderDOM(App)
 *
 *   App - твое приложение (где можно хранить общий state и органы управления)
 *   Dashboard - пропсы, сколько нужно вывести карт
 *     Card - массив кард (глупые компонент)
 *
 */

const getData = (param: number) => {
  // TODO: здесь скоро будет graphql запрос
  return RickAndMortyMock;
}

export const App: FC<{ name: string }> = ({name}) => {
  // используя хуки React, мы можем хранить некоторое состояние, чтобы управлять нашим приложение
  const [count, setCount] = useState(0);

  const handleCardClick = () => {
   setCount(prevState => prevState + 1);
  }

  return (
    <section className="memory-game">
      <Card img1={top} img2={bottom} onClick={handleCardClick} count={count} />
    </section>
  );
}

