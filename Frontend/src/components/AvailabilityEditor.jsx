import React, { useState } from 'react';
import AvailabilityPicker from './AvailabilityPicker'; // Ajusta la ruta de importación según sea necesario

const AvailabilityExperienceForm = () => {
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }]);

  return (
    <div>
      <h2>Gestionar Disponibilidad</h2>
      <AvailabilityPicker
        dateRanges={dateRanges}
        setDateRanges={setDateRanges}
        currentRange={currentRange}
        setCurrentRange={setCurrentRange}
      />
    </div>
  );
};

export default AvailabilityExperienceForm;
