import React, { useState, useEffect } from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import FormularioPago from './pages/EstadoPago';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [experienceCard, setExperienceCard] = useState([]);

  useEffect(() => {
    // Obtener las experiencias desde el servidor
    fetch('http://localhost:3000/experiences') // Asegúrate de usar la URL correcta de tu servidor
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
        
        <Route path="/tarjeta/:id" element={
          <>
          <div className="bg-white mx-auto w-full sm:px-6 px-8">
            <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
            <div className='pt-36 '><Tarjeta experienceCard={experienceCard} /></div>
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
