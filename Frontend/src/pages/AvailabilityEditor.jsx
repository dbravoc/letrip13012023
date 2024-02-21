import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm'; // Asegúrate de que la ruta sea correcta
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AvailabilityEditor = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    // Función para cargar las experiencias desde tu API o fuente de datos
    const fetchExperiences = async () => {
      try {
        const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
        if (!response.ok) {
          throw new Error('No se pudo cargar las experiencias');
        }
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error('Error al cargar experiencias:', error);
        toast.error('Error al cargar experiencias.');
      }
    };

    fetchExperiences();
  }, []);

  // Función para manejar el cambio de experiencia seleccionada
  const handleExperienceChange = (e) => {
    const experienceId = e.target.value;
    const experience = experiences.find(exp => exp.experience_uuid === experienceId);
    setSelectedExperience(experience);
  };

  // Función para manejar el envío del formulario de disponibilidad
  const handleSubmit = async (formData) => {
    // Aquí implementarías la llamada al API para actualizar la experiencia seleccionada con las nuevas fechas disponibles
    console.log('Datos del formulario enviados:', formData);
    // Ejemplo de llamada al API (ajusta según tu implementación)
    try {
      const response = await fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${formData.experience_uuid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ available_dates: formData.available_dates }),
      });
      if (!response.ok) {
        throw new Error('Error al actualizar la experiencia');
      }
      const result = await response.json();
      console.log('Experiencia actualizada con éxito:', result);
      toast.success('Disponibilidad actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar la experiencia:', error);
      toast.error('Error al actualizar la disponibilidad');
    }
  };

  return (
    <>
      <h3 className="mb-10 text-2xl text-center font-bold tracking-tight text-gray-900">Actualizar Disponibilidad de Experiencia</h3>
      <div className="flex flex-col px-auto sm:px-72 gap-y-2 mb-20">
        <select
          onChange={handleExperienceChange}
          value={selectedExperience ? selectedExperience.experience_uuid : ''}
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

      {selectedExperience && (
        <ExperienceForm mode="availability" initialData={selectedExperience} onSubmit={handleSubmit} />
      )}

      <ToastContainer />
    </>
  );
};

export default AvailabilityEditor;
