// BranchContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactGA from 'react-ga';

const BranchContext = createContext();

export const useBranch = () => useContext(BranchContext);

export const BranchProvider = ({ children }) => {
  const [experienceCard, setExperienceCard] = useState([]);

  // Define si el entorno es de desarrollo
  const isDevelopment = process.env.NODE_ENV === 'development';

  // URL del backend para experiencias
  const experiencesUrl = isDevelopment
    ? 'https://letrip13012023-backend-lawitec.vercel.app/experiences'
    : 'https://m-develop-backend-letrip.vercel.app/experiences';
  
  // URL del backend para fechas disponibles
  const availableDatesUrl = isDevelopment
    ? 'https://letrip13012023-backend-lawitec.vercel.app/available_experiences'
    : 'https://m-develop-backend-letrip.vercel.app/available_experiences';

  useEffect(() => {
    ReactGA.initialize('G-JE2KDGP3E4'); // Puedes mover el Tracking ID aquí
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Cargar experiencias
    fetch(experiencesUrl)
      .then(response => response.json())
      .then(data => {
        setExperienceCard(data);
        console.log("Datos cargados desde:", experiencesUrl);
      })
      .catch(error => console.error('Error:', error));
  }, [experiencesUrl]);

  return (
    <BranchContext.Provider value={{ experienceCard, availableDatesUrl }}>
      {children}
    </BranchContext.Provider>
  );
};
