import React from 'react';
import { useParams } from 'react-router-dom';

const SelectAvailableDates = ({ experienceCard }) => {
  const { id } = useParams();
  // Asegúrate de que experienceCard no es undefined
  const selectedExperience = experienceCard?.find(e => e.experience_uuid.toString() === id);

  // Comprobación para esperar la carga de experienceCard o si no se encuentra la experiencia
  if (!experienceCard || experienceCard.length === 0 || !selectedExperience) {
    return <div>Cargando experiencia...</div>; // o "Experiencia no encontrada" si experienceCard ya está cargado pero no selectedExperience
  }

  const { available_dates } = selectedExperience;

  if (!available_dates || available_dates.length === 0) {
    return <div>No hay fechas disponibles para esta experiencia.</div>;
  }

  return (
    <div>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
      <ul>
        {available_dates.map((date, index) => (
          <li key={index}>{`${date.startDate} al ${date.endDate}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDates;
