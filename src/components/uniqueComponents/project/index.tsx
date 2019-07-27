/** @format */

import React from 'react'
import {Image} from '../..'
import {Flex, Box} from 'rebass'
import Typography from '../../typography'
import ContactButton from '../ContactButton'

interface IProject {
  title: string
  subtitle?: string
  icon?: any
  url: string
  text: string
  image?: any
}

const Project = (props: IProject) => {
  const {title, subtitle, icon, url, text, image} = props
  return (
    <React.Fragment>
      <Flex justifyContent={'center'} alignItems={'flex-start'} flexDirection={'column'}>
        {image ? (
          <Box>
            <Image src={Image} alt={title} />
          </Box>
        ) : null}
        <Box>
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" color={'default'}>
            {text}
          </Typography>
        </Box>
        <Box>
          <ContactButton text={'erfahre hier mehr dazu'} link={url} textColor={'secondary'} type={'out'} border />
        </Box>
      </Flex>
    </React.Fragment>
  )
}
export default Project
