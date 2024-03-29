import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';

const TotalPrice = ({ experienceCard }) => {
  const [selectedPlayers, setSelectedPlayers] = useState(1);
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);
  const [totalPrice, setTotalPrice] = useState(0);

  const [formData, setFormData] = useState({
    customer_name: '',
    customer_identification: '',
    customer_phone: '',
    customer_email: '',
    customer_address: '',
    approved_terms_and_conditions: false,
  });

  useEffect(() => {
    if (selectedExperience) {
      setTotalPrice(selectedPlayers * selectedExperience.experience_price);
    }
  }, [selectedPlayers, selectedExperience]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePlayerChange = (e) => {
    const numPlayers = parseInt(e.target.value, 10);
    setSelectedPlayers(numPlayers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Actualizado para que coincida con el servidor desplegado
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
          customer_phone: parseFloat(formData.customer_phone),
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();
      alert('Serás redirigido a la plataforma de pago. Activa la ventana emergente. ¡Nos pondremos en contacto contigo!');
      console.log('Datos guardados:', data);

      // Abre la nueva pestaña solo después de un éxito
      window.open('https://cobros.global66.com/DAVBRA654', '_blank');
    } catch (error) {
      alert('Error al guardar los datos: ' + error.message);
    }
  };

  return (
    <div className="mx-0 sm:px-6 mb-10 tracking-tight text-gray-900">
      <h3 className="text-2xl font-bold mb-10">Número de personas</h3>
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
              className="block w-1/2 font-semibold text-xl outline-none border-b-2 border-r-2 border-b-letrip border-r-letrip py-2"
            />
          </div>
          <div className='text-xs text-gray-500 mb-4'>
            <p>Mínimo permitido: <span className='font-semibold'>{experienceCard.minimum_group_size}</span> personas</p>
            <p>Máximo permitido: <span className='font-semibold'>{experienceCard.max_group_size}</span> personas</p>
          </div>
          <div className='pt-10'>
          <h3 className="text-2xl font-bold  mb-10">Valor total de la experiencia</h3>
            <p className="block w-1/2 font-semibold text-sm outline-none border-b-2 border-r-2 border-b-letrip border-r-letrip py-2"
>
                <span className="font-semibold text-2xl">
                <FontAwesomeIcon className='text-green-700' icon={faMoneyBills} />
                {totalPrice.toLocaleString('de-DE')}
                    </span> USD en total
            </p>
          </div>

          <div className='pt-10'>
          <h3 className="text-2xl font-bold  mb-6">Reservar experiencia</h3>
            <ul className='text-sm text-gray-500 py-4'>
              <li>1. Ingresa tus datos de contacto.</li>
              <li>2. Copia el valor total y haz clic en el botón para confirmar tu compra. </li>
              <li>3. Procede con el pago utilizando nuestras opciones seguras e ingresa el valor total de la experiencia.</li>
              <li>4. Te contactaremos para confirmar la compra y entregarte toda la información de la experiencia.</li>
            </ul>

          <form className='gap-y-2 mb-10' onSubmit={handleSubmit}>
{/* Nombre del Cliente */}
<label className='text-gray-700 text-sm' htmlFor="customer_name" >Nombres y Apellidos:</label>
<input
  id="customer_name"
  name="customer_name"
  type="text"
  value={formData.customer_name}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
/>

{/* Identificación del Cliente */}
<label className='text-gray-700 text-sm' htmlFor="customer_identification" >Identificación:</label>
<input
  id="customer_identification"
  name="customer_identification"
  type="text"
  value={formData.customer_identification}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
/>

{/* Teléfono del Cliente */}
<label className='text-gray-700 text-sm' htmlFor="customer_phone" >Teléfono:</label>
<input
  id="customer_phone"
  name="customer_phone"
  type="tel"
  value={formData.customer_phone}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
/>

{/* Correo Electrónico del Cliente */}
<label className='text-gray-700 text-sm' htmlFor="customer_email" >Correo Electrónico:</label>
<input
  id="customer_email"
  name="customer_email"
  type="email"
  value={formData.customer_email}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
/>

{/* Dirección del Cliente */}
<label className='text-gray-700 text-sm' htmlFor="customer_address" >Dirección completa, incluyendo Ciudad y País:</label>
<input
  id="customer_address"
  name="customer_address"
  type="text"
  value={formData.customer_address}
  onChange={handleChange}
  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
/>

{/* Aceptación de Términos y Condiciones */}
<div className="mt-4 flex ">
  <input
    id="approved_terms_and_conditions"
    name="approved_terms_and_conditions"
    type="checkbox"
    checked={formData.approved_terms_and_conditions}
    onChange={handleChange}
  />
  <label htmlFor="approved_terms_and_conditions" className="pl-2 text-sm text-gray-700 mb-10">
    Acepto los <a className='font-semibold'>términos y condiciones</a>
  </label>
</div>
          

<button type="submit"  className="text-lg hover:bg-black hover:text-letrip bg-letrip text-black py-4 rounded-md text-center w-full block">
<span className="font-semibold text-2xl">
 Reservar experiencia </span>
</button>
</form>
          </div>
        </>
      )}
      {!selectedExperience && <div>Precio no disponible</div>}
    </div>
  );
};

export default TotalPrice;
