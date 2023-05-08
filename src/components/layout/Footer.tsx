import React from "react"

import red3 from "../../images/instagram.svg"

const Footer = () => {
  return (
    <div className="bg-white mt-auto flex p-2 sm:p-6">
      <div className="w-screen py-4 text-gray1 font-semibold text-sm flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 flex justify-center order-1 sm:order-2">
          <a
            href="https://www.instagram.com/tu_historia_importa_"
            target="_blank"
            className="mx-2"
          >
            <img src={red3} className="w-8" alt="Instagram" />
          </a>
        </div>
        <div className="w-full sm:w-1/3 pt-4 sm:pt-0 order-2 sm:order-1 text-center sm:text-left">
          © THI. Tu historia importa 2022. Todos los derechos reservados.
        </div>
        <div className="w-full sm:w-1/3 text-center sm:text-right pt-2 sm:pt-0 order-3 sm:order-3">
          Diseño y desarollo web por{" "}
          <a
            className="underline"
            href="https://www.trazovivo.com"
            target="_blank"
          >
            Trazo Vivo
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
