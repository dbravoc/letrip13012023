import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  const renderDatesForExperience = (experience) => {
    // Verifica primero si available_dates es un string no vacío.
    if (!experience.available_dates || experience.available_dates.trim() === '') {
      return <p>No hay fechas disponibles.</p>;
    }

    try {
      const dates = JSON.parse(experience.available_dates);
      if (dates.length === 0) {
        return <p>No hay fechas disponibles.</p>;
      }
      return (
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`Desde: ${date.startDate}, Hasta: ${date.endDate}`}</li>
          ))}
        </ul>
      );
    } catch (error) {
      console.error('Error parsing dates:', error);
      return <p>Error al procesar las fechas disponibles.</p>;
    }
  };

  return (
    <div>
      <h3 className="mx-0 sm:px-6 sm:py-8 mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
      {experienceCard.length > 0 ? (
        experienceCard.map((experience, index) => (
          <div key={index}>
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
