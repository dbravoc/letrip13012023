import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faImage, faPenToSquare, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';


const MenuCard = () => {
    return (
    <div className="mx-auto flex flex-col justify-center">
    <h3 className="flex justify-center mb-10 text-2xl font-bold tracking-tight text-gray-900">Panel de administración</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-10">
            <div className="flex max-w-md justify-start rounded-lg overflow-hidden  p-4">
                    <Link 
                        to="/request"
                        className="w-full flex items-center  hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    > 
                    <FontAwesomeIcon className="text-gray-900 p-2 mx-1 font-bold text-6xl" icon={faSquarePlus} />
                        <strong>Solicita la publicación de una nueva experiencia</strong>
                    </Link>
            </div>

            <div className="flex justify-start rounded-lg overflow-hidden p-4">
                    <Link 
                        to="/update-info"
                        className="w-full flex items-center  hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    > 
                    <FontAwesomeIcon className="text-gray-900 mx-1 p-2 font-bold text-6xl" icon={faPenToSquare} />
                        <strong>Editar información de una experiencia</strong>
                    </Link>
            </div>

            <div className="flex justify-start rounded-lg overflow-hidden  p-4">
                    <Link 
                        to="/update-image"
                        className="w-full flex items-center  hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    > 
                    <FontAwesomeIcon className="text-gray-900 mx-1 p-2 font-bold text-6xl" icon={faImage} />
                        <strong>Editar imágenes de una experiencia</strong>
                    </Link>
            </div>

            <div className="flex justify-start rounded-lg overflow-hidden  p-4">
                    <Link 
                        to="/update-availability"
                        className="w-full flex items-center  hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    > 
                    <FontAwesomeIcon className="text-gray-900 mx-1 p-2 font-bold text-6xl" icon={faCalendarCheck} />
                        <strong>Editar disponibilidad de una experiencia</strong>
                    </Link>
            </div>
        </div>
    </div>
  );
};

export default MenuCard;