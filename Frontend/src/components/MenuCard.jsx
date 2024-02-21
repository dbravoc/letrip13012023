import React from 'react';
import { Link } from 'react-router-dom';


const MenuCard = () => {
    return (
<div>
    <div className="mx-auto flex justify-center">
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-0">
            {/* Opción para Crear nueva experiencia */}
            <div className="flex flex-col justify-center mb-10 md:flex-row rounded-lg overflow-hidden px-0">
                <div className="flex max-w-[350px] flex-col justify-between leading-normal">
                    <p className="text-gray-900 pt-4 font-bold text-l">Crear nueva experiencia</p>
                    <Link 
                        to="/create"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <strong>Acceder</strong>
                    </Link>
                </div>
            </div>
            {/* Opción para Editar información general */}
            <div className="flex flex-col justify-center mb-10 md:flex-row rounded-lg overflow-hidden px-0">
                <div className="flex max-w-[350px] flex-col justify-between leading-normal">
                    <p className="text-gray-900 pt-4 font-bold text-l">Editar información general</p>
                    <Link 
                        to="/update"
                        className="mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <strong>Acceder</strong>
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