import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ExperienceView = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }

  const features = [
    { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
    { name: 'Tipo de experiencia', description: selectedExperience.experience_type },
    { name: 'Nivel de exigencia', description: selectedExperience.experience_demand_level },
    { name: 'Tipo de geografía', description: selectedExperience.experience_geography },
    { name: 'País de la experiencia', description: selectedExperience.experience_country },
    { name: 'Ciudad de la experiencia', description: selectedExperience.experience_location },
    { name: 'Valor de la experiencia', description: `${selectedExperience.experience_price} USD` },
  ];

  return ( //GRID: seccion fotos, seccion informacion + invitacion anfitrion, reserva
      
  <div className="flex p-4 mx-0 bg-yellow-200 border-white border-2">
          <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 sm:gap-y-2">
            {features.map((feature, index) => (
              <div key={index} className="border-t border-gray-700 pt-2">
                <dt className=" text-sm text-gray-900">{feature.name}</dt>
                <dd className="text-sm mt-2 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
      </div>  
  

  );
  
};

export default ExperienceView;