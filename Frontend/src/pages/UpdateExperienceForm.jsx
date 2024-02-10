import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de tener la ruta correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        toast.error('Error al cargar las experiencias.');
      }
    };

    fetchExperiences();
  }, []);

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
    // Suponiendo que tienes una URL y un método para actualizar la experiencia...
    const url = `https://letrip13012023-backend-lawitec.vercel.app/experiences/${updatedFormData.id}`; // Asegúrate de que esto coincida con la estructura de tu API
    try {
      const response = await fetch(url, {
        method: 'PUT', // o 'POST', según tu API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) throw new Error('Error en la solicitud');

      // Aquí podrías obtener más datos de la respuesta si es necesario
      toast.success('Experiencia actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar la experiencia:', error);
      toast.error('Error al actualizar la experiencia.');
    }
  };

  return (
    <div>
<h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Actualizar experiencia</h3>
      <select onChange={handleExperienceChange} value={selectedExperience} className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none">
        <option>Selecciona una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.id} value={experience.experience_name}>
            {experience.experience_name}
          </option>
        ))}
      </select>
      {initialData && <ExperienceForm mode="update" initialData={initialData} onSubmit={handleSubmit} />}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default UpdateExperienceForm;
