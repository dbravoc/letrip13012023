export default function Footer() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 pb-10">
            Nuestros colaboradores
          </h2>
          <div className="flex justify-center items-center gap-x-20 gap-y-10 sm:gap-x-30">
            <a href="">
            <img
              className="max-h-20 w-auto object-contain"
              src=""
              alt="Transistor"
              width={200}
              height={48}
            />
            </a>
            <a href="">
            <img
              className="max-h-20 w-auto object-contain"
              src=""
              alt="Reform"
              width={300}
              height={300}
            />
            </a>
          </div>
        </div>
      </div>
    );
  }
  