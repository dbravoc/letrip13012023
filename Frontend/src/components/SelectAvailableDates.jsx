import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Esta función se encarga de renderizar las fechas para una experiencia específica.
  const renderDatesForExperience = (experience) => {
    try {
      const dates = JSON.parse(experience.available_dates);
      if (dates.length === 0) {
        // No devuelve nada si no hay fechas disponibles.
        return null;
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
      // En caso de error al parsear, devuelve un mensaje general de error.
      return <p>Error al procesar las fechas disponibles.</p>;
    }
  };

  // Verifica si alguna experiencia tiene fechas disponibles.
  const anyDatesAvailable = experienceCard.some(experience => {
    try {
      const dates = JSON.parse(experience.available_dates);
      return dates.length > 0;
    } catch (error) {
      return false;
    }
  });

  return (
    <div className="mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold">Selecciona una fecha disponible</h3>
      {experienceCard.length > 0 ? (
        anyDatesAvailable ? (
          experienceCard.map((experience, index) => (
            <div key={index}>
              {renderDatesForExperience(experience) || null}
            </div>
          ))
        ) : (
          // Solo muestra este mensaje si ninguna experiencia tiene fechas disponibles.
          <p>No hay fechas disponibles.</p>
        )
      ) : (
        // Mensaje mostrado si no hay experiencias disponibles en absoluto.
        <p>No hay experiencias disponibles.</p>
      )}
    </div>
  );
};

export default SelectAvailableDates;
