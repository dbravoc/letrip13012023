import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de tener la ruta correcta

const UpdateExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [initialData, setInitialData] = useState(null);

  // Cargar experiencias disponibles al montar el componente
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  // Cargar los datos de la experiencia seleccionada
  useEffect(() => {
    if (selectedExperience) {
      const experience = experiences.find(exp => exp.experience_name === selectedExperience);
      setInitialData(experience);
    }
  }, [selectedExperience, experiences]);

  const handleExperienceChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  const handleSubmit = (updatedFormData) => {
    console.log('Datos actualizados:', updatedFormData);
    // Aquí puedes implementar la lógica para enviar los datos actualizados al servidor
  };

  return (
    <div>
      <h2>Editar Experiencia</h2>
      <select onChange={handleExperienceChange} value={selectedExperience} className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none">
        <option>Selecciona una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.id} value={experience.experience_name}>
            {experience.experience_name}
          </option>
        ))}
      </select>
      {initialData && <ExperienceForm mode="update" initialData={initialData} onSubmit={handleSubmit} />}
    </div>
  );
};

export default UpdateExperienceForm;
