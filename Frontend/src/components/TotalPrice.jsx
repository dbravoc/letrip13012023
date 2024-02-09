import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TotalPrice = ({ experienceCard }) => {
  const [selectedPlayers, setSelectedPlayers] = useState(1); // Inicia con 1 por defecto o mínimo permitido
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedExperience) {
      // Calcula el precio total cuando cambia el número de personas o la experiencia seleccionada
      setTotalPrice(selectedPlayers * selectedExperience.experience_price);
    }
  }, [selectedPlayers, selectedExperience]);

  const handlePlayerChange = (e) => {
    const numPlayers = parseInt(e.target.value, 10);
    setSelectedPlayers(numPlayers);
  };

  return (
    <div className="mx-0 sm:px-6 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-4">Calculadora de Precio Total</h3>
      {selectedExperience && (
        <>
          <div className="mb-4">
            <label htmlFor="players" className="block mb-2 text-sm font-bold text-gray-700">
              Número de personas:
            </label>
            <input
              type="number"
              placeholder="¿Cuántos?"
              id="players"
              name="players"
              min={experienceCard.minimum_group_size}
              max={experienceCard.max_group_size}
              value={selectedPlayers}
              onChange={handlePlayerChange}
              className="block w-auto font-semibold text-xl outline-none border-b-2 border-r-2 border-b-letrip border-r-letrip py-2"
            />
          </div>
          <div className='text-xs text-gray-500 mb-4'>
            <p>Mínimo permitido: <span className='font-semibold'>{experienceCard.minimum_group_size}</span> personas</p>
            <p>Máximo permitido: <span className='font-semibold'>{experienceCard.max_group_size}</span> personas</p>
          </div>
          <div>
            <p className="text-lg">
              Precio total: <span className="font-semibold">${totalPrice}</span> por {selectedPlayers} persona(s)
            </p>
          </div>
        </>
      )}
      {!selectedExperience && <div>Precio no disponible</div>}
    </div>
  );
};

export default TotalPrice;
