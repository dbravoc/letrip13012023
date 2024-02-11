import React, { useState, useEffect } from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import Galeria from './pages/Galeria';
import FormularioPago from './pages/EstadoPago';
import CreateExperienceForm from './pages/CreateExperienceForm';
import UpdateExperienceForm from './pages/UpdateExperienceForm';
import IncludedNotIncluded from './components/IncludedNotIncluded';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectAvailableDates from './components/SelectAvailableDates'; // Asegúrate de importar correctamente
import PriceExperience from './components/PriceExperience';
import TotalPrice from './components/TotalPrice';


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
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <div className="bg-white mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className='pt-36 pb-12'><Experiencias experienceCard={experienceCard} /></div>
            </div>
          </>
        } />

      <Route path="/create" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><CreateExperienceForm /></div>
            </div>
          </>
        } />  

      <Route path="/update" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><UpdateExperienceForm /></div>
            </div>
          </>
        } />  


        
        <Route path="/tarjeta/:id" element={
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
  );
};

export default App;
