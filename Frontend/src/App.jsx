import React, { useState, useEffect } from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import Galeria from './pages/Galeria';
import FormularioPago from './pages/EstadoPago';
import ExperienceForm from './pages/ExperienceForm';
import ExperienceFormEdit from './pages/UpdateExperienceForm';
import IncludedNotIncluded from './components/IncludedNotIncluded';
import AvailablesExperiences from './components/AvailablesExperiences';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><ExperienceForm /></div>
            </div>
          </>
        } />  

      <Route path="/edit" element={
          <>
            <div className="mx-auto w-full sm:px-6 px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className="pt-36 px-12 flex flex-col justify-between flex-wrap relative z-10"><ExperienceFormEdit /></div>
            </div>
          </>
        } />  


        
        <Route path="/tarjeta/:id" element={
          <>
          <div className="bg-white mx-auto w-full">
            <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
            <div grid grid-cols-2>
              <div>
                  <div className='pt-36'><Tarjeta experienceCard={experienceCard} /></div>
                  <div className='pt-20'><IncludedNotIncluded experienceCard={experienceCard} /></div>
                  <div className='pt-20'><AvailablesExperiences experienceCard={experienceCard} /></div>
              </div>
              <div>
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
