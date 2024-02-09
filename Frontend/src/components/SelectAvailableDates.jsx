import React from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Asumiendo que experienceCard es un objeto que contiene el campo available_dates
  // en formato JSON string. Si experienceCard es un array, necesitarás ajustar este código.
  
  // Parsear las fechas disponibles desde la cadena JSON
  const availableDates = experienceCard.available_dates ? JSON.parse(experienceCard.available_dates) : [];

  return (
    <div className="available-dates-container">
      <h2>Fechas Disponibles</h2>
      <ul>
        {availableDates.map((dateRange, index) => (
          <li key={index}>
            Desde {dateRange.startDate} hasta {dateRange.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDates;
