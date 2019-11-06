/** @format */
import React from 'react'

import {Flex, Box} from 'rebass'

import {SvgImage, ContactButton, TypographyRenderHelper, ContainerBox} from '../../components'

interface IProps {
  title: string | string[]
  subtitle: string | string[]
  SVG: any
  buttonGroup: {link: string; display: string} | {link: string; display: string}[]
}

export default ({title, subtitle, buttonGroup, SVG}: IProps) => (
  <ContainerBox>
    <Flex flexWrap="wrap" alignItems={'center'} justifyContent="space-between">
      <Box width={[1, 4 / 6]} my={[30, 0]}>
        <TypographyRenderHelper content={title} variant={'h1'} />
        <TypographyRenderHelper content={subtitle} variant={'p'} />

        {/* Render Button grp */}
        {Array.isArray(buttonGroup) ? (
          <>
            {buttonGroup.map(elm => (
              <ContactButton text={elm.display} link={elm.link} textColor={'primary'} extern border />
            ))}
          </>
        ) : (
          <ContactButton text={buttonGroup.display} link={buttonGroup.link} textColor={'primary'} extern border />
        )}
      </Box>
      <Box width={[1, 2 / 6]} my={[30, 0]}>
        <div style={{textAlign: 'center'}}>
          <SvgImage mWidth={1} src={SVG} />
        </div>
      </Box>
    </Flex>
  </ContainerBox>
)
