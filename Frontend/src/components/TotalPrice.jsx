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
      <h3 className="text-2xl font-bold mb-4">Número de personas</h3>
      {selectedExperience && (
        <>
          <div className="mb-4">
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
          <h3 className="text-2xl pt-25 font-bold mb-4">Valor total de la experiencia</h3>
            <p className='text-sm text-black font-semibold'>Haz clic para confirmar tu compra y proceder con el pago a través de nuestras opciones de pago seguras.</p>
            <button className="text-lg bg-letrip text-black py-4 rounded-md text-center w-full block">
                <span className="font-semibold text-2xl">
                    US${totalPrice} </span>
                en total
            </button>
          </div>
        </>
      )}
      {!selectedExperience && <div>Precio no disponible</div>}
    </div>
  );
};

export default TotalPrice;
