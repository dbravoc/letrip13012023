import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Función para parsear el JSON de las fechas disponibles
  const parseDates = (dates) => {
    try {
      return JSON.parse(dates);
    } catch (error) {
      console.error('Error parsing dates:', error);
      return [];
    }
  };
  // Verificar que experienceCard no sea null y tenga elementos
  if (!experienceCard || experienceCard.length === 0) {
    return <div>No hay fechas disponibles.</div>;
  }
  return (
    <div>
      <h2 className="text-lg font-semibold">Fechas Disponibles</h2>
      <ul className="list-disc pl-5">
        {experienceCard.length > 0 && experienceCard.map((experience, index) => (
          <li key={index}>
            <p className="font-medium">{experience.name}</p> {/* Asumiendo que cada experiencia tiene un nombre */}
            {parseDates(experience.available_dates).map((dateRange, idx) => (
              <div key={idx} className="text-sm">
                <p>Inicio: {dateRange.startDate}</p>
                <p>Fin: {dateRange.endDate}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDates;
