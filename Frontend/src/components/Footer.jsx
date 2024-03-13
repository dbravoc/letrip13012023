import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div className="py-5 border-t-letrip border-t-2 bg-black mt-32 pb-32 pt-12">
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
    );
  }
  