/** @format */
import BackgroundImage from 'gatsby-background-image'

// BoxLayoutType
// Container und Content ist von Philipp
// ContainerBox von Max
import Container, {ContainerBox} from './container'
import Content from './content'
import {Layout} from './Layout'

// Schriften
import Typography from './typography'

// Images
import Image from './image'
import SvgImage from './image/ImageSvg'
import Parallax from './image/parallax'
import BoxShadowBox from './image/boxer'

// Navigation
import Navigation from './navigation'

// Typography
import {TypographyRenderHelper} from './typography/typographyRenderHelper'

// Containers

// uniqueComponents
import Footer from './uniqueComponents/footer/footer'
import ContactButton from './uniqueComponents/ContactButton'
import List from './uniqueComponents/List'
import Particles from './uniqueComponents/particles'
import Project from './uniqueComponents/Project'

import {Seo} from './uniqueComponents/seo'
import SubNavigation from './uniqueComponents/subNavigation/index'

// headers
import HeaderNavigation from './header/headerNavigation'
import HeaderWithButtonGroup from './header/headerWithButtonGroup'
import HeaderWithSubNavigation from './header/headerWithSubNavigation'

// Boxes Higher Components
import CustomerBox from './customerBox/customerBox'
import PortraitBox from './portraitBox/portraitBox'
import SkillCardBox from './skillCardBox/SkillCard'

export {
  // BoxLayoutType
  ContainerBox,
  Layout,
  Container,
  Content,
  // Navigation
  Navigation,
  // Images
  BoxShadowBox,
  Image,
  Parallax,
  BackgroundImage,
  SvgImage,
  // Typography
  TypographyRenderHelper,
  Typography,
  // uniqueComponents
  Seo,
  Footer,
  ContactButton,
  Project,
  Particles,
  List,
  SubNavigation,
  // headers
  HeaderNavigation,
  HeaderWithButtonGroup,
  HeaderWithSubNavigation,
  // Boxes Higher Components
  CustomerBox,
  PortraitBox,
  SkillCardBox,
}
