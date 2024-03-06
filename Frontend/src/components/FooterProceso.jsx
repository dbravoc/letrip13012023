import { faCircleCheck, faHeart, faList, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterProceso() {
    return (
      <div className="py-5 border-t-letrip border-t-2 bg-black mt-32 pb-32 pt-2">
        <h3 className="mt-36 text-center mb-10 text-2xl font-bold tracking-tight text-gray-100">Conoce nuestro proceso <span className='bg-letrip text-black font-semibold rounded-xl p-2'>Le trip</span></h3>
          <div className='grid grid-cols-5 gap-8 text-gray-500 text-center '>
    <ul className=''>
        <li><FontAwesomeIcon className='text-5xl text-gray-200' icon={faUserPlus} /></li>
        <li className='font-bold mt-3'>Operador Le Trip</li>
        <li className='text-xs'>Acordámos términos y condiciones y te conviertes en operador Le Trip.</li>
    </ul>
    
    <ul className='text-gray-200'>
        <li><FontAwesomeIcon className='text-5xl' icon={faMagnifyingGlass} /></li>
        <li className='font-bold mt-3'>Research</li>
        <li className='text-xs'>Te ayudamos a definir precios y estrategia en nuestra plataforma.</li>
    </ul>
    <ul className='text-gray-200'>
        <li><FontAwesomeIcon className='text-5xl' icon={faHeart} /></li>
        <li className='font-bold mt-3'>Optimización</li>
        <li className='text-xs'>En conjunto optimizamos paquetes, precios y buscamos mejoras.</li>
    </ul>
    <ul className='text-gray-200'>
        <li><FontAwesomeIcon className='text-5xl' icon={faList} /></li>
        <li className='font-bold mt-3'>Listing</li>
        <li className='text-xs'>Creación de listings en nuestra plataforma.</li>
    </ul>

    <ul className='text-gray-200'>
        <li><FontAwesomeIcon className='text-5xl' icon={faCircleCheck} /></li>
        <li className='font-bold mt-3'>Publica y vende</li>
        <li className='text-xs'>Una vez publicado, espera a que comiencen a caer tus primeras reservas</li>
    </ul>

</div>
</div>    
);
  }
  