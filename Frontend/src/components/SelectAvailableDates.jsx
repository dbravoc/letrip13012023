import React from 'react';
import { format } from 'date-fns';

const SelectAvailableDates = ({ experienceCard }) => {
  // Asumiendo que experienceCard es un objeto que contiene un array de available_dates
  // Y que cada elemento en available_dates es un objeto con startDate y endDate
  
  const handleChange = (e) => {
    console.log("Fecha seleccionada:", e.target.value);
    // Aquí puedes manejar la fecha seleccionada, por ejemplo, actualizar el estado o enviarla a otro componente
  };

  return (
    <div>
      <label htmlFor="availableDates">Seleccione una fecha disponible:</label>
      <select id="availableDates" onChange={handleChange}>
        {experienceCard.available_dates?.map((dateRange, index) => (
          <option key={index} value={format(new Date(dateRange.startDate), 'dd-MM-yyyy')}>
            {format(new Date(dateRange.startDate), 'dd-MM-yyyy')} - {format(new Date(dateRange.endDate), 'dd-MM-yyyy')}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAvailableDates;
