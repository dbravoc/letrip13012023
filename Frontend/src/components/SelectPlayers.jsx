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
      <h3 className="text-2xl font-bold">¿Cuántas personas son? </h3>

      {experienceCard && (
        <div className="mb-4">
          <input
            type="number"
            placeholder='¿Cuántos?'
            id="players"
            name="players"
            min={experienceCard.minimum_group_size}
            max={experienceCard.max_group_size}
            onChange={handlePlayerChange}
            className="outline-none border border-gray-400 rounded-md px-4 py-2"
          />
          {selectedPlayers}
        </div>
      )}

    <div className='text-xs italic text-gray-500'>
        <p>Mínimo permitido: {experienceCard.minimum_group_size} personas</p>
        <p>Máximo permitido: {experienceCard.max_group_size} personas</p>
    </div>
    </div>
  );
};

export default SelectPlayers;
