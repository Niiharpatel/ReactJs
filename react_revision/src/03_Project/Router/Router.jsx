import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderCom from '../Components/HeaderCom/HeaderCom';
import RestApi from '../RestApi';
import SingleCountry from '../Components/SingleCountry/SingleCountry';
import ThemeContext from '../Context/ThemeContext';

function Router() {
  return (
    <>
      <ThemeContext>
        <BrowserRouter>
          <HeaderCom />
          <Routes>
            <Route path="/" element={<RestApi />} />
            <Route path="/:country" element={<SingleCountry />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext>
    </>
  );
}

export default Router;
