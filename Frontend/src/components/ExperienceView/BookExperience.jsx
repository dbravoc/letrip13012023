import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';
import { CheckIcon } from '@heroicons/react/24/outline';

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

  useEffect(() => {
    const loadAvailableDates = async () => {
      const apiUrl = `https://letrip13012023-backend-lawitec.vercel.app/available_experiences?experience_uuid=${id}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const formattedDates = data
          .filter(item => item.experience_uuid === id) // Asegurarse de filtrar por el experience_uuid correcto
          .map((item) => ({
            id: item.experience_uuid,
            label: `${item.available_date_start} al ${item.available_date_end}`,
            value: `${item.available_date_start}_${item.available_date_end}`,
          }));
        
        setAvailableDates(formattedDates);
      } catch (error) {
        console.error("Error fetching available dates:", error);
      }
    };
  
    loadAvailableDates();
  }, [id]);// Dependencia [id] para reaccionar a cambios en el ID seleccionado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (selectedExperience) {
      setTotalPrice(players * selectedExperience.experience_price);
    }
  }, [players, selectedExperience]);

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


  const letripPrice = totalPrice * 0.1

  const tax = letripPrice* 0.19

  const totalPriceFull = totalPrice + letripPrice + tax 


  return (
    <div className="mx-0 sm:px-6 mb-10 tracking-tight text-gray-900">
      {selectedExperience ? (
        <>
          <div className='pt-10'>
          <h2 className="px-1 rounded-xl py-2 text-3xl text-left font-bold tracking-tight text-gray-900 mb-10">Reserva tu experiencia</h2>
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

            <div className='my-10'>
              <h3 className="text-2xl font-bold mb-10">Información del precio</h3>
              <div className='grid grid-cols-4 font-semibold text-sm'>
                <p><<CheckIcon className='font-semibold text-sm'></CheckIcon> >{selectedExperience.experience_price.toLocaleString('de-DE')} USD x {players} persona(s)</p>
                <p>{totalPrice.toLocaleString('de-DE')} USD</p>
              </div>
              <div className='grid grid-cols-4 font-semibold text-sm '>
                <p><CheckIcon className='font-semibold text-sm'></CheckIcon>Tarifa por servicio Le trip</p>
                <p>{letripPrice.toLocaleString('de-DE')} USD</p>
              </div>

              <div className='grid grid-cols-4 font-semibold text-sm '>
                <p><CheckIcon className='font-semibold text-sm'></CheckIcon>Impuestos</p>
                <p>{tax.toLocaleString('de-DE')} USD</p>
              </div>


                <li className="block w-1/2 font-semibold text-sm outline-none py-2 mt-10">                
                <span className="font-semibold text-xl">
                  <FontAwesomeIcon className='text-green-700 pr-4' icon={faMoneyBills} />
                  {totalPriceFull.toLocaleString('de-DE')}
                </span> USD en total
                </li>
            </div>

            {/* Aceptación de Términos y Condiciones */}
            <div className="my-10 flex">
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