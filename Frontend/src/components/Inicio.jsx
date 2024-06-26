import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBicycle, faFish, faPersonSkiing, faMountainSun, faSwimmer, faSpa, faWater,faPersonHiking, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import logo from '/public/img/letrip logo sin fondo.png';

const navigation = [
  { name: 'Ciclismo', href: '', current: true, icon: faBicycle}, //AGREGAR href: '' en cada deporte para habilitar link, 
  { name: 'Pesca', href: '', current: false, icon: faFish },
  { name: 'Snowsports', href: '', current: false, icon:faPersonSkiing },
  { name: 'Trekking/Camping', href: '', current: false, icon: faMountainSun },
  { name: 'Yoga', href: '', current: false, icon:faSpa },
  { name: 'Surf', href: '', current: false, icon: faWater },
  { name: 'Escalada', href: '', current: false, icon: faPersonHiking },
  { name: 'Otros', href: '', current: false, icon: faSwimmer },

]

export default function Inicio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-10" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/">
            <img
              className="h-10 w-auto z-10"
              src={logo}
              alt="Logo de LeTrip"
            />
          </Link>
        </div>


          <div className=" hidden md:flex md:gap-x-1">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 text-xs text-center focus:outline-none focus:text-black focus:text-base rounded-lg px-4 py-2 m-1 transition-all ease-in-out duration-50">
                  <div><FontAwesomeIcon icon={item.icon} /></div>
                  <div>{item.name}</div>
              </a>
            ))}
          </div>
          <div className="grid  flex-1 gap-y-2 text-end justify-end">
            <a href="https://wa.me/12028125753" className="md:leading-6 relative z-10 flex font-semibold  justify-center items-center mt-1 hover:bg-black hover:text-letrip bg-letrip text-black focus:ring-offset-2 rounded-lg px-4 py-2 ease-in-out duration-50 text-center">
            <span className='pr-2'>Conversemos</span> <FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-text-gray-700' />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#ffd505] opacity-30 md:left-[calc(50%-30rem)] md:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl md:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr  from-[#000000] to-[#ffd505]  opacity-30 md:left-[calc(50%+36rem)] md:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
                  <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#ffd505] opacity-30 md:left-[calc(50%-30rem)] md:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#ffd505] opacity-30 md:left-[calc(50%-30rem)] md:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl md:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#ffd505] opacity-30 md:left-[calc(50%-30rem)] md:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        </div>
      </div>
    </div>
  )
}
