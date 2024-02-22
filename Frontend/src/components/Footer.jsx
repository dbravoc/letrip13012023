import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div className="py-5 border-t-yellow-700 border-t-2">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 pb-5">
          ¿Quiéres formar parte de Le trip?
          </h2>
          <div className="flex justify-center items-center gap-x-20 gap-y-10 sm:gap-x-30">
          <Link 
            to='/request'
            className="relative z-10 flex font-semibold  justify-center items-center mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-1 ease-in-out duration-50 text-center"
            >Solicítanos publicar tu experiencia

          </Link>
          </div>
      </div>
    );
  }
  