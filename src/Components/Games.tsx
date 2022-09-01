import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutePath } from '../enums/enums';
import { IGame } from '../Interfaces/gameInterfaces';

const games: IGame[] = [
  {
    name: 'Sprint',
    image: './images/sprint.png',
    path: RoutePath.sprintGame,
  },
  {
    name: 'Audio Challange',
    image: './images/challenge.png',
    path: RoutePath.challengeGame,
  },
];

const createGame = (name: string, img: string, path: string) => (
  <NavLink to={path}>
    <div className="games__item">
      <img className="games__image" src={img} alt="game" />
      <h4 className="games__title">{name}</h4>
    </div>
  </NavLink>
);

export default function Games() {
  return (
    <div className="container">
      <div className="games">{ games.map((game) => createGame(game.name, game.image, game.path)) }</div>
    </div>
  );
}
