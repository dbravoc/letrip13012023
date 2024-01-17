
import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Tarjeta = ({ experienceCard }) => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const navigate = useNavigate();
  const selectedExperience = experienceCard.find(e => e.experience_id === id);

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
    { name: 'Precio Desde', description: `${selectedExperience.experience_price_from} USD` },
  ];

  const handlePayment = () => {
    // Redireccionar a la nueva ruta
    navigate(`/formulariopago/${selectedExperience.experience_id}`);

    // Abrir el link de pago en una nueva pestaña
    window.open('https://mpago.la/1yqEPhC', '_blank', 'noopener,noreferrer');
  }


  return ( //GRID: seccion fotos, seccion informacion + invitacion anfitrion, reserva
      
  <div className="flex flex-col items-center justify-center align-top">

    <div className="mx-0 grid sm:grid-cols-2 grid-cols-1 items-center gap-x-8 gap-y-8 sm:px-6 sm:py-8"> 

      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{selectedExperience.experience_name}</h2>
        
            
          <div className="flex justify-between py-5 items-center min-w-0 gap-x-4">
            <div className="flex items-center min-w-0 gap-x-4">
              <div className="h-24 w-24 flex-none rounded-full overflow-hidden bg-gray-50">
                {selectedExperience.experience_instructor_img}
              </div>
              
              <div>
                    <p className="text-base font-semibold leading-6 text-gray-900">{selectedExperience.experience_instructor}</p>
                    <p className="text-sm leading-6 text-gray-900">{selectedExperience.experience_instructor_type}</p>
              </div>

            </div>

            <div>
                <p className=' text-base font-semibold leading-6 text-gray-900'>{selectedExperience.experience_instructor_evaluation}</p>
            </div>
         </div>

         <div>
            <p className="text-sm py-5 leading-6 text-gray-900">{selectedExperience.experience_description_instructor_message}</p>
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


        <div className="grid grid-cols-2 grid-rows-2 gap-0 sm:gap-0 lg:gap-0 rounded-lg overflow-hidden">
          <div>{selectedExperience.experience_img_1}</div>
          <div>{selectedExperience.experience_img_2}</div>
          <div>{selectedExperience.experience_img_3}</div>
          <div>{selectedExperience.experience_img_4}</div>
        </div>
    </div>

    <div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Que incluye la experiencia?</h3>
            <p className="text-s tracking-tight text-gray-700 mb-4">{selectedExperience.experience_description_small}</p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-900">Incluye</h4>
              <div className="h-px flex-auto bg-gray-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-4 sm:gap-0"
            >
            {selectedExperience.experience_included.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-gray-900" aria-hidden="true" />
                {feature}
              </li>
            ))}

            </ul>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-gray-900">No incluye</h4>
              <div className="h-px flex-auto bg-gray-500" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-4 sm:gap-0"
            >
            {selectedExperience.experience_not_included.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-gray-900" aria-hidden="true" />
                {feature}
              </li>
            ))}

            </ul>
          </div>
          <div className="-mt-2 p-2 flex justify-center lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl py-10  text-center ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
  
              <div class="sm:col-span-3">
                  
                  <div class="mt-2">
                  <label for="fechas" class="block text-sm font-medium leading-6 text-gray-700">Próximas fechas</label>
                  <select id="fechas" name="fechas" autocomplete="fechas" class="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>01-02-24 al 07-02-24</option>
                    <option>08-02-24 al 15-02-24</option>
                    <option>16-02-24 al 23-02-24</option>
                  </select>
                  </div>
                  
                  <div class="mt-2">
                  <label for="N_Personas" class="block text-sm font-medium leading-6 text-gray-700">N° Personas</label>
                  <select id="N_Personas" name="N_Personas" autocomplete="N_Personas" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  </div>
              </div>

              <div className="mx-auto mt-4 max-w-xs px-8 justify-center">
                <p className="text-base font-semibold text-gray-700">Valor total</p>
                <p className="flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$1500</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-900">USD</span>
                </p>
                <button 
                  onClick={handlePayment}
                  className="mt-10 block w-full rounded-md bg-letrip px-3 py-2 text-center text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-700 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Pagar
                </button>
                <p className="mt-6 text-xs leading-5 text-gray-700">
                  Impuestos incluidos
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>

  </div>
  

  );
  
};

export default Tarjeta;