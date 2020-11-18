/** @format */
import React from 'react'
import Phone from '../assets/svg/phone.svg'
interface Props {
  children: string
  english?: boolean
}
export default ({children, english = false}: Props) => (
  <section className="pt-16 md:pt-32 pb-16 md:pb-32">
    <h1 className="text-4xl md:text-6xl md:w-9/12">{children}</h1>
    <a href="tel:+491634412159" className="flex transform hover:-translate-y-1 duration-300 ease-in-out">
      <div className="w-16 h-16 bg-secondary rounded-full p-4 mr-2 flex-shrink-0">
        <Phone className=" fill-current text-white " />
      </div>
      <h2 className="flex items-center font-hairline m-0">
        {!english ? 'Lass uns sprechen!' : 'Let us speak'} 0163-44-12-159
      </h2>
    </a>
  </section>
)
