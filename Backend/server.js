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

// Endpoint para obtener experiencias con fechas disponibles
app.get('/experiences', async (req, res) => {
    try {
        // Obtener experiencias
        const { data: experiencesData, error: experiencesError } = await supabase
            .from('experiences')
            .select('*');

        if (experiencesError) throw experiencesError;

        // Obtener fechas disponibles
        const { data: availableDatesData, error: availableDatesError } = await supabase
            .from('available_experiences')
            .select('*');

        if (availableDatesError) throw availableDatesError;

        // Combinar fechas con experiencias
        const combinedData = experiencesData.map(exp => {
            return {
                ...exp,
                available_dates: availableDatesData
                    .filter(date => date.experience_uuid === exp.experience_uuid)
                    .map(date => date.available_date)
            };
        });

        res.json(combinedData);
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
                group_restrictions,
                equipment_required,
                certified_instructor,
                included_practical_lessons,
                included_theoretical_lessons,
                included_yoga,
                included_training,
                included_experience_video,
                included_accident_insurance,
                included_equipment_rental,
                included_entry_fees,
                included_lift_ticket,
                experience_accommodation,
                meal_breakfast,
                meal_lunch,
                meal_dinner,
                meal_snacks_and_drinks,
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
                    group_restrictions,
                    equipment_required,
                    certified_instructor,
                    included_practical_lessons,
                    included_theoretical_lessons,
                    included_yoga,
                    included_training,
                    included_experience_video,
                    included_accident_insurance,
                    included_equipment_rental,
                    included_entry_fees,
                    included_lift_ticket,
                    experience_accommodation,
                    meal_breakfast,
                    meal_lunch,
                    meal_dinner,
                    meal_snacks_and_drinks,
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
        const fileUrl = `${supabaseUrl}/storage/v1/object/public/experience_images/uploaded/${data.Key}`;

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
