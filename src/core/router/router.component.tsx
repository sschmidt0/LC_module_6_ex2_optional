import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { ActorScene, HotelCollectionScene, HotelScene } from 'scenes';
import { HomeScene } from 'scenes/home.scene';

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
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.hotelCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
