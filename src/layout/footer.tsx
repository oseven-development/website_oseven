/** @format */

import {Link} from 'gatsby'
import React from 'react'
import {LinkButton} from '../components'

interface Props {
  langKey: string
}

export default ({langKey}: Props) => (
  <footer className="flex flex-col py-12">
    <h2 className="mx-auto md:w-6/12 text-center text-4xl pb-12">
      {langKey === 'de'
        ? 'Wir freuen uns, mit dir zusammenzuarbeiten.'
        : 'We&apos;d love to work with you.'}
    </h2>
    <LinkButton to={`/${langKey === 'de' ? '' : langKey + '/'}kontakt`} primary={false}>
      {langKey === 'de' ? 'Kontakt' : 'Contact'}
    </LinkButton>
    <div className="mx-auto pt-12">
      <ul className="flex">
        <li className="pr-8">
          <Link to="/agbs">AGBs</Link>
        </li>
        <li className="pl-8">
          <Link to="/impressum">Impressum</Link>
        </li>
      </ul>
    </div>
  </footer>
)
