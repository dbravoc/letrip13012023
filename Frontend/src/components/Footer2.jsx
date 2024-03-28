import { Link } from 'react-router-dom';
import logo from '/public/img/letrip logo.png';


export default function Footer() {
    return (
      <>

      <div className='bg-black border-t-letrip border-t-2 flex flex-col justify-center items-center gap-y-2 py-24' >
        <div className='pt-10'>
        <img className="flex h-10 w-auto" src={logo} alt="Logo de LeTrip"/>
        </div>
        <p className=' text-yellow-300 text-sm text-center font-light'>Somos <span className='font-bold'>Le Trip SpA</span>, una <span className='font-bold'>TravelTech</span> de experiencias deportivas.</p>
        <p className=' text-yellow-100 text-sm text-center font-light pb-8'>CEO: matias@letriplab.com - CCO: thomas@letriplab.com - CTO: david@letriplab.com</p>

      </div>

      </>

    );
  }
  