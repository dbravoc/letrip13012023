import React, { useState, useEffect } from 'react';
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
import ExperienceForm from './pages/ExperienceForm copy 2'
import Info from './components/ExperienceView/Info';
import Carousel from './components/ExperienceView/Carousel';
import BookExperience from './components/ExperienceView/BookExperience';
import InboundForm from './components/Form/InboundForm';
import ExperienceRequest from './components/Form/ExperienceRequest';

import FooterProceso from './components/FooterProceso';
import TyC from './pages/TyC';




const App = () => {
  const [experienceCard, setExperienceCard] = useState([]);

  useEffect(() => {
    // Obtener las experiencias desde el servidor
    fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences') // Asegúrate de usar la URL correcta de tu servidor
      .then(response => response.json())
      .then(data => setExperienceCard(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ExperienceFormProvider>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-white mx-auto flex flex-col justify-between w-full min-h-screen">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className='pt-36 pb-12'><Experiencias experienceCard={experienceCard} /></div>
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

      <Route path="/pruebas" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><ExperienceForm /></div>
            </div>
          </>
        } /> 

            <Route path="/tyc" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><TyC /></div>
            </div>
          </>
        } /> 

            <Route path="/tarjeta/:id" element={
          <>
            <div className="mx-auto w-full px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className=" flex-wrap pt-44 relative z-10"><Carousel experienceCard={experienceCard} /></div>
              <div className="pt-24 sm:px-32 "><Info experienceCard={experienceCard} /></div>
              <div className="pt-24"><BookExperience experienceCard={experienceCard} /></div>


            </div>
          </>
        } /> 

      <Route path="/admin" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><MenuCard /></div>
            </div>
          </>
        } />   

        
        <Route path="/borrar/:id" element={
          <>
          <div className="bg-white mx-auto w-full px-2">
            <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
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

        <Route path="/formulariopago/:id" element={
          <>
          <div className="bg-white mx-auto w-full sm:px-6 px-8">
            <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
            <div className='pt-36 '><FormularioPago experienceCard={experienceCard} /></div>

          </div>
          </>
        } />
      </Routes>
    </Router>
    </ExperienceFormProvider>
  );
};

export default App;
