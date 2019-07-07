/** @format */

import React from 'react'
import styled from 'styled-components'
import {Typography, Image} from '..'
import {Flex, Box} from 'rebass'
import {TColor} from '../../assets/theme/types'

// * Am unteren der Seite sind alle möglichen Beispiele

interface IContent {
  title?: string
  titleColor?: TColor
  titleAlign?: 'center'
  subtitleColor?: TColor
  subtitleAlign?: 'center'
  subtitle?: string
  maxTitle?: boolean
  image?:
    | {
        src: any
        alt?: string
        type: 'svg' | 'jpg'
        padding?: string | number
      }
    | {
        src: any
        alt?: string
        type: 'svg' | 'jpg'
        padding?: string | number
      }[]
  text?: string | JSX.Element
  textColor?: TColor
  imageDirection?: 'row' | 'column'
  divider?: boolean
}

const Content = (props: IContent) => {
  const {
    title,
    subtitle,
    textColor,
    image,
    text,
    titleColor,
    subtitleColor,
    imageDirection,
    maxTitle,
    divider,
    titleAlign,
    subtitleAlign,
  } = props
  return (
    <React.Fragment>
      {title || subtitle ? (
        <React.Fragment>
          <Typography
            variant={maxTitle ? 'title' : 'h1'}
            color={titleColor ? titleColor : 'default'}
            margin={subtitle ? '0' : ''}
            textAlign={titleAlign}>
            {title}
          </Typography>
          {subtitle ? (
            <React.Fragment>
              {divider ? <StyledSubtitle /> : null}
              <Typography
                variant="h2"
                color={subtitleColor ? subtitleColor : 'default'}
                margin={'0'}
                textAlign={subtitleAlign}>
                {subtitle}
              </Typography>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      ) : null}
      {image ? (
        Array.isArray(image) ? (
          <React.Fragment>
            <Flex
              flexDirection={imageDirection ? imageDirection : 'column'}
              justifyContent={'center'}
              alignItems={'center'}
              style={{width: '100%', height: '100%'}}>
              {image.map((e: any) => (
                <Box key={e.alt} style={{height: '100%', width: '100%'}} p={e.padding}>
                  {e.type === 'svg' ? (
                    <div style={{padding: e.padding ? e.padding : 0, textAlign: 'center'}}>{e.src}</div>
                  ) : (
                    <Image src={e.src} alt={e.alt} />
                  )}
                </Box>
              ))}
            </Flex>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {image.type === 'svg' ? (
              <div style={{padding: image.padding ? image.padding : 0, textAlign: 'center'}}>{image.src}</div>
            ) : (
              <div style={{padding: image.padding ? image.padding : 0}}>
                <Image src={image.src} alt={image.alt} />
              </div>
            )}
          </React.Fragment>
        )
      ) : null}

      {text ? (
        <React.Fragment>
          <Typography variant="p" color={textColor ? textColor : 'default'}>
            {text}
          </Typography>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  )
}
export default Content

const StyledSubtitle = styled.span`
  ::after {
    content: ' ';
    display: block;
    width: 4em;
    height: 1px;
    background: ${({theme}) => theme.colors.default};
  }
`
/*

 ? Content mit Überschrift unter Überschrift und Text
     <Content
          title="Test"
          titleColor="primary"
          subtitle="test2"
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
          }
        />
 ? Content mit Array von Imagen 
 ? bei Image entweder Type svg oder jpg bei jpg Image query
        <Content image={[{src: <Homescreen />, type: 'svg'}, {src: <Homescreen />, type: 'svg'}]} />
? single image
  <Content image={{src: <Homescreen />, type: 'svg'}} />
 */
