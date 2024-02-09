import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SelectAvailableDates = () => {
  const { id: uuid } = useParams(); // Obtiene el UUID desde el URL
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Aquí deberías obtener los datos de la experiencia por UUID.
    // Esto podría ser desde un estado global o realizando una solicitud a tu servidor/API.
    // Este es un ejemplo de cómo podrías realizar una solicitud al servidor.
    fetch('https://letrip13012023-backend-lawitec.vercel.app/experiences') // Asegúrate de usar la URL correcta de tu servidor
      .then(response => response.json())
      .then(data => {
        setExperience(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener la experiencia:', error);
        setLoading(false);
      });
  }, [uuid]);

  if (loading) {
    return <p>Cargando fechas disponibles...</p>;
  }

  if (!experience || !experience.available_dates) {
    return <p>No hay fechas disponibles.</p>;
  }

  const dates = JSON.parse(experience.available_dates);
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
