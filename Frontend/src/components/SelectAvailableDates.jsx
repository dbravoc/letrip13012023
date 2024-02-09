import React, { useState } from 'react';

const SelectAvailableDates = ({ experienceCard }) => {
  // Estado para rastrear la fecha seleccionada.
  const [selectedDate, setSelectedDate] = useState(null);

  const tryParseDates = (datesString) => {
    try {
      return JSON.parse(datesString);
    } catch (error) {
      console.error('Error parsing dates:', error);
      return null;
    }
  };

  const renderDatesForExperience = (experience) => {
    const dates = tryParseDates(experience.available_dates);
    if (dates && dates.length > 0) {
      return (
        <div className="flex flex-wrap gap-2">
          {dates.map((date, index) => (
            <button
                key={index}
                className={`block w-full text-xs py-2 font-medium border-b-2 border-b-letrip text-gray-700 ${selectedDate === `${date.startDate}-${date.endDate}` ? 'bg-letrip text-black' : ''}`}
                onClick={() => setSelectedDate(`${date.startDate}-${date.endDate}`)}
            >
               <ul>
                <li>Check-in</li>
                <li>{date.startDate}</li>
               </ul>
               <ul>
                <li>Check-out</li>
                <li>{date.endDate}</li>
               </ul>
            </button>

          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-10">Selecciona una fecha disponible</h3>
      {experienceCard.length > 0 ? (
        experienceCard.map((experience, index) => (
          <div key={index} className="mb-4">
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
