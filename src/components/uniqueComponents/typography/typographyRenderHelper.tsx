/** @format */

import React from 'react'

interface ITypography {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'pbr'
  content: string | string[]
}

interface ITypography2 {
  content: string[]
}

const TypographyRenderP = ({content}: ITypography2) => (
  <>
    {content.map(elm => (
      <p>{elm}</p>
    ))}
  </>
)

const TypographyRenderHelper = (props: ITypography) => {
  const {variant, content} = props
  return variant === 'h1' ? (
    Array.isArray(content) ? (
      <h1>
        {content.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </h1>
    ) : (
      <h1>{content}</h1>
    )
  ) : variant === 'h2' ? (
    Array.isArray(content) ? (
      <h2>
        {content.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </h2>
    ) : (
      <h2>{content}</h2>
    )
  ) : variant === 'h3' ? (
    Array.isArray(content) ? (
      <h3>
        {content.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </h3>
    ) : (
      <h1>{content}</h1>
    )
  ) : variant === 'p' ? (
    Array.isArray(content) ? (
      <>
        {content.map(elm => (
          <p>{elm}</p>
        ))}
      </>
    ) : (
      <p>{content}</p>
    )
  ) : variant === 'pbr' ? (
    Array.isArray(content) ? (
      <p>
        {content.map(elm => (
          <>
            {elm} <br />
          </>
        ))}
      </p>
    ) : (
      <p>{content}</p>
    )
  ) : null
}

export {TypographyRenderHelper, TypographyRenderP}
