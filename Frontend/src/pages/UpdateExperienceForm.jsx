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
        if (!response.ok) {
          throw new Error('No se pudieron cargar las experiencias');
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        // Nota: No necesitamos llamar a toast.error aquí, ya que el manejo de errores se hace en ExperienceForm.
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

  const handleSubmit = async (updatedFormData) => {
    // La lógica de envío específica y las notificaciones de éxito/error se manejan en ExperienceForm.
  };

  return (
    <div>
<h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Actualizar experiencia</h3>
      <select onChange={handleExperienceChange} value={selectedExperience} >
        <option className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none" value="">Selecciona una experiencia</option>
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
