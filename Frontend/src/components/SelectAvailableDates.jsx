import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Esta función itera sobre cada experiencia y muestra sus fechas disponibles
  const renderDatesForExperience = (experience) => {
    // Comprobación de seguridad para asegurarse de que existen fechas disponibles
    if (!experience || !experience.available_dates) {
      return <p>No hay fechas disponibles.</p>;
    }

    try {
      const dates = JSON.parse(experience.available_dates);
      return (
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`Desde: ${date.startDate}, Hasta: ${date.endDate}`}</li>
          ))}
        </ul>
      );
    } catch (error) {
      console.error('Error parsing dates:', error);
      return <p>Error al procesar las fechas.</p>;
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">Fechas Disponibles</h2>
      {experienceCard.length > 0 ? (
        experienceCard.map((experience, index) => (
          <div key={index}>
            <h3 className="font-medium">{experience.name || 'Experiencia'}</h3>
            {renderDatesForExperience(experience)}
          </div>
        ))
      ) : (
        <p>No hay experiencias disponibles.</p>
      )}
    </div>
  );
};

export default SelectAvailableDates;
