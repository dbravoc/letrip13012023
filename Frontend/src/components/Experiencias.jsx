import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import { useBranch } from '../branch/branchContext'; // Asegúrate de que la ruta sea correcta


const Experiencias = () => {
    // Accediendo a experienceCard a través del contexto
    const { experienceCard } = useBranch();

    // Filtrar las experiencias activas
    const experiencesToShow = experienceCard.filter(experience => experience.Active === true);

    experiencesToShow.forEach(experience => {
        experience.tags = [
            experience.experience_main_discipline,
            experience.experience_country,
            experience.experience_type,
            experience.experience_geography,
            experience.technical_level
        ];
    });


    return (
        <div>
            <div className="mx-10 flex justify-center">
                <div className="grid sm:grid-cols-4 grid-cols-1 sm:gap-6 gap-0">
                    {experiencesToShow.map(experience => (
                        <div key={experience.experience_uuid} className="flex flex-col justify-center mb-10 md:flex-row rounded-lg overflow-hidden px-0">
                            <div className="flex max-w-[350px] flex-col justify-between leading-normal">
                                <img src={experience.card_img_1} className="w-full h-48 object-cover"></img>
                                <p className="text-gray-900 pt-4 font-bold text-l">{experience.experience_name}</p>
                                <div className="mt-1">
                                    {/* Etiquetas de la experiencia */}
                                    <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_type}</div>
                                    <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_main_discipline}</div>
                                    <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_geography}</div>
                                    <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.experience_country}</div>
                                    <div className="inline-flex items-center rounded-md bg-gray-500 mr-2 mb-1 px-2 py-1 text-xs font-medium text-gray-50 ring-1 ring-inset ring-gray-500/10">{experience.technical_level}</div>
                                </div>
                                {/* Link a la tarjeta de la experiencia */}
                                <Link 
                                    to={`/tarjeta/${experience.experience_uuid}`}
                                    className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                                    style={{ position: 'relative', zIndex: 2 }}
                                >
                                    <strong>${experience.experience_price.toLocaleString('de-DE')}<span> USD por persona</span></strong>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experiencias;