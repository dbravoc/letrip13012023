import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faImage, faPenToSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';


const MenuCard = () => {
    return (
<div>
    <div className="mx-auto flex flex-col justify-center">
    <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Panel de administración</h3>
        <div className="grid grid-cols-1 gap-4">
            <div className="flex w-3/4 justify-start align-middle mb-10 rounded-lg overflow-hidden px-0">
                    <Link 
                        to="/create"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    > 
                    <FontAwesomeIcon className="text-gray-900 pt-4 font-bold text-5xl" icon={faSquarePlus} />
                        <strong>Crear una nueva experiencia</strong>
                    </Link>
            </div>

            {/* Opción para Editar información general */}
            <div className="flex justify-center mb-10 rounded-lg overflow-hidden px-0">
                <div className="flex max-w-[350px] justify-between leading-normal">
                    <Link 
                        to="/update-info"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                    <FontAwesomeIcon className="text-gray-900 pt-4 font-bold text-5xl" icon={faPenToSquare} />

                        <strong>Editar información de una experiencia</strong>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mb-10 rounded-lg overflow-hidden px-0">
                <div className="flex max-w-[350px] justify-between leading-normal">
                    <Link 
                        to="/update-info"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                    <FontAwesomeIcon className="text-gray-900 pt-4 font-bold text-5xl" icon={faImage} />

                        <strong>Editar imágenes de una experiencia</strong>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center mb-10 rounded-lg overflow-hidden px-0">
                <div className="flex max-w-[350px] justify-between leading-normal">
                    <Link 
                        to="/update-info"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                    <FontAwesomeIcon className="text-gray-900 pt-4 font-bold text-5xl" icon={faCalendarCheck} />

                        <strong>Editar disponibilidad de una experiencia</strong>
                    </Link>
                </div>
            </div>
            
            {/* Más opciones siguiendo el mismo patrón */}
            {/* ... */}
        </div>
    </div>
</div>
  );
};

export default MenuCard;