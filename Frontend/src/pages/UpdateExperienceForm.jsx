// UpdateExperience.jsx

import React from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de que la ruta sea correcta

const UpdateExperience = ({ experienceData }) => {
  const handleSubmit = (formData) => {
    // Aquí implementas cómo manejar la actualización de la experiencia.
    // Esto puede involucrar llamar a una API y manejar la respuesta.
  };

  return <ExperienceForm mode="update" initialData={experienceData} onSubmit={handleSubmit} />;
};

export default UpdateExperience;
