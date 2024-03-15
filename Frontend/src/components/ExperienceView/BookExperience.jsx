import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const BookExperience = ({ experienceCard }) => {
  const [players, setPlayers] = useState(1);
  const { id } = useParams();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);
  const [totalPrice, setTotalPrice] = useState(0);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);


  const [formData, setFormData] = useState({
    customer_name: '',
    customer_identification: '',
    customer_phone: '',
    customer_email: '',
    customer_address: '',
    approved_terms_and_conditions: false,
    experience_package: '',
    available_date_start: '', 
    available_date_end: '',
    experience_price:'',
    letrip_price:'',
    customer_tax:'',
    total_price:''
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
            value: `${item.available_date_start} al ${item.available_date_end}`,
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
    if (name === "experience_package") {
      const [startDate, endDate] = value.split(" al ");
      const item = availableDates.find(d => d.value === value);
      setSelectedItem({
        available_date_start: startDate,
        available_date_end: endDate,
        ...item,
      });
    }
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

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let discountValue;
  
    if (selectedExperience) {
      if (players < 1) {
        // Si el número de jugadores es menor que 1, el descuento es 0
        discountValue = 0;
      } else if (players > 10) {
        // Si el número de jugadores es mayor que 10, se usa el descuento para 10 jugadores
        discountValue = selectedExperience[`discount_10`];
      } else {
        // Construir el nombre del campo del descuento basado en el número de players dentro del rango 1-10
        const discountFieldName = `discount_${players}`;
        // Acceder dinámicamente al campo del descuento en el objeto selectedExperience
        discountValue = selectedExperience[discountFieldName];
      }
    }
  
    // Aquí puedes hacer lo que necesites con discountValue, por ejemplo, actualizar un estado
    console.log(discountValue); // Mostrar el valor del descuento para verificar
  
    // Supongamos que quieres actualizar el estado con este nuevo valor de descuento
   setDiscount(discountValue); // Asegúrate de tener un estado `discount` definido para esto
  
  }, [players, selectedExperience]); // Dependencias [players, selectedExperience] para reaccionar a cambios
  
  const letripPrice = parseFloat((totalPrice * 0.05).toFixed(2));
  const tax = parseFloat((letripPrice * 0.19).toFixed(2));
  const discountAmount = parseFloat((discount * totalPrice/100).toFixed(2));
  const totalPriceFull = parseFloat((totalPrice + letripPrice + tax - discountAmount).toFixed(2));

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar si se ha seleccionado un item (una fecha de experiencia)
    if (!selectedItem) {
      alert('Por favor, selecciona una fecha para tu experiencia.');

      return;
    }
    const apiUrl = 'https://letrip13012023-backend-lawitec.vercel.app/sold_experiences';
  
    try {
      // Llamada a la API para guardar los datos de la experiencia vendidaa/
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          experience_uuid: id,
          sold_experience_name: selectedExperience.experience_name, // Aquí agregas el nombre de la experiencia
          players: players,
          experience_package: formData.experience_package,
          experience_price: parseFloat(totalPrice.toFixed(2)), // Asegúrate de que esto es lo que tu API espera
          letrip_price: parseFloat(letripPrice.toFixed(2)),
          customer_tax: parseFloat(tax.toFixed(2)),
          total_price: parseFloat(totalPriceFull.toFixed(2)),
          payment_method: formData.payment_method,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      // Si la respuesta es exitosa, procesar los datos
      const data = await response.json();

      // Coloca aquí la lógica de redirección basada en el método de pago seleccionado
      if(formData.payment_method === 'paypal') {
        window.open('https://paypal.me/letriplab', '_blank');
      } else if(formData.payment_method === 'global66') {
        window.open('https://cobros.global66.com/DAVBRA654', '_blank');
      } else {
        alert('Por favor, selecciona un método de pago.');
        return;
      }

      alert('Serás redirigido a la plataforma de pago. Activa la ventana emergente. ¡Nos pondremos en contacto contigo!');
      console.log('Datos guardados:', data);
      } catch (error) {
        // Manejo de errores al guardar los datos o enviar el email
         alert('Error al guardar los datos: ' + error.message);
      }
      };


  return (
    <div className="mx-0 md:px-40 px-8 pb-20 tracking-tight bg-black border-t-letrip border-t-2 text-letrip">
      {selectedExperience ? (
        <>
        <div className='pt-2'>
          <h2 className="rounded-2xl px-4 py-2 text-2xl text-center font-bold tracking-tight mb-10">Reserva tu experiencia</h2>
          <form onSubmit={handleSubmit}>
            <div className='md:grid md:grid-cols-5 flex flex-col gap-x-8'>
              <div className='md:col-span-2'>
              <h3 className="rounded-2xl bg-letrip text-black px-4 py-2 text-xl font-bold mb-10">Ingresa tus datos</h3>

                {/* Nombre del Cliente */}
                <label className=' text-sm' htmlFor="customer_name">Nombres y Apellidos:</label>
                <input
                  id="customer_name"
                  name="customer_name"
                  type="text"
                  value={formData.customer_name}
                  onChange={handleChange}
                  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                />
                

                {/* Identificación del Cliente */}
                <label className=' text-sm' htmlFor="customer_identification">Número de identificación:</label>
                <input
                  id="customer_identification"
                  name="customer_identification"
                  type="text"
                  value={formData.customer_identification}
                  onChange={handleChange}
                  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                />

                {/* Teléfono del Cliente */}
                <label className=' text-sm' htmlFor="customer_phone">Teléfono:</label>
                <input
                  id="customer_phone"
                  name="customer_phone"
                  type="tel"
                  value={formData.customer_phone}
                  onChange={handleChange}
                  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                />

                {/* Correo Electrónico del Cliente */}
                <label className=' text-sm' htmlFor="customer_email">Correo Electrónico:</label>
                <input
                  id="customer_email"
                  name="customer_email"
                  type="email"
                  value={formData.customer_email}
                  onChange={handleChange}
                  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                />

                {/* Dirección del Cliente */}
                <label className=' text-sm' htmlFor="customer_address">Dirección completa, incluyendo Ciudad y País:</label>
                <input
                  id="customer_address"
                  name="customer_address"
                  type="text"
                  value={formData.customer_address}
                  onChange={handleChange}
                  className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                />

                    {/* Aceptación de Términos y Condiciones */}
                    <div className="my-10 flex">
                    <input
                      id="approved_terms_and_conditions"
                      name="approved_terms_and_conditions"
                      type="checkbox"
                      checked={formData.approved_terms_and_conditions}
                      onChange={handleChange}
                    />
                    <label htmlFor="approved_terms_and_conditions" className="pl-2 text-lg">
                    Acepto los <a href="https://www.letriplab.com/tyc" target="_blank" class="font-semibold px-1 text-letrip bg-black">términos y condiciones</a>.
                    </label>
                  </div>
              </div>

              <div className='md:col-span-1 mb-10'> </div>
              <div className='md:col-span-2 mb-10'>
              
                    <h3 className="rounded-xl bg-letrip text-black px-4 py-2 text-xl font-bold mb-10">Información del precio</h3>
                    <h3 className="text-lg font-bold my-8">Fecha y número de aficionados</h3>

                      <label className=' text-sm' htmlFor="experience_package">Elige la fecha de tu experiencia</label>
                      <select
                        id="experience_package"
                        name="experience_package"
                        value={formData.experience_package}
                        onChange={handleChange}
                        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                      >
                        <option value="">Selecciona una fecha</option>
                        {availableDates.map((dateOption) => (
                          <option key={dateOption.id} value={dateOption.value}>
                            {dateOption.label}
                          </option>
                        ))}
                      </select>

                      {/* Corrección en el campo del número de aficionados */}
                      <label className=' text-sm' htmlFor="players">Número de aficionados</label>
                      <input
                        id="players"
                        name="players"
                        type="number"
                        min={selectedExperience.minimum_group_size} // Asegurar que se usa selectedExperience e e
                        max={selectedExperience.max_group_size} // Asegurar que se usa selectedExperience
                        value={players} // Corregido para usar el estado `players`
                        onChange={handlePlayerChange} // Usando handlePlayerChange para manejar este input específicamente
                        className="text-sm block w-full mt-1 p-2 rounded-md border border-gray-300 bg-yellow-100 text-black shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none"
                      />

                      <h3 className="text-lg font-bold my-8">Detalle del precio total</h3>


                      <div className='grid grid-cols-3 font-semibold text-sm'>
                        <p className='col-span-2'><FontAwesomeIcon className='text-gray-200 pr-2' icon={faCheck} />{selectedExperience.experience_price.toLocaleString('de-DE')} USD x {players} aficionado(s)</p>
                        <p className='col-span-1'>= ${totalPrice.toLocaleString('de-DE')} USD</p>
                      </div>
                      <div className='grid grid-cols-3 font-semibold text-sm '>
                        <p className='col-span-2'><FontAwesomeIcon className='text-gray-200 pr-2' icon={faCheck} />Tarifa por servicio Le trip</p>
                        <p className='col-span-1'>= ${letripPrice.toLocaleString('de-DE')} USD</p>
                      </div>
                      <div className='grid grid-cols-3 font-semibold text-sm'>
                        <p className='col-span-2'><FontAwesomeIcon className='text-gray-200 pr-2' icon={faCheck} />Descuentos</p>
                        <p className='col-span-1'>= ${discountAmount.toLocaleString('de-DE')} USD</p>
                      </div>

                      <div className='grid grid-cols-3 font-semibold text-sm'>
                        <p className='col-span-2'><FontAwesomeIcon className='text-gray-200 pr-2' icon={faCheck} />Impuestos</p>
                        <p className='col-span-1'>= ${tax.toLocaleString('de-DE')} USD</p>
                      </div>

                        <li className="block font-semibold text-sm outline-none py-2 mt-4">                
                        <span className="font-semibold text-xl">
                          <FontAwesomeIcon className='text-gray-200 pr-4' icon={faMoneyBills} />
                          ${totalPriceFull.toLocaleString('de-DE')}
                        </span> USD en total
                        </li>

                        <div className="mb-4">

                  <label htmlFor="payment_method"><h3 className="text-lg font-bold my-8">Método de pago</h3> </label>
                  <select
                    id="payment_method"
                    name="payment_method"
                    value={formData.payment_method}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-yellow-100 text-black rounded-md shadow-sm focus:ring-yellow-700 focus:border-yellow-700 focus:outline-none md:text-sm"
                  >
                    <option value="">Selecciona un método de pago</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>

                </div>

            </div>


                  <button type="submit" className="text-lg hover:bg-yellow-100 hover:text-letrip bg-letrip text-black py-4 rounded-md text-center w-full block">
                    <span className="font-semibold text-2xl">
                       Confirmar reserva
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