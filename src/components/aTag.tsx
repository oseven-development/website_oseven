/** @format */
import React from 'react'
interface Props {
  href: string
  children: any
  className?: string
}
export default ({href, children, className}: Props) => (
  <a className={className} href={href} rel="noopener nofollow noreferrer">
    {children}
  </a>
)
