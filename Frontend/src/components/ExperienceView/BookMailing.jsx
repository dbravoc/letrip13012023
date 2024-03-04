 //MAILGUN
 const BookMailing = async (formData, selectedExperience, selectedItem, item, players, totalPriceFull) => {
    const emailData = {
      to: `${formData.customer_email}, 'david@letriplab.com', 'matias@letriplab.com', 'thomas@letriplab.com'`,
      subject: 'Confirmación de Reserva - Le trip',
      text: `
      <h3>¡Hola, ${formData.customer_name}!</h3>
      <p>Gracias por elegir <strong>Le trip</strong> para vivir una nueva experiencia deportiva. Nos complace confirmarte los detalles de tu reserva:</p>
      <ul>
        <li><strong>Nombre experiencia:</strong> ${selectedExperience.experience_name}</li>
        <li><strong>Fecha:</strong> ${selectedItem.available_date_start} al ${selectedItem.available_date_end}</li>
        <li><strong>Nº de personas:</strong> ${players}</li>
        <li><strong>Precio total:</strong> ${totalPriceFull} USD</li>
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


