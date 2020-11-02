/** @format */
import React from 'react'

interface Props {
  children: string
}
export default ({children}: Props) => (
  <section className="pt-32 md:pt-64 pb-32 md:pb-64">
    <h1 className="text-4xl md:text-6xl md:w-9/12">{children}</h1>
  </section>
)
