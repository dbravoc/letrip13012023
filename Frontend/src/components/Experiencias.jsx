import React from 'react';
import { Link } from 'react-router-dom';

const Experiencias = ({ experienceCard }) => { // Aceptar experienceCard como prop

  experienceCard.forEach(experience => {
    experience.tags = [
      experience.experience_main_discipline,
      experience.experience_country,
      experience.experience_type,
      experience.experience_geography
    ];
  });

  return (
    <div className="bg-black">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-6 sm:gap-0">
          {experienceCard.map(experience => ( // Utilizar experienceCard aquí
            <div key={experience.experience_id} className="flex flex-col justify-center mb-10 md:flex-row bg-black shadow-lg rounded-lg overflow-hidden">
              <div className="flex max-w-[350px] flex-col justify-between leading-normal">
                <div>{experience.experience_video}</div>
                <h3 className="text-gray-50 font-bold text-xl">{experience.experience_name}</h3>
                <div className="mt-6">
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_type}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_country}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_main_discipline}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_demand_level}</div>
                </div>
                <h3 className="text-gray-50 font-bold text-xl mt-6"><span className='text-sm'>Desde </span>{experience.experience_price_from}<span> USD /Persona</span></h3>
                <Link to={`/tarjeta/${experience.experience_id}`} className="text-gray-700 bg-gray-50 focus:outline-none focus:text-white focus:bg-gray-700 focus:ring-offset-2 rounded-lg px-4 py-2 mt-2 transition-all ease-in-out duration-100 text-center"><strong>Reservar</strong></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
