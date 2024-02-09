import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Función para intentar parsear las fechas disponibles de una experiencia.
  // Devuelve null si el parseo falla, evitando mostrar un mensaje de error en la UI.
  const tryParseDates = (datesString) => {
    try {
      return JSON.parse(datesString);
    } catch (error) {
      console.error('Error parsing dates:', error);
      // Devuelve null para indicar fallo en el parseo.
      return null;
    }
  };

  // Función para renderizar las fechas para una experiencia específica.
  const renderDatesForExperience = (experience) => {
    const dates = tryParseDates(experience.available_dates);
    if (dates && dates.length > 0) {
      return (
        <ul>
          {dates.map((date, index) => (
            <li key={index}>{`Desde: ${date.startDate}, Hasta: ${date.endDate}`}</li>
          ))}
        </ul>
      );
    }
    // No devuelve nada si el parseo falla o si no hay fechas disponibles.
    return null;
  };

  // Verifica si al menos una experiencia tiene fechas válidas para mostrar.
  const anyValidDates = experienceCard.some(experience => {
    const dates = tryParseDates(experience.available_dates);
    return dates && dates.length > 0;
  });

  return (
    <div className="mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold">Selecciona una fecha disponible</h3>
      {experienceCard.length > 0 ? (
        anyValidDates ? (
          experienceCard.map((experience, index) => (
            <div key={index}>
              {renderDatesForExperience(experience)}
            </div>
          ))
        ) : (
          // Solo muestra este mensaje si ninguna experiencia tiene fechas válidas después del intento de parseo.
          <p>Error al procesar las fechas disponibles.</p>
        )
      ) : (
        // Mensaje mostrado si no hay experiencias disponibles en absoluto.
        <p>No hay experiencias disponibles.</p>
      )}
    </div>
  );
};

export default SelectAvailableDates;
