/** @format */

import React from 'react'

import {references as SiteContent} from '../../assets'

import {ContentDivider, CustomerBox, ContainerWrapper, JumpAnchor} from '../../components'

const lang = 'de'

const Projects = () => (
  <>
    <JumpAnchor id={'currentProjects'} />
    <ContentDivider color={'secondary'} title={SiteContent.project.title[lang]} text={SiteContent.project.text[lang]} />

    <ContainerWrapper>
      {SiteContent.project.content.map(project => (
        <CustomerBox key={project.title[lang]} {...project} />
      ))}
    </ContainerWrapper>
  </>
)

export {Projects}
