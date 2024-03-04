 //MAILGUN
 const BookMailing = async (formData, selectedExperience, selectedItem, players, total_price) => {
    const emailData = {
      to: `${formData.customer_email}, david@letriplab.com, matias@letriplab.com, thomas@letriplab.com`,
      subject: 'Confirmación de Reserva - Le trip',
      text: `
      <h3>¡Hola, ${formData.customer_name}!</h3>
      <p>Gracias por elegir <strong>Le trip</strong> para vivir una nueva experiencia deportiva. Nos complace confirmarte los detalles de tu reserva:</p>
      <ul>
        <li>Nombre experiencia:</strong> ${selectedExperience.experience_name}</li>
        <li>Fecha:${selectedItem.available_date_start} al ${selectedItem.available_date_end}</li>
        <li>Nº de personas:${players} </li>
        <li>Precio total:${total_price} USD</li>
      </ul>
      <p>En las próximas horas, uno de nuestros representantes se pondrá en contacto contigo para resolver cualquier duda y enviarte la boleta o factura correspondiente.</p>
      <p>Estamos emocionados de que vayas a disfrutar una de nuestras experiencias únicas. ¡Te esperamos con los brazos abiertos!</p>
    `
            
    };
  
    try {
      const response = await fetch('https://letrip13012023-backend-lawitec.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      const data = await response.json();
      console.log(data.message); // Mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  export { BookMailing };


