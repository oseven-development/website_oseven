/** @format */

import React from 'react'
import styled from 'styled-components'

import SocialMediaIcons from './socialMediaIcons'

interface IProps {
  contactStack: {
    provider: 'facebook' | 'homepage' | 'instagram' | 'twitter' | 'whatsapp' | 'www' | 'youtube' | 'xing'
    linkTo: string
  }[]
}

export default ({contactStack}: IProps) => (
  <>
    <h3>Social Media</h3>
    <div>
      {contactStack.map(content => (
        <StyledContactItem key={content.linkTo}>
          <a href={content.linkTo}>
            <SocialMediaIcons provider={content.provider} />
          </a>
        </StyledContactItem>
      ))}
    </div>
  </>
)

// Styling für ein Contact-Item
const StyledContactItem = styled.div`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
  :not(:first-child) {
    /* margin-left: 40px; */
  }
  :not(:first-child):before {
    /* content: '';
    background: #777;
    width: 1px;
    height: 24px;
    left: -20px;
    display: inline-block;
    position: relative; */
  }
  span {
    margin-left: 8px;
    position: relative;
    top: -8px;
  }
`
