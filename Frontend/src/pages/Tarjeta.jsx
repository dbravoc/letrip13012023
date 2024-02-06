import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Tarjeta = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }

  const features = [
    { name: 'Tipo', description: selectedExperience.experience_type },
    { name: 'Ubicación', description: selectedExperience.experience_location },
    { name: 'País', description: selectedExperience.experience_country },
    { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
    { name: 'Geografía', description: selectedExperience.experience_geography },
    { name: 'Nivel de exigencia', description: selectedExperience.experience_demand_level },
    { name: 'Precio Desde', description: `${selectedExperience.experience_price} USD` },
  ];



  return ( //GRID: seccion fotos, seccion informacion + invitacion anfitrion, reserva
      
  <div className="flex px-0 mx-0">
   
    <div className="mx-0 flex items-center gap-x-8 gap-y-8 sm:px-6 sm:py-8"> 

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>
        
            
          <div className="flex justify-between py-5 items-center min-w-0 gap-x-4">
            <div className="flex items-center min-w-0 gap-x-4">
              <div className="h-24 w-24 flex-none rounded-full overflow-hidden bg-gray-50">
                <img src={selectedExperience.instructor_profile_img} alt="" className='w-full h-full object-cover' />
              </div>
              
              <div>
                    <p className="text-base font-semibold leading-6 text-gray-900">{selectedExperience.experience_instructor}</p>
                    <p className="text-sm leading-6 text-gray-900">{selectedExperience.experience_instructor_type}</p>
              </div>

            </div>

            <div>
                <p className=' text-xl font-semibold leading-6 text-gray-900'>{selectedExperience.experience_instructor_evaluation} <FontAwesomeIcon icon={faHeart} /></p>
            </div>
         </div>

         <div>
            <p className="text-sm py-5 leading-6 text-gray-900">{selectedExperience.experience_instructor_message}</p>
        </div>

        <div>
          <dl className="mt-0 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 sm:gap-y-2">
            {features.map((feature, index) => (
              <div key={index} className="border-t border-gray-700 pt-2">
                <dt className=" text-sm text-gray-900">{feature.name}</dt>
                <dd className="text-sm mt-2 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    </div>
  

  </div>
  

  );
  
};

export default Tarjeta;