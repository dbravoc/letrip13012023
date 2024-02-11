import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ExperienceForm from './ExperienceForm'; // Asume que ExperienceForm está en el mismo directorio

const UpdateExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
      if (!response.ok) throw new Error('Failed to fetch experiences');
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      toast.error('Error al cargar experiencias');
      console.error('Error fetching experiences:', error);
    }
  };

  const handleExperienceChange = (e) => {
    const selectedId = e.target.value;
    const selected = experiences.find(exp => exp.id.toString() === selectedId);
    setSelectedExperience(selected);
  };

  return (
    <div>
      <h2>Actualizar Experiencia</h2>
      <select onChange={handleExperienceChange} value={selectedExperience?.id || ''}>
        <option value="">Seleccione una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.id} value={experience.id}>{experience.experience_name}</option>
        ))}
      </select>

      {selectedExperience && (
        <ExperienceForm
          mode="update"
          initialData={{ ...selectedExperience, experience_name: undefined }}
          onSubmit={(updatedData) => console.log('Submit updated data:', updatedData)}
        />
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default UpdateExperienceForm;
