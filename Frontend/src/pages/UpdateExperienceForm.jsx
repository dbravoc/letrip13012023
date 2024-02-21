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
     .then(response => {
      if (!response.ok) {
        throw new Error('Respuesta de red no es ok');
      }
      return response.json();
    })
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
    <>
    <div className='flex flex-col px-auto sm:px-72 gap-y-2 '>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Actualizar Experiencia</h3>
      <select onChange={handleExperienceChange} value={selectedExperience?.experience_uuid || ''}
        className="block text-sm w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
        >
        <option value="">Seleccione una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.experience_uuid} value={experience.experience_uuid}>
            {experience.experience_name}
          </option>
        ))}
      </select>
    </div>
    
    <div>
      {selectedExperience && (
        <ExperienceForm mode="update" initialData={selectedExperience} onSubmit={handleSubmit} />
      )}

      <ToastContainer />
    </div>
    </>
  );
};

export default UpdateExperienceForm;
