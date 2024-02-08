// CreateExperience.jsx

import React from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de que la ruta sea correcta

const CreateExperience = () => {
  const handleSubmit = (formData) => {
    // Aquí implementas cómo manejar la creación de la experiencia.
    // Esto puede involucrar llamar a una API y manejar la respuesta.
  };

  return <ExperienceForm mode="create" onSubmit={handleSubmit} />;
};

export default CreateExperience;
