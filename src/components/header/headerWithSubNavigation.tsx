/** @format */
import React from 'react'

import {Flex, Box} from 'rebass'

import {SvgImage, SubNavigation, TypographyRenderHelper, ContainerBox} from '../../components'

interface IProps {
  title: string | string[]
  subtitle: string | string[]
  nav: {label: string; href: string}[]
  SVG: any
}

export default ({title, subtitle, nav, SVG}: IProps) => (
  <ContainerBox>
    <Flex flexWrap="wrap" alignItems={'center'} justifyContent="space-between">
      <Box width={[1, 4 / 6]} my={[30, 0]}>
        <TypographyRenderHelper content={title} variant={'h1'} />
        <TypographyRenderHelper content={subtitle} variant={'pbr'} />

        <SubNavigation {...{nav}} />
      </Box>
      <Box width={[1, 2 / 6]} my={[30, 0]}>
        <div style={{textAlign: 'center'}}>
          <SvgImage mWidth={1} src={SVG} />
        </div>
      </Box>
    </Flex>
  </ContainerBox>
)
