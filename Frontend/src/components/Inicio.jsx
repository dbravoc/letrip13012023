import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';


const navigation = [
  { name: 'Ciclismo', href: '#', current: true },
  { name: 'Pesca', href: '#', current: false },
  { name: 'Snowsports', href: '#', current: false },
  { name: 'Trekking/Camping', href: '#', current: false },
  { name: 'Buceo', href: '#', current: false },
  { name: 'Golf', href: '#', current: false },
  { name: 'Surf', href: '#', current: false },
  { name: 'Escalada', href: '#', current: false },
]

export default function Inicio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/">
            <img
              className="h-20 w-auto"
              src="/img/letrip logo blanco.png"
              alt="Logo de LeTrip"
            />
          </Link>
        </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className=" hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="bg-gray-700 text-gray-50 focus:outline-none focus:bg-white focus:text-black focus:ring-offset-2 rounded-lg px-4 py-2 m-1 transition-all ease-in-out duration-100">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-50">
              Escríbenos un whatsapp <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50  text-gray-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Le Trip</span>
                <img
                  className="h-8 w-auto"
                  src="src/assets/img/letrip logo blanco.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menu</span>
                <XMarkIcon className="h-6 w-6 text-gray-50" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4d00f3] to-[#00c033] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00770e] to-[#0042e6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
