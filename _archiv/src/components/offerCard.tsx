/** @format */
import React from 'react'
import {A} from '.'

interface Props {
  title: string
  logo: any
  logoLink?: string
  content: string[]
  technologie: {href: string; text: string}[]
}

const OfferCard = ({title, logo: Logo, logoLink, content, technologie}: Props) => (
  <div id={title} className="shadow-2xl px-8 py-12">
    <A href={logoLink || `#${title}`}>
      <Logo className="h-16 mx-auto" />
    </A>
    <h2>{title}</h2>
    {content.map((ctx, index) => (
      <p key={`${title}-${index}-content`} className="text-base leading-6 mb-2">
        {ctx}
      </p>
    ))}
    <h3>Technologien</h3>
    <p className="text-base leading-6">
      {technologie.map(({href, text}, index) => (
        <React.Fragment key={`${title}-${index}-technologie`}>
          <A href={href}>{text}</A> |{' '}
        </React.Fragment>
      ))}
    </p>
  </div>
)
export default OfferCard
