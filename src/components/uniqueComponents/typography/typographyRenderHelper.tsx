/** @format */

import React from 'react'

interface ITypography {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'pbr'
  content: string | string[]
  title?: boolean
}

interface ITypography2 {
  content: string[]
}

const TypographyRenderP = ({content}: ITypography2) => (
  <>
    {content.map((elm, i) => (
      <p key={elm + i}>{elm}</p>
    ))}
  </>
)

const TypographyRenderHelper = (props: ITypography) => {
  const {variant, content, title} = props
  return variant === 'h1' ? (
    Array.isArray(content) ? (
      <h1 className={title ? 'title' : null}>
        {content.map(elm => (
          <React.Fragment key={elm}>
            {elm} <br />
          </React.Fragment>
        ))}
      </h1>
    ) : (
      <h1 className={title ? 'title' : null}>{content}</h1>
    )
  ) : variant === 'h2' ? (
    Array.isArray(content) ? (
      <h2 className={title ? 'title' : null}>
        {content.map(elm => (
          <React.Fragment key={elm}>
            {elm} <br />
          </React.Fragment>
        ))}
      </h2>
    ) : (
      <h2 className={title ? 'title' : null}>{content}</h2>
    )
  ) : variant === 'h3' ? (
    Array.isArray(content) ? (
      <h3>
        {content.map(elm => (
          <React.Fragment key={elm}>
            {elm} <br />
          </React.Fragment>
        ))}
      </h3>
    ) : (
      <h3>{content}</h3>
    )
  ) : variant === 'p' ? (
    Array.isArray(content) ? (
      <>
        {content.map((elm, i) => (
          <p key={elm + i}>{elm}</p>
        ))}
      </>
    ) : (
      <p>{content}</p>
    )
  ) : variant === 'pbr' ? (
    Array.isArray(content) ? (
      <p>
        {content.map(elm => (
          <React.Fragment key={elm}>
            {elm} <br />
          </React.Fragment>
        ))}
      </p>
    ) : (
      <p>{content}</p>
    )
  ) : null
}

export {TypographyRenderHelper, TypographyRenderP}
