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
      <h3 className="text-2xl font-bold">Selecciona el número de jugadores</h3>
      {experienceCard.length > 0 ? (
        <div className="mb-4">
          <label htmlFor="players" className="block mb-2">Número de jugadores:</label>
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
            <p className="mt-2">Has seleccionado {selectedPlayers} jugadores.</p>
          )}
        </div>
      ) : (
        <p>No hay experiencias disponibles.</p>
      )}
    </div>
  );
};

export default SelectPlayers;
