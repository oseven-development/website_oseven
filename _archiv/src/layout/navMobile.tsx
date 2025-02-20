/** @format */

import React from 'react'
import { Link } from 'gatsby'

import { useWindowWidth } from '../hooks'
import Logo from '../assets/logos/logo.svg'
import Close from '../assets/svg/close.svg'
import Menu from '../assets/svg/menu.svg'
import FlagEnglish from '../assets/svg/flagEnglish.svg'
import FlagGerman from '../assets/svg/flagGerman.svg'

interface Props {
  langKey: 'de' | 'en'
  navigation: any
  langsMenu: any
}

const NavigationMobile = ({ langKey, navigation, langsMenu }: Props) => {
  const [toggle, setToggle] = React.useState(false)
  const width = useWindowWidth()

  const removeToggle = () => {
    const body = document.body
    body.classList.remove('overflow-hidden')
    setToggle(false)
  }

  const toggleMobileNavigation = () => {
    const body = document.body
    body.classList.toggle('overflow-hidden')
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <header className="lg:hidden bg-primary px-8 py-6 text-white flex">
        <Link className="flex-1" to={`/${langKey === 'de' ? '' : langKey + '/'}`} onClick={removeToggle}>
          <Logo className="w-32 fill-current text-white" />
        </Link>
        <div>
          {/* Menu Button */}
          <button
            aria-label="Menü Icon"
            type="button"
            className="flex items-center h-full text-dark-blue px-3 fill-current text-white  relativ"
            onClick={toggleMobileNavigation}>
            {toggle ? <Close className="w-8 fill-current" /> : <Menu className="h-full w-8" />}
          </button>

          {/* Navigation */}
          <nav
            style={{ top: 62 }}
            className={`fixed z-40 bottom-0 right-0 left-0 w-full h-full bg-primary transition transition-all duration-200  
                    ${toggle ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}
                    `}>
            <ul
              style={{ paddingBottom: 62 }}
              className={`flex flex-col h-full pt-12 text-right transform transition-transform  transition-all duration-200  
                  ${toggle ? 'translate-y-0' : 'translate-y-8'}`}
              onClick={toggleMobileNavigation}>
              {navigation.map((item: any) => (
                <li className="block px-4 py-4" key={item.to}>
                  <Link to={`/${langKey === 'de' ? '' : langKey + '/'}${item.to}`}>{item.label[langKey]}</Link>
                </li>
              ))}

              <span className="flex-1" />

              <li className={`block px-4 py-4 text-right   ${langKey !== 'de' && 'opacity-50'}`}>
                <Link to={langsMenu[0].link}>
                  <FlagGerman className="w-6 inline" />
                </Link>
              </li>
              <li className={`block px-4 py-4 ${langKey !== 'en' && 'opacity-50'}`}>
                <Link to={langsMenu[1].link}>
                  <FlagEnglish className="w-6 inline" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavigationMobile
