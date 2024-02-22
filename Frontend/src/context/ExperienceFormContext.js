import React, { createContext, useContext, useState } from 'react';

const ExperienceFormContext = createContext();

export function ExperienceFormConext() {
  return useContext(ExperienceFormContext);
}

export const ExperienceFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Inicializa tu estado aquí, igual que en tu componente ExperienceForm
  });
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);

  // Funciones como en tu componente ExperienceForm

  const value = {
    formData,
    setFormData,
    dateRanges,
    setDateRanges,
    currentRange,
    setCurrentRange,
    // Añade aquí las funciones
  };

  return (
    <ExperienceFormContext.Provider value={value}>
      {children}
    </ExperienceFormContext.Provider>
  );
};
