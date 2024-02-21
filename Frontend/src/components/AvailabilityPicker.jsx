import React from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';

const AvailabilityPicker = ({ dateRanges, setDateRanges, currentRange, setCurrentRange }) => {
  const addRange = () => {
    if (currentRange[0].startDate && currentRange[0].endDate &&
        !isNaN(currentRange[0].startDate.getTime()) && !isNaN(currentRange[0].endDate.getTime())) {
      const updatedRange = {
        startDate: format(currentRange[0].startDate, 'dd-MM-yyyy'),
        endDate: format(currentRange[0].endDate, 'dd-MM-yyyy'),
      };
      setDateRanges([...dateRanges, updatedRange]);
      // Opcionalmente, resetear currentRange aquí si es necesario
    } else {
      console.log('Las fechas seleccionadas no son válidas.');
    }
  };

  const removeRange = (index) => {
    const newRanges = [...dateRanges];
    newRanges.splice(index, 1);
    setDateRanges(newRanges);
  };

  return (
    <>
      <DateRangePicker
        onChange={item => {
          const newRange = {
            startDate: item.selection.startDate,
            endDate: item.selection.endDate,
            key: 'selection',
          };
          setCurrentRange([newRange]);
        }}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={currentRange}
        direction="horizontal"
      />
      <button onClick={addRange}>Agregar disponibilidad</button>
      {dateRanges.map((range, index) => (
        <div key={index}>
          {range.startDate} - {range.endDate}
          <button onClick={() => removeRange(index)}>Eliminar</button>
        </div>
      ))}
    </>
  );
};

export default AvailabilityPicker;
