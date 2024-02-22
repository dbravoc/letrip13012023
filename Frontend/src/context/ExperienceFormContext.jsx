import React, { createContext, useContext, useState } from 'react';

const ExperienceFormContext = createContext();

export function useExperienceFormContext() {
  return useContext(ExperienceFormContext);
}

export const ExperienceFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);

  const submitFormData = async (updatedFormData, method = 'POST') => {
    try {
      console.log("Enviando formData:", JSON.stringify(updatedFormData));
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences', {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const result = await response.json();
      console.log('Experiencia creada:', result);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const value = {
    formData,
    setFormData,
    dateRanges,
    setDateRanges,
    currentRange,
    setCurrentRange,
    submitFormData,
  };

  return (
    <ExperienceFormContext.Provider value={value}>
      {children}
    </ExperienceFormContext.Provider>
  );
};
