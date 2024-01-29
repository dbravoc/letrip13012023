import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';

const IncludedNotIncluded = ({ experienceCard }) => {
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid.toString() === id);

  if (!selectedExperience) {
    return <div>Cargando experiencia...</div>; // O algún otro mensaje/elemento de carga
  }
  const features = [
    { name: 'Clase práctica', value: selectedExperience.included_practical_lessons },
    { name: 'Clase teórica', value: selectedExperience.included_theoretical_lessons },
    { name: 'Yoga', value: selectedExperience.included_yoga },
    { name: 'Entrenamiento', value: selectedExperience.included_training },
    { name: 'Video experiencia', value: selectedExperience.included_experience_video },
    { name: 'Seguro accidentes', value: selectedExperience.included_accident_insurance },
    { name: 'Arriendo equipos', value: selectedExperience.included_equipment_rental },
    { name: 'Entrada a parques y eventos', value: selectedExperience.included_entry_fees },
    { name: 'Ticket de Andarivel', value: selectedExperience.included_lift_ticket },
  ];

  const includedList = features.filter(feature => feature.value);
  const notIncludedList = features.filter(feature => !feature.value);

  return (
    <div className='px-20'>
      <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Qué incluye la experiencia?</h3>
      <h2 className="text-s tracking-tight text-gray-700 mb-4">{selectedExperience.experience_included_description}</h2>
      <div className="flex flex-col justify-between">

        <div className=" p-8 rounded-lg">
          <div className="flex items-center gap-x-4">
            <h4 className="flex-none text-lg font-semibold leading-6 text-yellow-500">Incluye</h4>
            <div className="h-px flex-auto bg- bg-yellow-500" />
          </div>
          <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-yellow-700">
            {includedList.map((feature, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-yellow-500 font-extrabold" aria-hidden="true" />
                {feature.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-lg">
          <div className="flex items-center gap-x-4">
            <h4 className="flex-none text-lg font-semibold leading-6 text-gray-900">No incluye</h4>
            <div className="h-px flex-auto bg-gray-700" />
          </div>
          <ul role="list" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-5 text-sm leading-6 text-gray-700">
            {notIncludedList.map((feature, index) => (
              <li key={index} className="flex gap-x-4">
                <CheckIcon className="h-6 w-5 flex-none text-gray-700 font-extrabold" aria-hidden="true" />
                {feature.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default IncludedNotIncluded;
