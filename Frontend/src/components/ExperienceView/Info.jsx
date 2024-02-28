import React from 'react';
import { useParams } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CheckIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
  const included = [
    { name: 'Clase práctica', value: selectedExperience.included_practical_lessons },
    { name: 'Clase teórica', value: selectedExperience.included_theoretical_lessons },
    { name: 'Arriendo equipo', value: selectedExperience.included_equipment_rental},
    { name: 'Yoga', value: selectedExperience.included_yoga },
    { name: 'Entrenamiento', value: selectedExperience.included_training },
    { name: 'Video experiencia', value: selectedExperience.included_experience_video },
    { name: 'Seguro accidentes', value: selectedExperience.included_accident_insurance },
    { name: 'Entrada a parques y eventos', value: selectedExperience.included_entry_fees },
    { name: 'Ticket de Andarivel', value: selectedExperience.included_lift_ticket },
  ];
  const includedList = included.filter(feature => feature.value);
  const notIncludedList = included.filter(feature => !feature.value);

  const accommodation = [
    { name: 'Desayuno incluido', value: selectedExperience.meal_breakfast },
    { name: 'Almuerzo incluido', value: selectedExperience.meal_lunch },
    { name: 'Cena incluida', value: selectedExperience.meal_dinner },
    { name: 'Aperitivos y bebidas incluidos', value: selectedExperience.meal_snacks_and_drinks },
  ];
  const accommodationList = accommodation.filter(meal => meal.value);

  const transport = [
    { name: 'Transporte desde el aeropuerto incluido', value: selectedExperience.transport_airport },
    { name: 'Transporte durante la experiencia incluido', value: selectedExperience.transport_during_experience},
    { name: 'Tarifas de entrada incluidas', value: selectedExperience.included_entry_fees },
    { name: 'Ticket de andarivel incluido', value: selectedExperience.included_lift_ticket },
  ];

  const transportList = transport.filter(included => included.value);

  const insurance = [
    { name: 'Instructor certificado', value: selectedExperience.certified_instructor },
    { name: 'Seguro de accidentes incluido', value: selectedExperience.included_accident_insurance},
  ];
  const insuranceList = insurance.filter(included => included.value);

  const video = [
    { name: 'Video de la experiencia incluido', value: selectedExperience.included_experience_video},
  ];
  const videoList = video.filter(included => included.value);

  return (
    <>
<div className="grid grid-cols-4 p-10 mx-auto bg-white border-white border-2 rounded-2xl">
        
        <div className="flex col-span-1 py-5 items-center gap-x-4">
          <div className="flex flex-col items-center min-w-0 gap-x-4">
            <div className="h-24 w-24 flex-none rounded-full overflow-hidden bg-gray-50">
              <img src={selectedExperience.instructor_profile_img} alt="" className='w-full h-full object-cover' />
            </div>
            
            <div>
                  <p className="text-base text-center font-semibold leading-6 text-gray-900">{selectedExperience.experience_instructor}</p>
                  <p className="text-sm text-center leading-6 text-gray-900">{selectedExperience.experience_instructor_type}</p>
            </div>
          </div>
        </div>
        
        <div className='col-span-3'>
          <p className=" text-sm italic py-5 leading-6 text-gray-900">{selectedExperience.experience_instructor_message}</p>
        </div>

</div>

  <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>


    <div className="flex flex-col col-span-1 p-10 mx-auto bg-white border-white border-2 rounded-2xl">
            <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Características de la experiencia</h2>
            <dl className="mt-0 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-gray-400 pt-2">
                  <dt className=" text-xs text-gray-700">{feature.name}</dt>
                  <dd className="text-sm mt-2 font-semibold text-black">{feature.description}</dd>
                </div>
              ))}
            </dl>
    </div>

    <div className="flex flex-col col-span-1 p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">¿Qué incluye la experiencia?</h2>
          <p className="text-sm italic py-5 leading-6 text-gray-900">{selectedExperience.experience_included_description}</p>
    </div>

    <div className="flex flex-col col-span-1 p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Lo que SI incluye</h2>
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {includedList.map((included, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {included.name}
              </li>
            ))}
          </ul>

    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Lo que NO incluye</h2>
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {notIncludedList.map((notincluded, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {notincluded.name}
              </li>
            ))}
          </ul>

    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Restricciones</h2>
          <p className="text-sm italic py-1 leading-6 text-gray-900">{selectedExperience.target_audience_restrictions}</p>
          <p className="text-sm italic py-1 leading-6 text-gray-900"><span>Edad mínima: </span>{selectedExperience.minimum_age}</p>
          <p className="text-sm italic py-1 leading-6 text-gray-900"><span>Mínimo de personas: </span>{selectedExperience.minimum_group_size}</p>
    
    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Equipamiento</h2>
          <p className="text-sm italic py-1 leading-6 text-gray-900">{selectedExperience.equipment_required}</p>
    
    </div>


    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Alojamiento</h2>
          {selectedExperience.experience_accommodation}
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {accommodationList.map((accommodation, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {accommodation.name}
              </li>
            ))}
          </ul>

    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Video</h2>
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {videoList.map((video, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {video.name}
              </li>
            ))}
          </ul>
    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Transporte</h2>
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {transportList.map((transport, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {transport.name}
              </li>
            ))}
          </ul>

    </div>

    <div className="flex flex-col col-span-1  p-10 mx-auto bg-white border-white border-2 rounded-2xl">
          <h2 className="text-xl text-left font-bold tracking-tight text-gray-900 mb-4">Seguridad</h2>
           <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-black">
            {insuranceList.map((insurance, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {insurance.name}
              </li>
            ))}
          </ul>
    </div>



  </div>
  </>

  );
  
};

export default ExperienceView;