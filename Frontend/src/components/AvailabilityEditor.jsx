import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

// Función para formatear rangos de fecha para el estado inicial
const formatInitialRanges = (initialRanges) => {
  return initialRanges.map((range) => ({
    ...range,
    startDate: new Date(range.startDate),
    endDate: new Date(range.endDate),
    key: 'selection',
  }));
};

const AvailabilityEditor = ({ initialRanges, onSave }) => {
  const [ranges, setRanges] = useState(formatInitialRanges(initialRanges || []));

  const handleSelectRanges = (ranges) => {
    // La librería devuelve un objeto con una propiedad por cada rango. Aquí tomamos solo el valor de 'selection'.
    setRanges([ranges.selection]);
  };

  const addNewRange = () => {
    setRanges([
      ...ranges,
      { startDate: new Date(), endDate: new Date(), key: `selection-${ranges.length}` },
    ]);
  };

  const removeRange = (indexToRemove) => {
    setRanges(ranges.filter((_, index) => index !== indexToRemove));
  };

  const saveRanges = () => {
    // Aquí podrías formatear las fechas como desees antes de enviarlas
    const formattedRanges = ranges.map((range) => ({
      startDate: format(range.startDate, 'yyyy-MM-dd'),
      endDate: format(range.endDate, 'yyyy-MM-dd'),
    }));
    onSave(formattedRanges);
  };

  return (
    <div>
      {ranges.map((range, index) => (
        <div key={index}>
          <DateRangePicker
            ranges={[range]}
            onChange={handleSelectRanges}
            moveRangeOnFirstSelection={false}
            rangeColors={['#3d91ff']}
          />
          <button onClick={() => removeRange(index)}>Remove This Range</button>
        </div>
      ))}
      <button onClick={addNewRange}>Add New Range</button>
      <button onClick={saveRanges}>Save Changes</button>
    </div>
  );
};

export default AvailabilityEditor;
