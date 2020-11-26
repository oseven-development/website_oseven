/** @format */
import React from 'react'
import PhoneIcon from '../assets/svg/phone.svg'
import MailIcon from '../assets/svg/mail.svg'
interface Props {
  children: JSX.Element | string
  english?: boolean
}
export default ({children, english = false}: Props) => (
  <section className="py-16 md:py-32">
    <h1 className="text-4xl md:text-6xl md:w-9/12">{children}</h1>
    <h2 className="w-1/2 md:w-1/3 inline-block border-t-2 border-white pt-2">{english ? "Contact us" : "Kontaktiere uns"}</h2>
    <div className="space-y-4">
      <p>
        <a href="tel:+491634412159" className="flex items-center space-x-4 transform hover:-translate-y-1 duration-300 ease-in-out">
          <PhoneIcon className="w-12 h-12 fill-current text-secondary p-3" />
          <span className="text-lg">+49 163-44-12-159</span>
        </a>
      </p>

      <p>
        <a href="mailto:max@oseven.de" className="flex items-center space-x-4 transform hover:-translate-y-1 duration-300 ease-in-out">
          <MailIcon className="w-12 h-12 fill-current text-secondary p-1" />
          <span className="text-lg pb-2">max@oseven.de</span>
        </a>
      </p>
    </div>
  </section>
)
