import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <div className="py-5 border-t-letrip border-t-2 bg-black">
          <h2 className="text-center text-lg font-semibold leading-8 text-yellow-100 pb-5">
          ¿Quiéres formar parte de Le trip?
          </h2>
          <div className="flex justify-center items-center">
          <Link 
            to='/request'
            className="relative z-10 flex font-semibold  justify-center items-center mt-1 hover:bg-letrip  bg-yellow-100 text-black focus:ring-offset-2 rounded-lg px-4 py-2 ease-in-out duration-50 text-center"
            >Solicítanos publicar tu experiencia

          </Link>
          </div>
      </div>
    );
  }
  