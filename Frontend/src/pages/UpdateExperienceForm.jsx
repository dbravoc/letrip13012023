import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm'; // Asume que el componente original se llama así
import { toast } from 'react-toastify';

const UpdateExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    // Función para cargar las experiencias desde tu backend
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
        if (!response.ok) throw new Error('Respuesta de red no ok');
        const data = await response.json();
        setExperiences(data); // Asumiendo que la respuesta es un array de experiencias
      } catch (error) {
        console.error('Error al cargar experiencias:', error);
        toast.error('Error al cargar experiencias.');
      }
    };

    fetchExperiences();
  }, []);

  const handleExperienceChange = (e) => {
    const experienceId = e.target.value;
    const experience = experiences.find(exp => exp.experience_uuid === experienceId);
    setSelectedExperience(experience);
  };

  return (
    <div>
      <h2>Actualizar Experiencia</h2>
      <select onChange={handleExperienceChange} value={selectedExperience?.experience_uuid || ''}>
        <option value="">Seleccione una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.experience_uuid} value={experience.experience_uuid}>
            {experience.experience_name}
          </option>
        ))}
      </select>
      
      {selectedExperience && (
        <ExperienceForm mode="update" initialData={selectedExperience} />
      )}
    </div>
  );
};

export default UpdateExperienceForm;
