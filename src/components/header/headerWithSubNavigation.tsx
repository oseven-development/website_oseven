/** @format */
import React from 'react'
import {ContainerBox} from '../'
import SubNavigation from '../uniqueComponents/subNavigation'

interface IProps {
  title: string | string[]
  subtitle: string | string[]
  nav: {label: string; href: string}[]
}

export default ({title, subtitle, nav}: IProps) => (
  <ContainerBox>
    {Array.isArray(title) ? (
      <h1>
        {title.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </h1>
    ) : (
      <h1>{title}</h1>
    )}

    {Array.isArray(subtitle) ? (
      <p>
        {subtitle.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </p>
    ) : (
      <p>{subtitle}</p>
    )}

    <SubNavigation {...{nav}} />
  </ContainerBox>
)
