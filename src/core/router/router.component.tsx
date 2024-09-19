import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  ActorScene,
  ActorsScene,
  CharacterScene,
  CharactersCollectionScene,
  HomeScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.actor} element={<ActorScene />} />
        <Route path={switchRoutes.actors} element={<ActorsScene />} />
        <Route path={switchRoutes.editCharacter} element={<CharacterScene />} />
        <Route
          path={switchRoutes.characters}
          element={<CharactersCollectionScene />}
        />
        <Route path={switchRoutes.root} element={<HomeScene />} />
      </Routes>
    </HashRouter>
  );
};
