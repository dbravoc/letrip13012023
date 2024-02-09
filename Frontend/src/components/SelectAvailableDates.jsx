import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { format, parseISO } from 'date-fns';

const SelectAvailableDates = ({ experienceCard }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (experienceCard && experienceCard.available_dates) {
      const dates = JSON.parse(experienceCard.available_dates);
      const formattedOptions = dates.map(date => ({
        value: `${date.startDate} to ${date.endDate}`,
        label: `${format(parseISO(date.startDate), 'dd-MM-yyyy')} to ${format(parseISO(date.endDate), 'dd-MM-yyyy')}`,
      }));
      setOptions(formattedOptions);
    }
  }, [experienceCard]);

  const handleChange = selectedOption => {
    setSelectedDate(selectedOption);
    // Aquí podrías hacer algo con la fecha seleccionada, como actualizar el estado de un formulario
  };

  return (
    <div>
      <Select
        value={selectedDate}
        onChange={handleChange}
        options={options}
        placeholder="Select available dates"
        isClearable
      />
    </div>
  );
};

export default SelectAvailableDates;
