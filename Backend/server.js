const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { supabase, supabaseUrl } = require('./db');

  app.use(cors({
    origin: ['https://letrip13012023-frontend.vercel.app', 'https://www.letriplab.com'],// URL de tu frontend
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

    try {
        const { data, error } = await supabase
            .from('experiences')
            .update({
                experience_name,
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

// Endpoint para insertar un nuevo registro en public.sold_experiences
app.post('/sold_experiences', async (req, res) => {
    const { customer_name, customer_identification, customer_phone, customer_email, customer_address, approved_terms_and_conditions, experience_package, players, experience_price, letrip_price, customer_tax, total_price, sold_experience_name} = req.body;

    try {
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
                }
            ]);

        if (error) throw error;

        res.status(201).json(data);
    } catch (error) {
        console.error('Error al insertar en sold_experiences:', error.message);
        res.status(500).send('Server Error');
    }
});

// endpoint mailing google

const {google} = require('googleapis');
const gmail = google.gmail('v1');

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];
const key = process.env.GMAIL_KEY;

async function sendEmail(req, res) {
  const { customer_email, customer_name, experience_name, experience_date, total_price } = req.body;

  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    SCOPES,
  );

  try {
    await jwtClient.authorize();

    const rawMessage = `From: "Le trip" <david@letriplab.com>\nTo: ${customer_email}\nSubject: Confirmación de reserva para ${experience_name}\n\nHola ${customer_name},\n\nTu reserva para la experiencia "${experience_name}" el día ${experience_date} ha sido confirmada. El monto total a pagar es de ${total_price}.\n\nGracias por elegirnos,\nEl Equipo de Le Trip`;

    const encodedMessage = Buffer.from(rawMessage).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const response = await gmail.users.messages.send({
      auth: jwtClient,
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).send('Error al enviar el correo');
  }
}

// Asegúrate de exportar correctamente tu función para usarla en tu enrutador Express.
module.exports = sendEmail;



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

