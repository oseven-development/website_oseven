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
  subtitleColor?: TColor
  subtitle?: string
  image?:
    | {
        src: any
        alt?: string
        type: 'svg' | 'jpg'
      }
    | {
        src: any
        alt?: string
        type: 'svg' | 'jpg'
      }[]
  text?: string | JSX.Element
  imageDirection?: 'row' | 'column'
}

const Content = (props: IContent) => {
  const {title, subtitle, image, text, titleColor, subtitleColor, imageDirection} = props
  console.log(Array.isArray(image))
  return (
    <React.Fragment>
      {title ? (
        <React.Fragment>
          <Typography variant="h1" color={titleColor ? titleColor : 'default'} margin={subtitle ? '0' : ''}>
            {title}
          </Typography>
          {subtitle ? (
            <React.Fragment>
              <StyledSubtitle />
              <Typography variant="h2" color={subtitleColor ? subtitleColor : 'default'} margin={'0'}>
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
                <Box key={e.alt} style={{height: '100%', width: '100%'}}>
                  {e.type === 'svg' ? e.src : <Image src={e.src} alt={e.alt} />}
                </Box>
              ))}
            </Flex>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {image.type === 'svg' ? image.src : <Image src={image.src} alt={image.alt} />}
          </React.Fragment>
        )
      ) : null}

      {text ? (
        <React.Fragment>
          <Typography variant="p">{text}</Typography>
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
