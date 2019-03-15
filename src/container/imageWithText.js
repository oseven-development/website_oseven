/** @format */
import React from 'react'
import {Container, Headline} from '../components'
import {Flex, Box, Image} from 'rebass'
import theme from '../components/theme'

export const ImageWithText = props => {
  const {id, headline, subtitle, content, image, imageSide} = props.data.content
  const renderSide = imageSide === 'right' ? [renderContent, renderImage] : [renderImage, renderContent]
  return (
    <React.Fragment>
      <Container>
        {!headline ? (
          ''
        ) : (
          <Flex flexDirection="row" flexWrap="wrap" pt={[0, 20, 30]} alignItems="center">
            <Box width={1}>
              <Headline h1color={theme.colors.textBlack}>
                <h1 className="headline">
                  {headline[0]}{' '}
                  <span style={{backgroundColor: theme.colors.contrast, color: 'white', padding: '0 10px'}}>
                    {headline[1]}
                  </span>
                </h1>
              </Headline>
            </Box>
          </Flex>
        )}

        <Flex id={id} flexDirection="row" flexWrap="wrap" pt={[0, 20, 30]} alignItems="center">
          {renderSide[0](props.data.content)}
          {renderSide[1](props.data.content)}
        </Flex>
      </Container>
    </React.Fragment>
  )
}

const renderContent = props => (
  <Box p={theme.paddings} width={[1, 2 / 3, 3 / 4]}>
    <Headline h2color={theme.colors.main}>
      <h2>{props.subtitle}</h2>
    </Headline>
    <p>{props.content}</p>
  </Box>
)

const renderImage = props => (
  <Box p={theme.paddings} width={[1, 1 / 3, 1 / 4]}>
    <Image src={props.image} />
  </Box>
)
