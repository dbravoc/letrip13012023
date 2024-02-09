import React from 'react';
import { useParams } from 'react-router-dom';

const SelectAvailableDates = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid.toString() === id);

  // Verificar si la experiencia seleccionada está cargada
  if (!selectedExperience) {
    return <div>Cargando experiencia...</div>; // Mostrar un mensaje mientras se carga
  }

  // Asumiendo que 'available_dates' es un array en tu objeto de experiencia
  // y ya está en el formato adecuado (no necesita JSON.parse)
  const { available_dates } = selectedExperience;

  // Comprobación adicional para asegurar que hay fechas disponibles
  if (!available_dates || available_dates.length === 0) {
    return <div>No hay fechas disponibles para esta experiencia.</div>;
  }

  return (
    <div>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
      <ul>
        {available_dates.map((date, index) => (
          // Asegúrate de que 'startDate' y 'endDate' son propiedades válidas de tus objetos de fecha
          <li key={index}>{`${date.startDate} al ${date.endDate}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDates;
