import React, { useState, useEffect } from 'react';
import AvailabilityEditor from './AvailabilityEditor'; // Asegúrate de tener este componente
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAvailabilityForm = () => {
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

  const handleUpdateAvailability = async (updatedRanges) => {
    if (selectedExperience) {
      const updatedExperience = {
        ...selectedExperience,
        available_dates: updatedRanges
      };

      fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${selectedExperience.experience_uuid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedExperience),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Availability updated successfully', data);
        toast.success('Availability updated successfully');
      })
      .catch((error) => {
        console.error('Error updating availability:', error);
        toast.error('Error updating availability.');
      });
    }
  };

  const handleExperienceChange = (e) => {
    const experienceId = e.target.value;
    const experience = experiences.find(exp => exp.experience_uuid === experienceId);
    setSelectedExperience(experience);
  };

  return (
    <>
      <h3 className="mb-10 text-2xl text-center font-bold tracking-tight text-gray-900">Actualizar Disponibilidad</h3>
      <div className='flex flex-col px-auto sm:px-72 gap-y-2 mb-20'>
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
          <AvailabilityEditor
            initialRanges={selectedExperience.available_dates || []}
            onSave={handleUpdateAvailability}
          />
        )}

        <ToastContainer />
      </div>
    </>
  );
};

export default UpdateAvailabilityForm;
