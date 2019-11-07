/** @format */
import BackgroundImage from 'gatsby-background-image'

// container
// import Container, {ContainerWrapper} from './container/ContainerWrapper'
import {ContainerWrapper} from './container/containerWrapper'
import {DoubleContentBox} from './container/containerContent'

// content
import Content from './content'
import {ContentDivider} from './content/contentDivider'
import {ContentImgGallery} from './content/contentImgGallery'

// content => preAssemble
import CustomerBox from './content/contentCustomerCard/customerCard'
import PortraitBox from './content/contentPortrait/Portrait'
import SkillCardBox from './content//contentSkillCard/SkillCard'

// header
import HeaderNavigation from './header/headerNavigation'
import HeaderWithButtonGroup from './header/headerWithButtonGroup'
import HeaderWithSubNavigation from './header/headerWithSubNavigation'

// layout
import {Layout} from './layout'
import Navigation from './layout/navigation'
import Footer from './layout/footer/footer'
import SubNavigation from './layout/navigation/subNavigation'

// uniqueComponents
import {JumpAnchor} from './uniqueComponents/jumpAnchor'
import List from './uniqueComponents/list'
import Particles from './uniqueComponents/particles'
import Seo from './uniqueComponents/seo'
import ShadowBox from './uniqueComponents/shadowBox'
// uC => button
import ContactButton from './uniqueComponents/button/contactButton'
// uC => images
import Image from './uniqueComponents/image/image'
import SvgImage from './uniqueComponents/image/SvgImage'
import Parallax from './uniqueComponents/image/parallax'
// typography
import Typography from './uniqueComponents/typography'
import {TypographyRenderHelper, TypographyRenderP} from './uniqueComponents/typography/typographyRenderHelper'

export {
  BackgroundImage,
  // container
  ContainerWrapper,
  DoubleContentBox,
  // content
  Content,
  ContentDivider,
  ContentImgGallery,
  //content => preAssemble
  CustomerBox,
  PortraitBox,
  SkillCardBox,
  // header
  HeaderNavigation,
  HeaderWithButtonGroup,
  HeaderWithSubNavigation,
  // layout
  Layout,
  Navigation,
  Footer,
  SubNavigation,
  // uniqueComponents
  Seo,
  Particles,
  JumpAnchor,
  List,
  ShadowBox,
  // uniqueComponents => buttons

  ContactButton,
  // uniqueComponents => images
  Image,
  Parallax,
  SvgImage,
  // // uniqueComponents => typography
  Typography,
  TypographyRenderHelper,
  TypographyRenderP,
}
