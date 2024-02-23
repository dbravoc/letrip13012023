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
  ];

  return (
    <>
  <div className="flex flex-col p-10 mx-auto bg-yellow-100 border-white border-2 rounded-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>
        
            
          <div className="flex py-5 items-center min-w-0 gap-x-4">
            <div className="flex items-center min-w-0 gap-x-4">
              <div className="h-24 w-24 flex-none rounded-full overflow-hidden bg-gray-50">
                <img src={selectedExperience.instructor_profile_img} alt="" className='w-full h-full object-cover' />
              </div>
              
              <div>
                    <p className="text-base font-semibold leading-6 text-gray-900">{selectedExperience.experience_instructor}</p>
                    <p className="text-sm leading-6 text-gray-900">{selectedExperience.experience_instructor_type}</p>
              </div>
              <p className="text-sm py-5 leading-6 text-gray-900">{selectedExperience.experience_instructor_message}</p>
            </div>

        </div>


  </div>

  <div className="flex flex-col p-10 mx-auto bg-yellow-100 border-white border-2 rounded-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Características de la experiencia</h2>
          <dl className="mt-0 grid grid-cols-1 sm:grid-cols-2 sm:gap-y-2 gap-x-6 gap-y-2">
            {features.map((feature, index) => (
              <div key={index} className="border-b border-gray-400 pt-2">
                <dt className=" text-sm text-gray-700">{feature.name}</dt>
                <dd className="text-sm mt-2 font-semibold text-black">{feature.description}</dd>
              </div>
            ))}
          </dl>
  </div>

  
  </>

  );
  
};

export default ExperienceView;