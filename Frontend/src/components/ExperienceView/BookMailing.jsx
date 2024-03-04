 //MAILGUN
 const BookMailing = async (formData, selectedExperience, item, players, totalPriceFull) => {
    const emailData = {
      to: `${formData.customer_email}`,
      subject: 'Confirmación de Reserva - Le trip',
      text: `¡Hola, ${formData.customer_name}!\n\n` +
            `Gracias por preferir Le trip para vivir una nueva experiencia deportiva. A continuación te confirmamos los datos de tu reserva:\n` +
            `- Nombre experiencia: ${selectedExperience.experience_name}\n` +
            `- Fecha: ${item.available_date_start} al ${item.available_date_end}\n` +
            `- Nº de personas: ${players}\n` +
            `- Precio total: ${totalPriceFull.toLocaleString('de-DE')}\n\n` +
            `En las próximas horas, nuestro equipo se contactará contigo para quedar en contacto ante cualquier duda que tengas y también para enviarte la boleta o factura del servicio.\n\n` +
            `Estamos ansiosos para que disfrutes una de nuestras experiencias únicas en Le trip.\n\n` +
            `¡Un abrazo grande!`
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


