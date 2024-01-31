import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const AvailablesExperiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedExperience, setSelectedExperience] = useState(null);

    useEffect(() => {
        fetch('https://https://letrip13012023-backend-lawitec.vercel.app/')
            .then(response => response.json())
            .then(data => setExperiences(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleDateSelection = (date, experience) => {
        setSelectedDate(date);
        setSelectedExperience(experience);
    };

    const handlePurchase = () => {
        if (!selectedDate || !selectedExperience) {
            alert('Por favor, selecciona una fecha para la experiencia.');
            return;
        }
        console.log(`Comprando experiencia: ${selectedExperience.name} para la fecha: ${selectedDate}`);
        // Aquí procesarías la orden de compra
        // Por ejemplo, redirigir al usuario a una página de pago
    };

    return (
        <div className="px-20 p-8 rounded-lg">
            <h3 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">Compra tu experiencia</h3>
            <h4 className="flex-none text-lg font-semibold leading-6 text-yellow-500">Elige una fecha</h4>

            {experiences.map((experience, expIndex) => (
                <div key={expIndex} className="mb-6">
                    <h4 className="text-lg font-semibold leading-6 text-yellow-500 mb-4">{experience.name}</h4>
                    <ul role="list" className="grid grid-cols-1 sm:grid-cols-3  gap-x-20 gap-y-5 text-sm leading-6 text-gray-700">
                        {experience.available_dates && experience.available_dates.map((date, dateIndex) => (
                            <li key={dateIndex} className="flex">
                                <button
                                    onClick={() => handleDateSelection(date, experience)}
                                    className={`block w-full rounded-md px-3 py-3 text-center shadow-sm ${selectedDate === date && selectedExperience === experience ? 'bg-yellow-500 text-black' :'bg-yellow-100 text-gray-900'}`}
                                >
                                    {date}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={handlePurchase} className="block w-full rounded-md bg-letrip px-3 py-5 text-center text-xl font-semibold text-gray-900 shadow-sm hover:bg-yellow-400">
                Comprar experiencia
            </button>
        </div>
    );
};

export default AvailablesExperiences;
