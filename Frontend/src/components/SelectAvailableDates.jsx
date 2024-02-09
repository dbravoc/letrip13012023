import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';

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
        <div className="flex flex-wrap gap-x-2">
          {dates.map((date, index) => (
            <button
              key={index}
              className={`block w-full text-xl py-2 border-b-2 border-b-letrip text-black ${selectedDate === `${date.startDate}-${date.endDate}` ? 'bg-letrip' : ''}`}
              onClick={() => handleDateClick(`${date.startDate}-${date.endDate}`)}
            >
              <div className='flex justify-center gap-x-10'>
                <ul>
                  <li className='text-sm'>Check-in</li>
                  <li className='font-semibold'>{date.startDate}</li>
                </ul>
                <ul>
                  <li className=''><FontAwesomeIcon icon={faCircleRight} /></li>
                </ul>
                <ul>
                  <li className='text-sm'>Check-out</li>
                  <li className='font-semibold'>{date.endDate}</li>
                </ul>
              </div>
            </button>
          ))}
        </div>
      );
    }
    return null;
  };

  const handleDateClick = (date) => {
    setSelectedDate(prevDate => prevDate === date ? null : date);
  };

  return (
    <div className="mx-0 sm:px-6 mb-10 tracking-tight text-gray-900">
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
