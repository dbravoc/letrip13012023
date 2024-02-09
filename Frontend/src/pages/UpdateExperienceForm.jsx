import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de que la ruta sea correcta

const UpdateExperienceForm = ({ experienceId }) => {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    // Aquí debes cargar los datos de la experiencia que quieres editar.
    // Esto normalmente implicaría hacer una llamada a la API para obtener los datos de la experiencia por su ID.
    const fetchExperienceData = async () => {
      try {
        const response = await fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${experienceId}`);
        if (!response.ok) throw new Error('No se pudo cargar la experiencia');
        const data = await response.json();
        setInitialData(data); // Suponiendo que la API devuelve los datos de la experiencia directamente.
      } catch (error) {
        console.error('Error al cargar la experiencia:', error);
        // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario.
      }
    };

    fetchExperienceData();
  }, [experienceId]);

  const handleSubmit = (formData) => {
    // Aquí implementas cómo manejar la actualización de la experiencia.
    // Esto puede involucrar llamar a una API y manejar la respuesta.
    // Asegúrate de usar el método PUT para actualizar la experiencia.
  };

  return (
    <div>
      {initialData ? (
        <ExperienceForm mode="update" initialData={initialData} onSubmit={handleSubmit} />
      ) : (
        <p>Cargando datos de la experiencia...</p>
      )}
    </div>
  );
};

export default UpdateExperienceForm;
