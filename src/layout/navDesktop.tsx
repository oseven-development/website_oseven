/** @format */

import {Link} from 'gatsby'
import React from 'react'
import Logo from '../assets/logos/logo.svg'

export default () => (
  <header className="hidden lg:flex bg-primary py-6 text-white max-w-screen-lg mx-auto px-4">
    <Link className="flex-1" to="/">
      <Logo className="w-32 fill-current text-white" />
    </Link>
    <nav>
      <ul className="text-white flex font-thin">
        <li className="mr-8">
          <Link to="/UnsereArbeit">Unsere Arbeit</Link>
        </li>
        <li className="mr-8">
          <Link to="/UnsereDienstleistungen">Unsere Dienstleistungen</Link>
        </li>
        <li className="mr-8">
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  </header>
)
