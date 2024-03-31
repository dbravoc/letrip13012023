import React from 'react';
import { useParams } from 'react-router-dom';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Info = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }
  const Prices = [
    { name: 'Precio de arriendo de equipos', value: selectedExperience.equipment_rental_price},
    { name: 'Precio del video de la experiencia', value: selectedExperience.video_price}

  ]
  const features = [
    { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
    { name: 'Tipo de experiencia', description: selectedExperience.experience_type },
    { name: 'Nivel de exigencia', description: selectedExperience.technical_level },
    { name: 'Tipo de geografía', description: selectedExperience.experience_geography },
    { name: 'País de la experiencia', description: selectedExperience.experience_country },
    { name: 'Ciudad de la experiencia', description: selectedExperience.experience_location },
  ];
  const included = [
    { name: 'Clase práctica', value: selectedExperience.included_practical_lessons },
    { name: 'Clase teórica', value: selectedExperience.included_theoretical_lessons },
    { name: `Arriendo de equipo`, value: selectedExperience.included_equipment_rental},
    //{ name: 'Yoga', value: selectedExperience.included_yoga },
    { name: 'Entrenamiento', value: selectedExperience.included_training },
    { name: `Video experiencia`, value: selectedExperience.included_experience_video },
    { name: 'Seguro accidentes', value: selectedExperience.included_accident_insurance },
    { name: 'Entrada a parques y eventos', value: selectedExperience.included_entry_fees },
    { name: 'Transporte desde el aeropuerto', value: selectedExperience.transport_airport },
    { name: 'Transporte durante la experiencia', value: selectedExperience.transport_during_experience},
    { name: 'Tarifas de entrada', value: selectedExperience.included_entry_fees },
    { name: 'Instructor certificado', value: selectedExperience.certified_instructor },
    { name: 'Seguro de accidentes', value: selectedExperience.included_accident_insurance},
    { name: 'Desayuno', value: selectedExperience.meal_breakfast },
    { name: 'Almuerzo', value: selectedExperience.meal_lunch },
    { name: 'Cena', value: selectedExperience.meal_dinner },
    { name: 'Snacks', value: selectedExperience.meal_snacks },
    { name: 'Aperitivos', value: selectedExperience.meal_drinks }
  ];
  const includedList = included.filter(feature => feature.value);
  const notIncludedList = included.filter(feature => !feature.value);
  const video = [
    { name: 'Video de la experiencia incluido', value: selectedExperience.included_experience_video},
  ];
  const videoList = video.filter(included => included.value);

  // Función para dividir el texto en líneas
  const splitTextIntoLines = (text) => {
    return text.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  return (
    <>
<div className="flex flex-col justify-center items-center md:p-10 py-5 bg-white border-white border-2 rounded-2xl md:grid md:grid-cols-5 md:justify-start">
    <div className="flex md:col-span-1 md:row-span-1 py-5 justify-center md:justify-start items-center gap-x-4">
        <div className="flex flex-col min-w-0 gap-x-4 items-center">
            <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-50">
                <img src={selectedExperience.instructor_profile_img} alt="" className="w-full h-full object-cover" />
            </div>

            <div>
                <p className="text-base font-semibold leading-6 text-black text-center md:text-left">{selectedExperience.experience_instructor}</p>
                <p className="text-sm leading-6 text-black text-center md:text-left">{selectedExperience.experience_instructor_type}</p>
            </div>
        </div>
    </div>

    <div className='col-span-4 row-span-4'>
        <p className="text-sm italic py-5 leading-6 text-black">{selectedExperience.experience_instructor_message}</p>
    </div>
</div>

      



    <div className="flex col-span-2 flex-col md:p-10 py-5 bg-white border-white border-2 rounded-2xl">
            <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Características de la experiencia</h2>
            <dl className="mt-0 grid grid-cols-1 md:grid-cols-6 gap-y-2 gap-x-8">
              {features.map((feature, index) => (
                <div key={index} className="border-b border-yellow-500 pt-2">
                  <dt className=" text-xs text-gray-700 text-center">{feature.name}</dt>
                  <dd className="text-sm mt-2 font-semibold text-black text-center">{feature.description}</dd>
                </div>
              ))}
            </dl>
    </div>



    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
    <div className="flex col-span-1 flex-col md:p-10 py-5  bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Itinerario</h2>
          <div className="text-sm italic py-5 leading-6 text-black">
  {selectedExperience.itinerary.replace(/\\n/g, '\n').split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}<br />
    </React.Fragment>
  ))}
</div>    

</div>

  <div className='col-span-1'>
    <div className="flex flex-col md:p-10 py-5  bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Lo que SI incluye</h2>
           <ul role="list" className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm leading-6 text-black">
            {includedList.map((included, index) => (
              <li key={index} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {included.name}
              </li>
            ))}
          </ul>

    </div>

    <div className="flex flex-col  md:p-10 py-5  bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Lo que NO incluye</h2>
           <ul role="list" className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-sm leading-6 text-black">
            {notIncludedList.map((notincluded, index) => (
              <li key={index} className="flex gap-x-3">
                <XMarkIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {notincluded.name}
              </li>
            ))}
          </ul>

    </div>
  </div>
  </div>

  <div className="flex flex-col md:p-10 py-5 bg-white border-white border-2 rounded-2xl">
  <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Alojamiento</h2>
          <p className="text-sm italic py-5 leading-6 text-black">{selectedExperience.acommodation}</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

    <div className="flex col-span-1 flex-col md:p-10 py-5 bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Restricciones</h2>
          <ul className="mt-2 grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-1 text-sm leading-6 text-black">
            
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {selectedExperience.target_audience_restrictions}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                Edad mínima: {selectedExperience.minimum_age}
              </li>
              <li className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                Mínimo de personas: {selectedExperience.minimum_group_size}              
                </li>

          </ul>
          
    </div>

    <div className="flex col-span-1 flex-col md:p-10 py-5 bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">No olvidar</h2>
          <p className="text-sm italic py-5 leading-6 text-black">{selectedExperience.dont_forget}</p>
    </div>

    <div className="flex col-span-1 flex-col md:p-10 py-5 bg-white border-white border-2 rounded-2xl">
          <h2 className="bg-yellow-100 rounded-xl px-4 py-2 text-xl text-center font-bold tracking-tight text-gray-900 mb-4">Valor de la experiencia</h2>
          {selectedExperience ? (
        <div className="mb-4 flex justify-center">
          <p className='text-sm'> <FontAwesomeIcon className='text-green-700' icon={faMoneyBills} /> US$ <span className='text-xl font-semibold'> {selectedExperience.experience_price.toLocaleString('de-DE')} </span>por persona</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
</div>
  </>

  );
  
};

export default Info;