import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';

const BookExperience = ({ experienceCard }) => {
  const [players, setPlayers] = useState(1);
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [availableDates, setAvailableDates] = useState([]);

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_identification: '',
    customer_phone: '',
    customer_email: '',
    customer_address: '',
    approved_terms_and_conditions: false,
    experience_package: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlayerChange = (e) => {
    const numPlayers = parseInt(e.target.value, 10);
    setPlayers(numPlayers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://letrip13012023-backend-lawitec.vercel.app/sold_experiences';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          experience_uuid: id,
          number_of_players: players,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      alert('Serás redirigido a la plataforma de pago. Activa la ventana emergente. ¡Nos pondremos en contacto contigo!');
      console.log('Datos guardados:', data);

      window.open('https://cobros.global66.com/DAVBRA654', '_blank');
    } catch (error) {
      alert('Error al guardar los datos: ' + error.message);
    }
  };

  return (
    <div className="mx-0 sm:px-6 mb-10 tracking-tight text-gray-900">
      {selectedExperience ? (
        <>
          <div className='pt-10'>
          <h3 className="text-2xl font-bold mb-6">Reservar experiencia</h3>
          <form onSubmit={handleSubmit}>
            {/* Nombre del Cliente */}
            <label className='text-gray-700 text-sm' htmlFor="customer_name">Nombres y Apellidos:</label>
            <input
              id="customer_name"
              name="customer_name"
              type="text"
              value={formData.customer_name}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

            {/* Identificación del Cliente */}
            <label className='text-gray-700 text-sm' htmlFor="customer_identification">Identificación:</label>
            <input
              id="customer_identification"
              name="customer_identification"
              type="text"
              value={formData.customer_identification}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

            {/* Teléfono del Cliente */}
            <label className='text-gray-700 text-sm' htmlFor="customer_phone">Teléfono:</label>
            <input
              id="customer_phone"
              name="customer_phone"
              type="tel"
              value={formData.customer_phone}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

            {/* Correo Electrónico del Cliente */}
            <label className='text-gray-700 text-sm' htmlFor="customer_email">Correo Electrónico:</label>
            <input
              id="customer_email"
              name="customer_email"
              type="email"
              value={formData.customer_email}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

            {/* Dirección del Cliente */}
            <label className='text-gray-700 text-sm' htmlFor="customer_address">Dirección completa, incluyendo Ciudad y País:</label>
            <input
              id="customer_address"
              name="customer_address"
              type="text"
              value={formData.customer_address}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

<label className='text-gray-700 text-sm' htmlFor="experience_package">Elige la fecha de tu experiencia</label>
            <select
              id="experience_package"
              name="experience_package"
              value={formData.experience_package}
              onChange={handleChange}
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            >
              <option value="">Selecciona una fecha</option>
              {availableDates.map((dateOption) => (
                <option key={dateOption.id} value={dateOption.value}>
                  {dateOption.label}
                </option>
              ))}
            </select>

            {/* Corrección en el campo del número de personas */}
            <label className='text-gray-700 text-sm' htmlFor="players">Número de personas</label>
            <input
              id="players"
              name="players"
              type="number"
              min={selectedExperience.minimum_group_size} // Asegurar que se usa selectedExperience
              max={selectedExperience.max_group_size} // Asegurar que se usa selectedExperience
              value={players} // Corregido para usar el estado `players`
              onChange={handlePlayerChange} // Usando handlePlayerChange para manejar este input específicamente
              className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
            />

<div className='pt-10'>
              <h3 className="text-2xl font-bold mb-10">Valor total de la experiencia</h3>
              <p className="block w-1/2 font-semibold text-sm outline-none border-b-2 border-r-2 border-b-letrip border-r-letrip py-2">
                <span className="font-semibold text-xl">
                  <FontAwesomeIcon className='text-green-700' icon={faMoneyBills} />
                  {totalPrice.toLocaleString('de-DE')}
                </span> USD en total
              </p>
            </div>

            {/* Aceptación de Términos y Condiciones */}
            <div className="mt-4 flex">
              <input
                id="approved_terms_and_conditions"
                name="approved_terms_and_conditions"
                type="checkbox"
                checked={formData.approved_terms_and_conditions}
                onChange={handleChange}
              />
              <label htmlFor="approved_terms_and_conditions" className="pl-2 text-sm text-gray-700">
                Acepto los <a className='font-semibold'>términos y condiciones</a>
              </label>
            </div>

            <button type="submit" className="text-lg hover:bg-black hover:text-letrip bg-letrip text-black py-4 rounded-md text-center w-full block">
              <span className="font-semibold text-2xl">
                Reservar experiencia
              </span>
            </button>
          </form>
          </div>
        </>
      ) : (
        <div>Precio no disponible</div>
      )}
    </div>
  );
};

export default BookExperience;