import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Función para renderizar las fechas de una experiencia específica
  const renderDatesForExperience = (experience) => {
      const dates = JSON.parse(experience.available_dates);
      return (
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`Desde: ${date.startDate}, Hasta: ${date.endDate}`}</li>
          ))}
        </ul>
      );
    
  };

  return (
    <div>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
      {experienceCard.length > 0 ? (
        experienceCard.map((experience, index) => (
          <div key={index}>
            {renderDatesForExperience(experience)}
          </div>
        ))
      ) : (
        // Si no hay experiencias, muestra un mensaje general una sola vez.
        <p>No hay experiencias disponibles.</p>
      )}
    </div>
  );
};

export default SelectAvailableDates;
