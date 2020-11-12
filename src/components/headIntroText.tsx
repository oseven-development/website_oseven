/** @format */
import React from 'react'

interface Props {
  children: string
}
export default ({children}: Props) => (
  <section className="pt-16 md:pt-32 pb-16 md:pb-32">
    <h1 className="text-4xl md:text-6xl md:w-9/12">{children}</h1>
  </section>
)
