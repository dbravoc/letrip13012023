import React from 'react';
import { useParams } from 'react-router-dom';

const PriceExperience = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  return (
    <div className="flex px-0 mx-0">
      <h3 className="text-2xl font-bold mb-4">Precio de la Experiencia</h3>
      {selectedExperience ? (
        <div className=" pt-2">
          <p>US${selectedExperience.experience_price} por persona</p>
        </div>
      ) : (
        <div>Precio no disponible</div>
      )}
    </div>
  );
};

export default PriceExperience;
