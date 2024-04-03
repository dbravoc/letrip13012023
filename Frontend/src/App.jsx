import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { BranchProvider } from './branch/branchContext';
import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import Galeria from './pages/Galeria';
import FormularioPago from './pages/EstadoPago';
import IncludedNotIncluded from './components/IncludedNotIncluded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectAvailableDates from './components/SelectAvailableDates'; // Asegúrate de importar correctamente
import PriceExperience from './components/PriceExperience';
import TotalPrice from './components/TotalPrice';
import MenuCard from './components/MenuCard';
import { ExperienceFormProvider } from './context/ExperienceFormContext';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import ExperienceForm from './pages/ExperienceForm copy 2'
import Info from './components/ExperienceView/Info';
import Carousel from './components/ExperienceView/Carousel';
import BookExperience from './components/ExperienceView/BookExperience';
import InboundForm from './components/Form/InboundForm';
import ExperienceRequest from './components/Form/ExperienceRequest';


import FooterProceso from './components/FooterProceso';
import TyC from './pages/TyC';

const TRACKING_ID = "G-JE2KDGP3E4"; // Sustituye con tu propio Tracking ID

function initializeReactGA() {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => {
  // Inicialización de Google Analytics
  React.useEffect(() => {
    initializeReactGA();
  }, []);

  return (
    <BranchProvider>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-white mx-auto flex flex-col justify-between w-full min-h-screen">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className='pt-36 pb-12'><Experiencias  /></div>
              <div className='flex flex-col justify-between flex-wrap'><Footer /></div>
            </div>
          </>
        } />


       <Route path="/inboundform" element={
          <>
            <div className="mx-auto w-full">
              <div className="mb-36 flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-4 px-12 flex flex-col justify-between wrap relative z-10"><InboundForm /></div>
              <div className='flex flex-col justify-between flex-wrap'><FooterProceso /></div>


            </div>
          </>
        } />  

        <Route path="/request" element={
          <>
            <div className="mx-auto w-full">
              <div className="mb-36 flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-4 px-12 flex flex-col justify-between wrap relative z-10"><ExperienceRequest /></div>
              <div className='flex flex-col justify-between flex-wrap'><FooterProceso /></div>


            </div>
          </>
        } />

            <Route path="/tyc" element={
          <>
            <div className="mx-auto w-full md:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><TyC /></div>
            </div>
          </>
        } /> 

            <Route path="/tarjeta/:id" element={
          <>
            <div className="mx-auto w-full">
              <div className="flex flex-col justify-between flex-wrap px-8"><Inicio /></div>
              <div className="flex-wrap pt-44 relative z-10 px-8"><Carousel  /></div>
              <div className="pt-24 md:px-32 px-8"><Info  /></div>
              <div className="pt-24"><BookExperience  /></div>
              <div className='flex flex-col justify-between flex-wrap'><Footer2 /></div>



            </div>
          </>
        } /> 
        

        <Route path="/formulariopago/:id" element={
          <>
          <div className="bg-white mx-auto w-full md:px-6 px-8">
            <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
            <div className='pt-36 '><FormularioPago  /></div>

          </div>
          </>
        } /> 
      {/*  <Route path="/PayOrder" element={
          <>
          <div className="bg-white mx-auto w-full md:px-6 px-8">
          <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
          {/*<div className='pt-36 '><PayOrder  /></div> 
          </div>
          </>
        } />*/}
      </Routes>
    </Router>
    </BranchProvider>

  );
};

export default App;
