import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm';
import { toast, ToastContainer } from 'react-toastify';

const UpdateExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
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

  const handleSubmit = async (formData) => {
    // Aquí implementarías la llamada al API para actualizar la experiencia
    // Por ejemplo: 
    fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${formData.experience_uuid}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     })
     .then(response => response.json())
     .then(data => {
      console.log('Experiencia actualizada con éxito', data);
       toast.success('Experiencia actualizada con éxito');
     })
     .catch((error) => {
       console.error('Error al actualizar experiencia:', error);
       toast.error('Error al actualizar la experiencia.');
     });
    
    console.log('Form Data:', formData); // Placeholder para tu lógica de envío
  };

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
        <ExperienceForm mode="update" initialData={selectedExperience} onSubmit={handleSubmit} />
      )}

      <ToastContainer />
    </div>
  );
};

export default UpdateExperienceForm;
