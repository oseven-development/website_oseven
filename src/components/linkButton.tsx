/** @format */

import {Link} from 'gatsby'
import React from 'react'

interface Props {
  to: string
  children: string
  primary?: boolean
}

export default ({to, children, primary = true}: Props) => {
  return (
    <Link
      className={`rounded-full ${primary ? 'bg-primary text-secondary' : 'ghost'}  px-6 py-4 inline-block mx-auto`}
      to={to}>
      {children}
    </Link>
  )
}
