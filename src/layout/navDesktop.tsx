/** @format */

import {Link} from 'gatsby'
import React from 'react'
import Logo from '../assets/logos/oseven-logo.svg'
import FlagEnglish from '../assets/svg/flagEnglish.svg'
import FlagGerman from '../assets/svg/flagGerman.svg'

interface Props {
  langKey: 'de' | 'en'
  navigation: any
  langsMenu: any
}

export default ({langKey, navigation, langsMenu}: Props) => {
  return (
    <header className="hidden lg:flex bg-primary py-6 text-white max-w-screen-lg mx-auto px-4">
      <Link className="" to={`/${langKey === 'de' ? '' : langKey + '/'}`}>
        <Logo className="w-32 fill-current text-white" />
      </Link>
      <ul className="text-white flex font-thin ml-8">
        <li className={`mr-4 self-center ${langKey !== 'de' && 'opacity-50'}`}>
          <Link to={langsMenu[0].link}>
            <FlagGerman className="w-6" />
          </Link>
        </li>
        <li className={`mr-4 self-center ${langKey !== 'en' && 'opacity-50'}`}>
          <Link to={langsMenu[1].link}>
            <FlagEnglish className="w-6" />
          </Link>
        </li>
      </ul>
      <div className="flex-1"></div>
      <nav>
        <ul className="text-white flex font-thin">
          {navigation.map(item => (
            <li className="ml-8 self-center" key={item.to}>
              <Link to={`/${langKey === 'de' ? '' : langKey + '/'}${item.to}`}>{item.label[langKey]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
