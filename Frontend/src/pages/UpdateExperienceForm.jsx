import React, { useState, useEffect } from 'react';
import ExperienceForm from './ExperienceForm';

function UpdateExperienceForm() {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener la lista de experiencias
    fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences')
      .then(response => response.json())
      .then(data => setExperiences(data));
  }, []);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    const experience = experiences.find(exp => exp.experience_uuid === selectedId);
    setSelectedExperience(experience);
  };

  const handleSubmit = async (updatedData) => {
    // Asegúrate de que la URL y el método sean correctos para tu API
    const url = `https://letrip13012023-backend-lawitec.vercel.app/experiences/${updatedData.experience_uuid}`;
    try {
      const response = await fetch(url, {
        method: 'PUT', // O 'PATCH' si solo actualizas parcialmente la entidad
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la experiencia');
      }

      const result = await response.json();
      console.log('Experiencia actualizada con éxito:', result);

      // Actualiza la lista de experiencias o notifica al usuario
      toast.success('Experiencia actualizada con éxito');
      // Opcional: recargar la lista de experiencias o realizar alguna otra acción
    } catch (error) {
      console.error('Error al actualizar la experiencia:', error);
      toast.error('Error al actualizar la experiencia.');
    }
  };

  return (
    <div>
      <select value={selectedExperience?.experience_uuid || ''} onChange={handleSelectChange}>
        <option value="">Seleccione una experiencia</option>
        {experiences.map(exp => (
          <option key={exp.experience_uuid} value={exp.experience_uuid}>{exp.experience_name}</option>
        ))}
      </select>
      {selectedExperience && (
        <ExperienceForm mode="update" initialData={selectedExperience} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
export default UpdateExperienceForm;
