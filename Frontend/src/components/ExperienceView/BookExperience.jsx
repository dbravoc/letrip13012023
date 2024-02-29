import React, { useState, useEffect } from 'react';

function AvailableExperiencesDropdown() {
  const [availableExperiences, setAvailableExperiences] = useState([]);

  useEffect(() => {
    // Reemplaza esta URL con la ruta correcta a tu endpoint de experiencias disponibles
    fetch('https://tu-backend.com/available_experiences')
      .then(response => response.json())
      .then(data => {
        setAvailableExperiences(data);
      })
      .catch(error => {
        console.error('Error al obtener las experiencias disponibles:', error);
      });
  }, []);

  return (
    <select>
      {availableExperiences.map((experience, index) => (
        <option key={index} value={experience.available_experiences_uuid}>
          {experience.available_date_start} al {experience.available_date_end}
        </option>
      ))}
    </select>
  );
}

export default AvailableExperiencesDropdown;
