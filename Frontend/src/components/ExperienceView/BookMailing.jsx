import { Resend } from 'resend';

// Asume que 'RESEND_KEY' es una clave válida de tu API Resend configurada en tus variables de entorno.
const resendClient = new Resend('re_cqxck4e2_CarZtsctC2SzYaC9bQxGKDwW');

resend.apiKeys.create({ name: 'Mailing' });

const BookMailing = async (emailData) => {
  try {
    const { customer_email, customer_name, selectedExperience, selectedItem, players, totalPriceFull } = emailData;
    
    const response = await resendClient.emails.send({
      from: 'Le trip <david@letriplab.com>',
      to: `${customer_email}, david@letriplab.com, matias@letriplab.com, thomas@letriplab.com`,
      subject: 'Estás a un paso de reservar tu experiencia deportiva en Le trip',
      html: `
        <h3>¡Hola, ${customer_name}!</h3>
        <p>Estás a un paso de reservar tu experiencia deportiva en <strong>Le trip</strong>. Sólo debes continuar con el pago a través de tu medio de pago seleccionado. Te recordamos los detalles de tu experiencia escogida:</p>
        <ul>
          <li>Nombre experiencia: ${selectedExperience.experience_name}</li>
          <li>Fecha: ${selectedItem.available_date_start} al ${selectedItem.available_date_end}</li>
          <li>Nº de personas: ${players}</li>
          <li>Precio total: ${totalPriceFull} USD</li>
        </ul>
        <p>En caso de no haber concluido el pago, uno de nuestros representantes se pondrá en contacto contigo para resolver cualquier duda y ayudarte con el proceso.</p>
        <p>¡Prepárate a vivir una experiencia que no olvidarás!</p>
        <p></p>
        <p><strong>Equipo Le trip</strong></p>
      `,
    });

    if (response.error) {
      console.error(response.error);
      return;
    }

    console.log('Correo enviado con éxito', response.data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

export { BookMailing };
