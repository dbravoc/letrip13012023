import { Resend } from 'resend';

// Asume que 'RESEND_KEY' es una clave válida de tu API Resend configurada en tus variables de entorno.
const resendClient = new Resend(process.env.RESEND_KEY);

resend.apiKeys.create({ name: 'Mailing' });

const BookMailing = async (emailData) => {
  try {
    const { customer_email, customer_name, selectedExperience, selectedItem, players, total_price } = emailData;
    
    const response = await resendClient.emails.send({
      from: 'Le trip <david@letriplab.com>',
      to: `${customer_email}, david@letriplab.com, matias@letriplab.com, thomas@letriplab.com`,
      subject: 'Confirmación de Reserva - Le trip',
      html: `
        <h3>¡Hola, ${customer_name}!</h3>
        <p>Gracias por elegir <strong>Le trip</strong> para vivir una experiencia deportiva inolvidable. Nos complace confirmarte los detalles de tu reserva:</p>
        <ul>
          <li>Nombre experiencia: ${selectedExperience.experience_name}</li>
          <li>Fecha: ${selectedItem.available_date_start} al ${selectedItem.available_date_end}</li>
          <li>Nº de personas: ${players}</li>
          <li>Precio total: ${total_price} USD</li>
        </ul>
        <p>En las próximas horas, uno de nuestros representantes se pondrá en contacto contigo para resolver cualquier duda y enviarte la boleta o factura correspondiente.</p>
        <p>Estamos emocionados de que vayas a disfrutar una de nuestras experiencias únicas.</p>
        <p>¡Te esperamos con los brazos abiertos!</p>
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
