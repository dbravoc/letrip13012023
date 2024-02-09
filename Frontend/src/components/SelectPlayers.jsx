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
      <h3 className="text-2xl font-bold">Selecciona la cantidad de personas </h3>
      <p>Mínimo permitido: {experienceCard.minimum_group_size} personas</p>
      <p>Máximo permitido: {experienceCard.max_group_size} personas</p>

      {experienceCard && (
        <div className="mb-4">
          <input
            type="number"
            id="players"
            name="players"
            min={experienceCard.minimum_group_size}
            max={experienceCard.max_group_size}
            onChange={handlePlayerChange}
            className="border border-gray-400 rounded-md px-4 py-2"
          />
          {selectedPlayers && (
            <p>Has seleccionado {selectedPlayers} personas.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectPlayers;
