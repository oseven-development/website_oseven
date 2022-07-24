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

export interface ChildImageSharp {
  childImageSharp: {
    gatsbyImageData: {
      backgroundColor: string
      height: number
      images: {
        fallback: {
          sizes: string
          src: string
          srcSet: string
        }
      }
      layout: 'constrained' | 'fixed'
      width: number
    }
  }
}
