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
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Snowtrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
      experience_video_invitacion: <iframe width="320" height="180" src="https://www.youtube.com/embed/K5yUtBVJrgU?si=lwIVLpPFD4CM1N6S&amp;start=68" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>,
    },
    {
      experience_id: '1',
      experience_name: 'Surftrip AP por Miramar', 
      experience_type: 'Surftrip',
      experience_location: 'Miramar',
      experience_country: 'Argentina',
      experience_description_small: 'En AP, vive una experiencia de surf única con clases expertas, alojamiento cómodo en nuestros chalets cercanos al mar y deliciosas comidas por nuestro chef surfista. Únete a nuestras memorables travesías 4x4 con música y fogón. ¡Una aventura inolvidable te espera!',
      experience_description_instructor_message: 'Una experiencia en la que vos sos el protagonista. Nuestros surftrips están pensados para que pases días inolvidables rodeado de buena energía, buena gente y un grupo de profesionales que te van a estar acompañando en cada momento. AP es mucho mas que surftrips, AP es una familia que no para de crecer y te estamos esperando.',
      experience_main_discipline: 'Surf',
      experience_geography:'Mar',
      experience_demand_level: 'Todos los niveles',
      experience_price_from: '1500',
      experience_video: <img className='object-cover min-w-full min-h-full rounded-xl' src="/img/SURFTRIP-3.jpg"></img>,
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
      experience_img_1: <img className='object-cover min-w-full min-h-full'   src='/img/SURFTRIP-3.jpg' ></img>,
      experience_img_2: <img className='object-cover min-w-full min-h-full'  src='/img/SURFTRIP-4.jpg' ></img>,
      experience_img_3: <img className='object-cover min-w-full min-h-full'   src='/img/comida.jpg' ></img>,
      experience_img_4: <img className='object-cover min-w-full min-h-full'  src='/img/foto-3.jpg' ></img>,
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
              <div className="bg-white mx-auto w-full sm:px-6  px-8">
                <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
                <div className='pt-36 pb-12'><Experiencias experienceCard={experienceCard} /></div>
              </div>
            </>
          } />
          
          <Route path="/tarjeta/:id" element={
            <>
            <div className="bg-white mx-auto w-full sm:px-6  px-8">
              <div className="flex flex-col justify-between flex-wrap"><Inicio /></div>
              <div className='pt-36 '><Tarjeta experienceCard={experienceCard} /></div>

            </div>

            </>
          } />

        <Route path="/formulariopago/:id" element={
        <>
        <div className="bg-white mx-auto w-full sm:px-6  px-8">
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

