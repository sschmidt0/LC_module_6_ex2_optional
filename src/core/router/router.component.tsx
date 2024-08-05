import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  ActorScene,
  HomeScene,
  HotelCollectionScene,
  HotelScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.hotelCollection}
          element={<HotelCollectionScene />}
        />
        <Route path={switchRoutes.createHotel} element={<HotelScene />} />
        <Route path={switchRoutes.editHotel} element={<HotelScene />} />
        <Route path={switchRoutes.actors} element={<ActorScene />} />
        <Route path={switchRoutes.root} element={<HomeScene />} />
      </Routes>
    </HashRouter>
  );
};
