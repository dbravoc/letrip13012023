// BranchContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactGA from 'react-ga';

const BranchContext = createContext();

export const useBranch = () => useContext(BranchContext);

export const BranchProvider = ({ children }) => {
  const [experienceCard, setExperienceCard] = useState([]);

  const isDevelopment = process.env.NODE_ENV === 'development';
  const backendUrl = isDevelopment
    ? 'https://letrip13012023-backend-lawitec.vercel.app/experiences'
    : 'https://m-develop-backend-letrip.vercel.app/experiences';

  useEffect(() => {
    ReactGA.initialize('G-JE2KDGP3E4'); // Puedes mover el Tracking ID aquí
    ReactGA.pageview(window.location.pathname + window.location.search);

    fetch(backendUrl)
      .then(response => response.json())
      .then(data => {
        setExperienceCard(data);
        console.log("Datos cargados desde:", backendUrl);
      })
      .catch(error => console.error('Error:', error));
  }, [backendUrl]);

  return (
    <BranchContext.Provider value={{ experienceCard }}>
      {children}
    </BranchContext.Provider>
  );
};
