import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format, parseISO } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';

const AvailabilityExperienceForm = () => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperienceId, setSelectedExperienceId] = useState('');
  const [dateRanges, setDateRanges] = useState([]);
  const [currentRange, setCurrentRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  useEffect(() => {
    // Carga inicial de experiencias
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences');
      if (!response.ok) throw new Error('Respuesta de red no ok');
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error('Error al cargar experiencias:', error);
      toast.error('Error al cargar experiencias.');
    }
  };

  useEffect(() => {
    // Cargar las fechas disponibles cuando se selecciona una experiencia
    if (!selectedExperienceId) return;
    const selectedExperience = experiences.find(exp => exp.experience_uuid === selectedExperienceId);
    if (selectedExperience && selectedExperience.available_dates) {
      const formattedDates = selectedExperience.available_dates.map(dateRange => ({
        startDate: parseISO(dateRange.startDate),
        endDate: parseISO(dateRange.endDate),
        key: 'selection',
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

    try {
      const response = await fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${selectedExperienceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ available_dates: updatedDates }),
      });
      if (!response.ok) throw new Error('Network response was not ok.');

      toast.success('Fechas actualizadas con éxito');
    } catch (error) {
      console.error('Error al actualizar las fechas:', error);
      toast.error('Error al actualizar las fechas.');
    }
  };

  return (
    <>
      <h3 className="mb-10 text-2xl text-center font-bold tracking-tight text-gray-900">Gestionar Disponibilidad</h3>
      <select onChange={handleExperienceChange} value={selectedExperienceId || ''}>
        <option value="">Seleccione una experiencia</option>
        {experiences.map((experience) => (
          <option key={experience.experience_uuid} value={experience.experience_uuid}>
            {experience.experience_name}
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
          {format(parseISO(range.startDate), 'yyyy-MM-dd')} - {format(parseISO(range.endDate), 'yyyy-MM-dd')}
          <button onClick={() => removeRange(index)}>Eliminar</button>
        </div>
      ))}
      <button onClick={saveChanges}>Guardar Cambios</button>
      <ToastContainer />
    </>
  );
};

export default AvailabilityExperienceForm;
