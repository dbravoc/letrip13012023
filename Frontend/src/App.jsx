import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import { BranchProvider } from './branch/branchContext';
import './App.css';https://github.com/dbravoc/letrip13012023/pull/5/conflict?name=Frontend%252Fsrc%252FApp.jsx&ancestor_oid=27b4a937d0f90b35f4bb31263db3f8cf7b87a0da&base_oid=6c2288b86ab556f3eae99322b19a97e877637126&head_oid=e8a411abf99ac3269664d8ea1e25871394c86d41
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
//import PayOrder from './components/ExperienceView/PayOrder';


import FooterProceso from './components/FooterProceso';
import TyC from './pages/TyC';

const TRACKING_ID = "G-JE2KDGP3E4"; // Sustituye con tu propio Tracking ID

function initializeReactGA() {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => {

  const [experienceCard, setExperienceCard] = useState([]);
  
  const isDevelopment = process.env.NODE_ENV === 'development';
  

  // URLs del backend para diferentes entornos
  const backendUrl = isDevelopment
    ? 'https://letrip13012023-backend-lawitec.vercel.app/experiences'
    : 'https://m-develop-backend-letrip.vercel.app/experiences';


  useEffect(() => {
    initializeReactGA();
    console.log("Haciendo una petición a:", backendUrl); // Imprimiendo la URL en la consola
    fetch(backendUrl)
      .then(response => response.json())
      .then(data => setExperienceCard(data))
      .catch(error => console.error('Error:', error));
  }, [backendUrl]); // Asegúrate de agregar backendUrl aquí para evitar efectos innecesarios


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


            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='justify-self-center'>
                  <div className='pt-36'><Tarjeta experienceCard={experienceCard} /></div>
                  <div className='pt-10'><IncludedNotIncluded experienceCard={experienceCard} /></div>
                  <div className='pt-10'><PriceExperience experienceCard={experienceCard}/></div>
                  <div className='pt-10'><SelectAvailableDates experienceCard={experienceCard}/></div>
                  <div className='pt-10'><TotalPrice experienceCard={experienceCard}/></div>
              </div>
              <div className='justify-self-center'>
                  <div className='pt-36'><Galeria experienceCard={experienceCard} /></div>
              </div>
            </div>

          </div>
          </>
        } />
      </Routes>
    </Router>
    </BranchProvider>

  );
};

export default App;
