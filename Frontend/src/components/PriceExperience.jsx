import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';


const PriceExperience = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  return (
    <div className="mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-10">Precio de la Experiencia</h3>
      {selectedExperience ? (
        <div className="mb-4">
          <p className='text-sm'> <FontAwesomeIcon className='text-letrip' icon={faMoneyBills} /> US$ <span className='text-xl font-semibold'> {selectedExperience.experience_price} </span>por persona</p>
        </div>
      ) : (
        <div>Precio no disponible</div>
      )}
    </div>
  );
};

export default PriceExperience;
