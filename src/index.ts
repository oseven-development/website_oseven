/** @format */

export interface ImageQuery {
  file: {
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
}
