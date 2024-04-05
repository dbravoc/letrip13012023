import React, { useState, useEffect } from 'react'; 
import ReactDOM from "react-dom"
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBills } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useBranch } from '../../branch/branchContext'; 

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const BookExperience = () => {
  const { id } = useParams();
  const { experienceCard, availableDatesUrl } = useBranch();
  const selectedExperience = experienceCard.find(e => e.experience_uuid === id);

  const [players, setPlayers] = useState(1);
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
    total_price:'',
    payment_method: '', // Agregado para inicializar el método de pago
  });

  useEffect(() => {
    const loadAvailableDates = async () => {
      const apiUrl = `${availableDatesUrl}?experience_uuid=${id}`;
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
  }, [id, availableDatesUrl]); // Asegúrate de incluir availableDatesUrl como dependencia

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
    // Realizar cálculos incluso si players es cero
    if (selectedExperience) {
      const price = parseFloat(selectedExperience.experience_price) || 0;
      setTotalPrice(players * price);
    }
  }, [players, selectedExperience]);

  const handlePlayerChange = (e) => {
    let numPlayers = parseInt(e.target.value, 10);
    // Tratar valores vacíos como cero
    numPlayers = isNaN(numPlayers) ? 0 : numPlayers;
    setPlayers(numPlayers);
  };
  
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let discountValue = 0; // Inicializar discountValue a 0 por defecto
  
    if (selectedExperience) {
      if (players > 10) {
        discountValue = selectedExperience[`discount_10`] || 0;
      } else if (players > 0) { // Asegurar que players sea mayor que 0 para aplicar un descuento
        const discountFieldName = `discount_${players}`;
        discountValue = selectedExperience[discountFieldName] || 0;
      }
      // No se aplica descuento si players es 0
    }
  
    // Aquí puedes hacer lo que necesites con discountValue, por ejemplo, actualizar un estado
    console.log(discountValue); // Mostrar el valor del descuento para verificar
  
    // Supongamos que quieres actualizar el estado con este nuevo valor de descuento
   setDiscount(discountValue); // Asegúrate de tener un estado `discount` definido para esto
  }, [players, selectedExperience]); // Dependencias [players, selectedExperience] para reaccionar a cambios
  
  const letripPrice = players > 0 ? parseFloat((totalPrice * 0.05).toFixed(0)) : 0;
  const tax = players > 0 ? parseFloat((letripPrice * 0.19).toFixed(0)) : 0;
  const discountAmount = players > 0 ? parseFloat((discount * totalPrice / 100).toFixed(0)) : 0;
  const totalPriceFull = players > 0 ? parseFloat((totalPrice + letripPrice + tax - discountAmount).toFixed(0)) : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar si se ha seleccionado un item (una fecha de experiencia)
    if (!selectedItem) {
      alert('Por favor, selecciona una fecha para tu experiencia.');

      return;
    }
    const apiUrl = 'https://letrip13012023-backend-lawitec.vercel.app/sold_experiences';
  
    try {
      // Llamada a la API para guardar los datos de la experiencia vendida
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
          experience_price: parseFloat(totalPrice.toFixed(0)), // Asegúrate de que esto es lo que tu API espera
          letrip_price: parseFloat(letripPrice.toFixed(0)),
          customer_tax: parseFloat(tax.toFixed(0)),
          total_price: parseFloat(totalPriceFull.toFixed(0)),
          payment_method: formData.payment_method,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
  
      // Si la respuesta es exitosa, procesar los datos
      const data = await response.json();

      // Coloca aquí la lógica de redirección basada en el método de pago seleccionado
      if (formData.payment_method === 'paypal') {
        window.open('https://paypal.me/letriplab', '_blank');
      } else if (formData.payment_method === 'global66') {
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

  const confirmButtonText = formData.payment_method === 'paypal' ? 'Pagar con PayPal' : 'Confirmar reserva';

  // Función para desarrollar pago
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.1", 
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  }; 

  return (
    <div className="mx-0 pt-28 md:px-40 px-8 pb-20 tracking-tight border-t-2 text-gray-900">
      {selectedExperience ? (
        <>
          <div className='pt-2'>
            <h2 className="rounded-2xl text-3xl px-4 py-2 text-left font-bold tracking-tight mb-10">Reserva tu experiencia</h2>
            <form onSubmit={handleSubmit}>
              <div className='md:grid md:grid-cols-5 flex flex-col gap-x-8'>
                <div className='md:col-span-2'>
                  <h3 className="rounded-2xl bg-yellow-100 text-gray-900 px-4 py-2 text-xl text-center font-bold mb-10">Ingresa tus datos</h3>

                  {/* Resto de inputs aquí... */}

                  <div className="mb-4">
                    <label htmlFor="payment_method"><h3 className="flex justify-center text-lg font-bold my-8">Método de pago</h3></label>
                    <select
                      id="payment_method"
                      name="payment_method"
                      value={formData.payment_method}
                      onChange={handleChange}
                      className="mmb-3 text-lg font-semibold block w-full p-2 border-b-2 bg-transparent border-yellow-200 text-gray-900 text-center focus:outline-none border-l-0 border-r-0 border-t-0"
                    >
                      <option value="">Selecciona un método de pago</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>

                </div>

                {/* Resto del formulario aquí... */}

              </div>

              {/* Botón de confirmar reserva */}
              <button type="submit" className="text-lg hover:bg-black hover:text-letrip bg-letrip text-black py-4 rounded-md text-center w-full block">
                <span className="font-semibold text-2xl">
                  {confirmButtonText}
                </span>
              </button>

              {/* Renderizar PayPalButton solo si se selecciona PayPal */}
              {formData.payment_method === 'paypal' && (
                <div>
                  <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                  />
                </div>
              )}

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
