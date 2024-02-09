import React from 'react';
import { format, parseISO } from 'date-fns';

const SelectAvailableDates = ({ experienceCard }) => {
  // Asumiendo que experienceCard es un objeto que contiene una propiedad available_dates,
  // que es un array de objetos con startDate y endDate en formato ISO 8601 (YYYY-MM-DD)
  const availableDates = experienceCard.available_dates.map(dates => ({
    startDate: format(parseISO(dates.startDate), 'dd-MM-yyyy'),
    endDate: format(parseISO(dates.endDate), 'dd-MM-yyyy'),
  }));

  return (
    <div>
      <label htmlFor="availableDates">Seleccione una fecha disponible:</label>
      <select id="availableDates" name="availableDates">
        {availableDates.map((date, index) => (
          <option key={index} value={`${date.startDate} to ${date.endDate}`}>
            {date.startDate} to {date.endDate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAvailableDates;
