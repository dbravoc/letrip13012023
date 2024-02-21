import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format, parseISO } from 'date-fns';

const ExperienceDateManager = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  useEffect(() => {
    // Carga inicial de experiencias
    const fetchExperiences = async () => {
      const { data, error } = await supabase
        .from('experiences')
        .select('*');
      
      if (error) {
        console.error('Error fetching experiences', error);
      } else {
        setExperiences(data);
      }
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    // Cargar las fechas disponibles cuando se selecciona una experiencia
    const selectedExperience = experiences.find(exp => exp.id === selectedExperienceId);
    if (selectedExperience && selectedExperience.available_dates) {
      const formattedDates = selectedExperience.available_dates.map(dateRange => ({
        ...dateRange,
        startDate: parseISO(dateRange.startDate),
        endDate: parseISO(dateRange.endDate),
        key: 'selection'
      }));
      setDateRanges(formattedDates);
    } else {
      setDateRanges([]);
    }
  }, [selectedExperienceId, experiences]);

  const handleExperienceChange = (e) => {
    setSelectedExperienceId(e.target.value);
  };

  const addRange = () => {
    setDateRanges([...dateRanges, currentRange]);
  };

  const removeRange = (index) => {
    const newRanges = [...dateRanges];
    newRanges.splice(index, 1);
    setDateRanges(newRanges);
  };

  const saveChanges = async () => {
    const updatedDates = dateRanges.map(range => ({
      startDate: format(range.startDate, 'yyyy-MM-dd'),
      endDate: format(range.endDate, 'yyyy-MM-dd'),
    }));

    const { data, error } = await supabase
      .from('experiences')
      .update({ available_dates: updatedDates })
      .match({ id: selectedExperienceId });

    if (error) {
      console.error('Error updating experience dates', error);
    } else {
      console.log('Dates updated successfully', data);
    }
  };

  return (
    <div>
      <select onChange={handleExperienceChange} value={selectedExperienceId || ''}>
        <option value="">Seleccione una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.id} value={experience.id}>
            {experience.name}
          </option>
        ))}
      </select>

      <DateRangePicker
        onChange={item => setCurrentRange(item.selection)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={[currentRange]}
        direction="horizontal"
      />
      <button onClick={addRange}>Agregar Fecha</button>
      {dateRanges.map((range, index) => (
        <div key={index}>
          {format(range.startDate, 'yyyy-MM-dd')} - {format(range.endDate, 'yyyy-MM-dd')}
          <button onClick={() => removeRange(index)}>Eliminar</button>
        </div>
      ))}
      <button onClick={saveChanges}>Guardar Cambios</button>
    </div>
  );
};

export default ExperienceDateManager;
