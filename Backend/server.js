const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { supabase, supabaseUrl } = require('./db');
const https = require('https');


  app.use(cors({
    origin: ['https://letrip13012023-frontend.vercel.app', 'https://www.letriplab.com', 'https://m-develop-front-letrip.vercel.app'],// URL de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true, // Si estás usando cookies o autenticación
    optionsSuccessStatus: 200

  }));

app.use(express.json()); // Para parsear el cuerpo de las solicitudes en formato JSON

// Configuración de Multer para manejo de archivos
const upload = multer({ storage: multer.memoryStorage() });

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });


// Endpoint para obtener experiencias
app.get('/experiences', async (req, res) => {
    try {
        // Obtener experiencias directamente sin combinar con otra tabla
        const { data: experiencesData, error: experiencesError } = await supabase
            .from('experiences')
            .select('*');

        if (experiencesError) {
            throw experiencesError;
        }

        // Devolver directamente los datos de experiencias sin combinarlos con otra tabla
        res.json(experiencesData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/available_experiences', async (req, res) => {
    try {
        // Obtener experiencias directamente sin combinar con otra tabla
        const { data: availabilityData, error: availabilityError } = await supabase
            .from('available_experiences')
            .select('*');

        if (availabilityError) {
            throw experiencesError;
        }

        // Devolver directamente los datos de experiencias sin combinarlos con otra tabla
        res.json(availabilityData);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Endpoint para crear una nueva experiencia
app.post('/experiences', async (req, res) => {
    try {
        const { experience_name,
                experience_duration,
                experience_location,
                target_audience_restrictions,
                minimum_age,
                minimum_group_size,
                certified_instructor,
                included_practical_lessons,
                included_theoretical_lessons,
                included_yoga,
                included_training,
                included_experience_video,
                included_accident_insurance,
                included_equipment_rental,
                included_entry_fees,
                experience_accommodation,
                meal_breakfast,
                meal_lunch,
                meal_dinner,
                
                transport_airport,
                transport_during_experience,
                experience_type,
                experience_country,
                experience_instructor_message,
                experience_main_discipline,
                experience_geography,
                experience_demand_level,
                experience_price,
                experience_instructor,
                experience_instructor_type,
                card_img_1,
                card_img_2,
                card_img_3,
                card_img_4,
                experience_included_description,
                instructor_profile_img,
                accident_insurance_file,
        
         } = req.body;

        // Insertar la nueva experiencia en Supabase
        const { data, error } = await supabase
            .from('experiences')
            .insert([
                { experience_name,
                    experience_duration,
                    experience_location,
                    target_audience_restrictions,
                    minimum_age,
                    minimum_group_size,
                    certified_instructor,
                    included_practical_lessons,
                    included_theoretical_lessons,
                    included_yoga,
                    included_training,
                    included_experience_video,
                    included_accident_insurance,
                    included_equipment_rental,
                    included_entry_fees,
                    experience_accommodation,
                    meal_breakfast,
                    meal_lunch,
                    meal_dinner,
                    
                    transport_airport,
                    transport_during_experience,
                    experience_type,
                    experience_country,
                    experience_instructor_message,
                    experience_main_discipline,
                    experience_geography,
                    experience_demand_level,
                    experience_price,
                    experience_instructor,
                    experience_instructor_type,
                    card_img_1,
                    card_img_2,
                    card_img_3,
                    card_img_4,
                    experience_included_description,
                    instructor_profile_img,
                    accident_insurance_file,

                },
            ])
            .select();

        if (error) throw error;

        res.status(201).json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post('/upload', upload.single('image'), async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No se envió ninguna imagen.');
    }

    try {
        // Generar un nombre de archivo único
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const uniqueFileName = `uploaded/${uniqueSuffix}-${file.originalname}`;

        // Subir el archivo a Supabase
        const { data, error } = await supabase.storage
            .from('experience_images')
            .upload(uniqueFileName, file.buffer, { // Usa 'file.buffer' en lugar de leer desde el sistema de archivos
                contentType: file.mimetype,
            });

        if (error) {
            throw error;
        }

        // Construir la URL de la imagen subida
        const fileUrl = `https://aoxzwenqcgzeznwbmwri.supabase.co/storage/v1/object/public/experience_images/${uniqueFileName}`;

        // Devolver la URL de la imagen
        res.json({ url: fileUrl });
    } catch (err) {
        console.error('Error al subir la imagen:', err);
        res.status(500).send('Error al subir la imagen');
    }
});

// Añade una ruta que capture todas las demás solicitudes y devuelva index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Después de tus rutas API, añade un middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.put('/available_experiences/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const {
        available_date_start,
        available_date_end,
        experience_uuid
    } = req.body;
    try {
        const { data, error } = await supabase
            .from('available_experiences')
            .update({
                available_date_start,
                available_date_end,
                experience_uuid
            })
            .eq('experience_uuid', uuid)
            .select();

        if (error) throw error;

        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    
});


app.put('/experiences/:uuid', async (req, res) => {
    const { uuid } = req.params;
    const {
        experience_name,
        experience_description_small,
        experience_duration,
        experience_location,
        target_audience_restrictions,
        minimum_age,
        minimum_group_size,
        experience_secondary_discipline,
        certified_instructor,
        included_practical_lessons,
        included_theoretical_lessons,
        included_yoga,
        included_training,
        included_experience_video,
        included_accident_insurance,
        included_equipment_rental,
        included_entry_fees,
        experience_accommodation,
        meal_breakfast,
        meal_lunch,
        meal_dinner,
        meal_snacks,
        transport_airport,
        transport_during_experience,
        experience_type,
        experience_country,
        experience_instructor_message,
        experience_main_discipline,
        experience_geography,
        experience_demand_level,
        experience_price,
        experience_instructor,
        experience_instructor_type,
        card_img_1,
        card_img_2,
        card_img_3,
        card_img_4,
        experience_included_description,
        instructor_profile_img,
        experience_uuid,
        accident_insurance_file,
        card_img_5,
        card_img_6,
        card_img_7,
        card_img_8,
        card_img_9,
        card_img_10,
        max_group_size,
        Active,
        equipment_rental_price,
        video_price,
        technical_level,
        dont_forget,
        meal_drinks,
        itinerary,
        acommodation,
        discount_1,
        discount_2,
        discount_3,
        discount_5,
        discount_6,
        discount_7,
        discount_8,
        discount_9,
        discount_10,
        inbound_experience_name,
        accident_insurance_link,

    } = req.body;

    try {
        const { data, error } = await supabase
            .from('experiences')
            .update({
                experience_name,
                experience_description_small,
                experience_duration,
                experience_location,
                target_audience_restrictions,
                minimum_age,
                minimum_group_size,
                experience_secondary_discipline,
                certified_instructor,
                included_practical_lessons,
                included_theoretical_lessons,
                included_yoga,
                included_training,
                included_experience_video,
                included_accident_insurance,
                included_equipment_rental,
                included_entry_fees,
                experience_accommodation,
                meal_breakfast,
                meal_lunch,
                meal_dinner,
                meal_snacks,
                transport_airport,
                transport_during_experience,
                experience_type,
                experience_country,
                experience_instructor_message,
                experience_main_discipline,
                experience_geography,
                experience_demand_level,
                experience_price,
                experience_instructor,
                experience_instructor_type,
                card_img_1,
                card_img_2,
                card_img_3,
                card_img_4,
                experience_included_description,
                instructor_profile_img,
                experience_uuid,
                accident_insurance_file,
                card_img_5,
                card_img_6,
                card_img_7,
                card_img_8,
                card_img_9,
                card_img_10,
                max_group_size,
                Active,
                equipment_rental_price,
                video_price,
                technical_level,
                dont_forget,
                meal_drinks,
                itinerary,
                acommodation,
                discount_1,
                discount_2,
                discount_3,
                discount_5,
                discount_6,
                discount_7,
                discount_8,
                discount_9,
                discount_10,
                inbound_experience_name,
                accident_insurance_link,

            })


            .eq('experience_uuid', uuid)
            .select();

        if (error) throw error;

        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    
});

// Función para enviar correo electrónico

const axios = require('axios');

const sendConfirmationEmail = async (emailData) => {
  const { customer_email, customer_name, players, sold_experience_name, total_price, experience_package } = emailData;

  const authKey = Buffer.from(`${process.env.MAILING_ACCOUNT}:${process.env.MAILING_KEY}`).toString('base64');

  const mailjetEmailData = {
    Messages: [
      {
        From: {
          Email: "david@letriplab.com", // Asegúrate de reemplazar esto con tu dirección de correo válida de Mailjet
          Name: "Le trip"
        },
        To: [
          {
            Email: customer_email,
            Name: customer_name
          }
        ],
        Subject: `Confirmamos la reserva de tu experiencia Le trip "${sold_experience_name}"`,
        TextPart: `Hola ${customer_name}, gracias por reservar tu experiencia "${sold_experience_name}" con nosotros. Check-in / Check-out: ${experience_package}. Nº de personas: ${players}. Precio total: ${total_price} USD. Esperamos que disfrutes de tu experiencia Le trip.`,
        HTMLPart: `<h1>Hola ${customer_name},</h1>
                   <h3>Gracias por reservar tu experiencia "${sold_experience_name}" con nosotros. Aquí están los detalles de tu reserva:</h3>
                   <h3><ul>
                     <li>Check-in / Check-out: ${experience_package}</li>
                     <li>Nº de personas: ${players}</li>
                     <li>Precio total: ${total_price} USD</li>
                   </ul></h3>
                   <h3>Esperamos que disfrutes de tu experiencia Le trip.</h3>`
      }
    ]
  };

  try {
    const response = await axios.post('https://api.mailjet.com/v3.1/send', mailjetEmailData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authKey}`
      }
    });

    console.log('Correo enviado con éxito:', response.data);
  } catch (error) {
    console.error('Error al enviar el correo:', error.response ? error.response.data : error);
    throw error;
  }
};


// Endpoint para insertar un nuevo registro en public.sold_experiences y enviar un correo electrónico al mail e e
app.post('/sold_experiences', async (req, res) => {
    const { customer_name, customer_identification, customer_phone, customer_email, customer_address, approved_terms_and_conditions, experience_package, players, experience_price, letrip_price, customer_tax, total_price, sold_experience_name, available_date_start, available_date_end, payment_method  } = req.body;

    try {
        // Inserta el registro en Supabase
        const { data, error } = await supabase
            .from('sold_experiences')
            .insert([
                {
                    customer_name,
                    customer_identification,
                    customer_phone,
                    customer_email,
                    customer_address,
                    approved_terms_and_conditions,
                    experience_package,
                    players,
                    experience_price,
                    letrip_price,
                    customer_tax,
                    total_price,
                    sold_experience_name,
                    available_date_start,
                    available_date_end,
                    payment_method,
                }
            ]);

        if (error) throw error;

        // Envía el correo electrónico de confirmación
        await sendConfirmationEmail({ customer_email, customer_name, sold_experience_name, experience_package, players, customer_email, total_price});
    
        res.status(201).json({ message: 'Experiencia vendida y correo electrónico enviado con éxito.', data });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error.message);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



// Endpoint para crear una nueva experiencia
app.post('/providers', async (req, res) => {
    try {
        const { company_name,
                contact_person,
                phone_number,
                company_address,
                email_address,
                website_url,
                inbound_experience_name
        
         } = req.body;

        // Insertar la nueva experiencia en Supabase
        const { data, error } = await supabase
            .from('providers')
            .insert([
                {   company_name,
                    contact_person,
                    phone_number,
                    company_address,
                    email_address,
                    website_url,
                    inbound_experience_name
                
                 } ,
            ])
            .select();

        if (error) throw error;

        res.status(201).json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// versiones github 4