/** @format */

import {Link} from 'gatsby'
import React from 'react'
import {LinkButton} from '../components'

export default () => (
  <footer className="flex flex-col py-12">
    <h2 className="mx-auto md:w-6/12 text-center text-4xl pb-12">
      Wir würden uns sehr freuen, mit dir zusammenzuarbeiten.
    </h2>
    <LinkButton to="/kontakt" primary={false}>
      Kontakt
    </LinkButton>
    <div className="mx-auto pt-12">
      <ul className="flex">
        <li className="pr-8">
          <Link to="/agbs">Agbs</Link>
        </li>
        <li className="pl-8">
          <Link to="/impressum">Impressum</Link>
        </li>
      </ul>
    </div>
  </footer>
)
