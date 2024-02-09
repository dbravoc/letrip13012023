import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SelectAvailableDates = () => {
  const { id: uuid } = useParams();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        // Suponiendo que tu API soporte obtener una experiencia específica por su ID/UUID
        const response = await fetch(`https://letrip13012023-backend-lawitec.vercel.app/experiences/${uuid}`);
        const data = await response.json();
        
        // Verificar si la experiencia tiene fechas disponibles
        if (data && data.available_dates) {
          setExperience(data);
        } else {
          setExperience(null); // Asegúrate de manejar la ausencia de datos adecuadamente
        }
      } catch (error) {
        console.error('Error al obtener la experiencia:', error);
        setExperience(null);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceData();
  }, [uuid]);

  if (loading) {
    return <p>Cargando fechas disponibles...</p>;
  }

  if (!experience || !experience.available_dates) {
    return <p>No hay fechas disponibles.</p>;
  }

  // Asumiendo que 'available_dates' es un array y no necesita ser parseado
  const dates = experience.available_dates;
  return (
    <div>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Selecciona una fecha disponible</h3>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{`${date.startDate} al ${date.endDate}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDates;
