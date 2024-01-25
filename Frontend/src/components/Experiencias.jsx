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
    <div>
      <div className="mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:gap-6 sm:gap-0">
          {experienceCard.map(experience => ( // Utilizar experienceCard aquí
            <div key={experience.experience_id} className="flex flex-col justify-center mb-10 md:flex-row rounded-lg overflow-hidden px-0">
              <div className="flex max-w-[350px] flex-col justify-between leading-normal">
                <div>{experience.experience_video}</div>
                <p className="text-gray-900 pt-4 font-bold text-l">{experience.experience_name}</p>
                <div className="mt-1">
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_type}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_country}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_main_discipline}</div>
                  <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_demand_level}</div>
                </div>
                <Link to={`/tarjeta/${experience.experience_id}`} className="mt-1 text-gray-700 bg-letrip focus:outline-none focus:text-black focus:bg-gray-50 focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"><strong>{experience.experience_price}<span> USD por persona</span></strong></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
