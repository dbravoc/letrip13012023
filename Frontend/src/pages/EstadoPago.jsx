import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid';




const FormularioPago = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedExperience = experienceCard.find(e => e.experience_id === id);

  if (!selectedExperience) {
    return <div>No se encontró la experiencia</div>;
  }
  const features = [
      { name: 'Nombre Experiencia', description: selectedExperience.experience_name },
      { name: 'Ubicación', description: selectedExperience.experience_location },
      { name: 'País', description: selectedExperience.experience_country },
      { name: 'Disciplina Principal', description: selectedExperience.experience_main_discipline },
      { name: 'Monto a pagar', description: `${selectedExperience.experience_price_from} USD` },
      { name: 'Estado de reserva', description: <strong>"Estamos validando tu pago, te enviaremos un mail. Esto puede tardar máximo 1 hora"</strong>}
    ];


  return (
    <div className="flex flex-col mx-auto p-4 shadow rounded-lg items-center h-screen">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Detalles de tu reserva</h1>
      <div className='flex flex-row mt-8 justify-evenly items-start'>
        <div>
          <ul role="list" className="mt-1 grid grid-cols-1 gap-1 text-xl leading-6 text-gray-900">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-x-1">
            <CheckIcon className="h-6 w-5 flex-none text-gray-900" aria-hidden="true" />
                    <span>{feature.name}: {feature.description}</span>

                  </li>
                ))}
          </ul>
        </div>
        
        
      </div>
    </div>
  );
};

export default FormularioPago;
