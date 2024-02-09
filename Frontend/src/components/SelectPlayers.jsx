import React, { useState } from 'react';

const SelectPlayers = ({ experienceCard }) => {
  // Estados para rastrear el número de jugadores seleccionado.
  const [selectedPlayers, setSelectedPlayers] = useState(null);

  const handlePlayerChange = (e) => {
    const numPlayers = parseInt(e.target.value);
    setSelectedPlayers(numPlayers);
  };

  return (
    <div className="mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-10">Número de personas </h3>

      {experienceCard && (
        <div className="mb-4">
          <input
            type="number"
            placeholder='¿Cuántas personas son?'
            id="players"
            name="players"
            min={experienceCard.minimum_group_size}
            max={experienceCard.max_group_size}
            onChange={handlePlayerChange}
            className="block w-1/2 font-semibold outline-none border border-gray-400 rounded-md px-4 py-2"
          />
        </div>
      )}

    <div className='text-xs text-gray-500'>
        <p>Mínimo permitido: <span className='font-semibold'>{experienceCard.minimum_group_size}</span> personas</p>
        <p>Máximo permitido: <span className='font-semibold'>{experienceCard.max_group_size}</span> personas</p>
    </div>
    </div>
  );
};

export default SelectPlayers;
