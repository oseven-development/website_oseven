/** @format */

export interface ImageQuery {
  childImageSharp: {
    fluid: {
      aspectRatio: number
      base64: string
      sizes: string
      src: string
      srcSet: string
    }
  }
}
