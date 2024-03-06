// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [providerFormData, setProviderFormData] = useState({
    company_name: '',
    contact_person: '',
    phone_number: '',
    company_address: '',
    email_address: '',
    website_url: '',
  });

  const [experienceFormData, setExperienceFormData] = useState({
    // Inicializa tu estado de formulario de experiencia aquí
  });

  const handleSubmitBothForms = async () => {
    try {
      // Implementación de la lógica de envío aquí, similar al ejemplo anterior
      console.log("Enviar formularios", providerFormData, experienceFormData);
      // Resetear estados aquí si es necesario
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContext.Provider value={{
      providerFormData,
      setProviderFormData,
      experienceFormData,
      setExperienceFormData,
      handleSubmitBothForms,
    }}>
      {children}
    </FormContext.Provider>
  );
};
