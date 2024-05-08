import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderCom from '../Components/HeaderCom/HeaderCom';
import RestApi from '../RestApi';
import SingleCountry from '../Components/SingleCountry/SingleCountry';

function Router() {
  return (
    <>
      <BrowserRouter>
        <HeaderCom />
        <Routes>
          <Route path="/" element={<RestApi />} />
          <Route path="/:country" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
