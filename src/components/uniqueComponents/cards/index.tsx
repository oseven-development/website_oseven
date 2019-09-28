/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {Typography} from '../..'
import {Link} from 'gatsby'
interface ISkillCard {
  image?: any
  title: string
  text: string
  link: {
    label: string
    to: string
  }
}

const SkillCard = (props: ISkillCard) => {
  const {image, title, text, link} = props
  return (
    <React.Fragment>
      <Flex
        flexDirection={'column'}
        style={{boxShadow: '0 0 15px #565656'}}
        justifyContent={'center'}
        alignItems={'center'}
        pb={['20px', '40px']}>
        <Box width={1}>{image}</Box>
        <Box>
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box>
          <Typography>{text}</Typography>
        </Box>
        <Box>
          <Link to={link.to}>{link.label} </Link>
        </Box>
      </Flex>
    </React.Fragment>
  )
}
export default SkillCard
