import React, { useState } from 'react';
import './App.css';
import Inicio from './components/Inicio';
import Experiencias from './components/Experiencias';
import Tarjeta from './pages/Tarjeta';
import FormularioPago from './pages/EstadoPago';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frases from './components/Frases';


const App = () => {
  // Define el estado aquí. Asegúrate de proporcionar un valor inicial para experienceCard.
  const [experienceCard, setExperienceCard] = useState([
    {
      experience_id: '1',
      experience_name: 'Bucea con corales en Isla Providencia, Colombia', 
      experience_type: 'Curso',
      experience_location: 'Isla Providencia, San Andrés, Colombia',
      experience_country: 'Colombia',
      experience_description_small: 'La experiencia de buceo en Isla Providencia, Colombia, incluye alojamiento confortable, desayuno americano, clases de buceo profesional, equipamiento de alta calidad y un tour local inmersivo. Guiado por un instructor experto, descubrirás el vibrante mundo submarino y explorarás la rica cultura y belleza natural de la isla.',
      experience_description_instructor_message: '¡Saludos, entusiastas del océano! Les invito a vivir emocionantes aventuras: surfear en las impresionantes olas de Bali, apto para todos los niveles, o sumergirse en el fascinante mundo submarino de Isla Providencia en Colombia, con todo incluido. ¡Unámonos en estas experiencias únicas! ',
      experience_main_discipline: 'Buceo',
      experience_geography:'Mar',
      experience_demand_level: 'Intermedio',
      experience_price_from: '1500',
      experience_video: <iframe width="320" height="180"   src="https://www.youtube-nocookie.com/embed/ta9PI5KEjLA?si=SbAR8NqNNIdnZ6dY&amp;controls=0&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      experience_instructor: 'Emiliano Gutiérrez',
      experience_instructor_type: 'Instructor',
      experience_instructor_evaluation: '30 recomendaciones',
      experience_instructor_description: 'Instructor con más de 20 años de experiencia, experto en las condiciones climáticas y geográficas del lugar. Reconocido en el pueblo por su amabilidad y profesionalismo. Es el instructor oficial de la zona.',
      experience_instructor_img: <img className='object-cover min-w-full min-h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyY_UEhEDiRsFfMpMQ-pJNk6GiZye7LWLBw&usqp=CAU'></img>,
      experience_included: [
        'Alojamiento',
        'Desayuno americano',
        'Clases',
        'Equipo',
        'Tour local',
        'Transporte buceo'
      ],
      experience_not_included: [
        'Otras comidas',
        'Fotos',
        'Transportes extras',
      ],
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/09/22/f04b3598-6d52-4775-bd9f-46db7c804c39/bucear-corriente-lista' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/buceadora.jpg.webp?itok=ugRXa058' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='https://content.app-sources.com/s/0422494087303996/uploads/Images/heavenly-scuba-diving-in-cabo-1931916.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqOZVmJ0xeHUvu2efBIyvil9Xn4L3WTcShg&usqp=CAU' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,

    },
    {
      experience_id: '2',
      experience_name: 'Descenso en Rafting por el Río Amazonas', 
      experience_type: 'Aventura',
      experience_location: 'Amazonas, Brasil',
      experience_country: 'Brasil',
      experience_description_small: 'Navega por las aguas del majestuoso Río Amazonas en una experiencia inolvidable de kayak. Apto para todos los niveles, con guías expertos.',
      experience_description_instructor_message: '¡Saludos, entusiastas del océano! Les invito a vivir emocionantes aventuras: surfear en las impresionantes olas de Bali, apto para todos los niveles, o sumergirse en el fascinante mundo submarino de Isla Providencia en Colombia, con todo incluido. ¡Unámonos en estas experiencias únicas! ',
      experience_main_discipline: 'Rafting',
      experience_geography:'Río',
      experience_demand_level: 'Expertos',
      experience_price_from: '1500',
      experience_video: <iframe width="350" height="240"  src="https://www.youtube-nocookie.com/embed/yBCehIKdqHY?si=vNxTJ45mIWCTAPsQ&amp;controls=0&amp;start=21" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      experience_instructor: 'Emiliano Gutiérrez',
      experience_instructor_type: 'Instructor',
      experience_instructor_evaluation: '30 recomendaciones',
      experience_instructor_description: 'Instructor con más de 20 años de experiencia, experto en las condiciones climáticas y geográficas del lugar. Reconocido en el pueblo por su amabilidad y profesionalismo. Es el instructor oficial de la zona.',
      experience_instructor_img: <img className='object-cover min-w-full min-h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyY_UEhEDiRsFfMpMQ-pJNk6GiZye7LWLBw&usqp=CAU'></img>,
      experience_included: [
        'Alojamiento',
        'Desayuno americano',
        'Clases',
        'Equipo',
        'Tour local',
        'Transporte buceo'
      ],
      experience_not_included: [
        'Otras comidas',
        'Fotos',
        'Transportes extras',
      ],
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/09/22/f04b3598-6d52-4775-bd9f-46db7c804c39/bucear-corriente-lista' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/buceadora.jpg.webp?itok=ugRXa058' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='https://content.app-sources.com/s/0422494087303996/uploads/Images/heavenly-scuba-diving-in-cabo-1931916.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqOZVmJ0xeHUvu2efBIyvil9Xn4L3WTcShg&usqp=CAU' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,

    },
    {
      experience_id: '3',
      experience_name: 'Escalada en Roca en Yosemite', 
      experience_type: 'Expedición',
      experience_location: 'Parque Nacional Yosemite, EE.UU.',
      experience_country: 'Estados Unidos',
      experience_description_small: 'Escalada guiada por los icónicos acantilados de Yosemite. Ideal para escaladores intermedios y avanzados, con equipos de seguridad de primera línea.',
      experience_description_instructor_message: '¡Saludos, entusiastas del océano! Les invito a vivir emocionantes aventuras: surfear en las impresionantes olas de Bali, apto para todos los niveles, o sumergirse en el fascinante mundo submarino de Isla Providencia en Colombia, con todo incluido. ¡Unámonos en estas experiencias únicas! ',
      experience_main_discipline: 'Escalada',
      experience_geography:'Montaña',
      experience_demand_level: 'Expertos',
      experience_price_from: '1500',
      experience_video: <iframe width="350" height="240"  src="https://www.youtube-nocookie.com/embed/crx_UJPjlrs?si=zm13hZ_ce3clr2ic&amp;controls=0&amp;start=6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      experience_instructor: 'Emiliano Gutiérrez',
      experience_instructor_type: 'Instructor',
      experience_instructor_evaluation: '30 recomendaciones',
      experience_instructor_description: 'Instructor con más de 20 años de experiencia, experto en las condiciones climáticas y geográficas del lugar. Reconocido en el pueblo por su amabilidad y profesionalismo. Es el instructor oficial de la zona.',
      experience_instructor_img: <img className='object-cover min-w-full min-h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyY_UEhEDiRsFfMpMQ-pJNk6GiZye7LWLBw&usqp=CAU'></img>,
      experience_included: [
        'Alojamiento',
        'Desayuno americano',
        'Clases',
        'Equipo',
        'Tour local',
        'Transporte buceo'
      ],
      experience_not_included: [
        'Otras comidas',
        'Fotos',
        'Transportes extras',
      ],
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/09/22/f04b3598-6d52-4775-bd9f-46db7c804c39/bucear-corriente-lista' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/buceadora.jpg.webp?itok=ugRXa058' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='https://content.app-sources.com/s/0422494087303996/uploads/Images/heavenly-scuba-diving-in-cabo-1931916.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqOZVmJ0xeHUvu2efBIyvil9Xn4L3WTcShg&usqp=CAU' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '4',
      experience_name: 'Surf en las Olas de Bali', 
      experience_type: 'Clase',
      experience_location: 'Bali, Indonesia',
      experience_country: 'Indonesia',
      experience_description_instructor_message: '¡Saludos, entusiastas del océano! Les invito a vivir emocionantes aventuras: surfear en las impresionantes olas de Bali, apto para todos los niveles, o sumergirse en el fascinante mundo submarino de Isla Providencia en Colombia, con todo incluido. ¡Unámonos en estas experiencias únicas! ',
      experience_description_small: 'Aprende a surfear o mejora tus habilidades en las famosas olas de Bali. Clases para todos los niveles, en un ambiente tropical paradisíaco.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Principiantes',
      experience_price_from: '1500',
      experience_video: <iframe width="350" height="240" src="https://www.youtube-nocookie.com/embed/JIrMAVcv0lo?si=5pM4bsdnLP7I37GG&amp;controls=0&amp;start=5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      experience_instructor: 'Emiliano Gutiérrez',
      experience_instructor_type: 'Instructor',
      experience_instructor_evaluation: '30 recomendaciones',
      experience_instructor_description: 'Instructor con más de 20 años de experiencia, experto en las condiciones climáticas y geográficas del lugar. Reconocido en el pueblo por su amabilidad y profesionalismo. Es el instructor oficial de la zona.',
      experience_instructor_img: <img className='object-cover min-w-full min-h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyY_UEhEDiRsFfMpMQ-pJNk6GiZye7LWLBw&usqp=CAU'></img>,
      experience_included: [
        'Alojamiento',
        'Desayuno americano',
        'Clases',
        'Equipo',
        'Tour local',
        'Transporte buceo'
      ],
      experience_not_included: [
        'Otras comidas',
        'Fotos',
        'Transportes extras',
      ],
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/09/22/f04b3598-6d52-4775-bd9f-46db7c804c39/bucear-corriente-lista' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/buceadora.jpg.webp?itok=ugRXa058' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='https://content.app-sources.com/s/0422494087303996/uploads/Images/heavenly-scuba-diving-in-cabo-1931916.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqOZVmJ0xeHUvu2efBIyvil9Xn4L3WTcShg&usqp=CAU' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
      
    },
    // Puedes añadir más objetos de experiencias aquí
  ]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-black mx-auto w-full sm:px-6  px-8">
                <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
                <div className='pt-36 pb-12'><Frases /></div>
                <Experiencias experienceCard={experienceCard} />
              </div>
            </>
          } />
          
          <Route path="/tarjeta/:id" element={
            <>
            <div className="bg-black mx-auto w-full sm:px-6  px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className='pt-36 '><Tarjeta experienceCard={experienceCard} /></div>

            </div>

            </>
          } />

        <Route path="/formulariopago/:id" element={
        <>
        <div className="bg-black mx-auto w-full sm:px-6  px-8">
          <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
          <div className='pt-36 '><FormularioPago experienceCard={experienceCard} /></div>
          </div>
         
        </>
        } />
        </Routes>
        
      </Router>
    </>
  );
};

export default App;

//              

