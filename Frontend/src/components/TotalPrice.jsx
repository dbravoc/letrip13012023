import React from 'react';

// Componente TotalPrice que recibe el número de personas seleccionadas y la experiencia seleccionada
const TotalPrice = ({ selectedPlayers, selectedExperience }) => {
  // Calcula el precio total multiplicando el precio por persona por el número de personas
  const totalPrice = selectedPlayers * selectedExperience.experience_price;

  return (
    <div className="total-price-container mx-0 sm:px-6 sm:py-8 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-4">Precio Total de la Experiencia</h3>
      {selectedPlayers && selectedExperience ? (
        <p className="text-lg">
          Total: US$ <span className="font-semibold">{totalPrice.toFixed(2)}</span>
        </p>
      ) : (
        <p className="text-lg">Por favor, selecciona el número de personas.</p>
      )}
    </div>
  );
};

export default TotalPrice;
