import { Link } from 'react-router-dom';
import logo from '/public/img/letrip logo.png';


export default function Footer() {
    return (
      <>
      <div className="py-5 border-t-letrip border-t-2 bg-black mt-32 pb-24 pt-12">
          <h2 className="text-center text-lg font-semibold leading-8 text-yellow-100 pb-5">
          ¿Quieres formar parte de Le trip?
          </h2>
          <div className="flex justify-center items-center">
          <Link 
            to='/request'
            className="relative z-10 flex font-semibold  justify-center items-center mt-1 hover:bg-yellow-100 bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-2 ease-in-out duration-50 text-center"
            >Publica tu experiencia con nosotros

          </Link>
          </div>
      </div>
      <div className='bg-black flex flex-col justify-center items-center gap-y-2' >
        <img className="flex h-10 w-auto" src={logo} alt="Logo de LeTrip"/>
        <p className=' text-yellow-300 text-sm text-center font-light'>Somos <span className='font-bold'>Le Trip SpA</span>, una <span className='font-bold'>TravelTech</span> de experiencias deportivas.</p>
        <p className=' text-yellow-100 text-sm text-center font-light'>CEO: matias@letriplab.com - CCO: thomas@letriplab.com - CTO: david@letriplab.com</p>

      </div>

      </>

    );
  }
  