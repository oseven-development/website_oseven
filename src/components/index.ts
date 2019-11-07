/** @format */
import BackgroundImage from 'gatsby-background-image'

// container
// import Container, {ContainerBox} from './container/containerBox'
import {ContainerBox} from './container/containerBox'

// content
import Content from './content'
import {ContentDivider} from './content/contentDivider'
import {ContentImgGallery} from './content/contentImgGallery'
import {DoubleContentBox} from './content/contentBox'

// content => preAssemble
import CustomerBox from './content/contentCustomerCard/customerCard'
import PortraitBox from './content/contentPortrait/Portrait'
import SkillCardBox from './content//contentSkillCard/SkillCard'

// header
import HeaderNavigation from './header/headerNavigation'
import HeaderWithButtonGroup from './header/headerWithButtonGroup'
import HeaderWithSubNavigation from './header/headerWithSubNavigation'

// layout
import {Layout} from './Layout'
import Navigation from './Layout/navigation'
import Footer from './Layout/footer/footer'
import SubNavigation from './Layout/navigation/subNavigation'

// uniqueComponents
import List from './uniqueComponents/list'
import Particles from './uniqueComponents/particles'
import Seo from './uniqueComponents/seo'
import BoxShadowBox from './uniqueComponents/shadowBox'
// uC => button
import ContactButton from './uniqueComponents/button/contactButton'
// uC => images
import Image from './uniqueComponents/image/image'
import SvgImage from './uniqueComponents/image/SvgImage'
import Parallax from './uniqueComponents/image/parallax'
// typography
import Typography from './uniqueComponents/typography'
import {TypographyRenderHelper} from './uniqueComponents/typography/typographyRenderHelper'

export {
  BackgroundImage,
  // BoxLayoutType
  ContainerBox,
  // content
  Content,
  ContentDivider,
  ContentImgGallery,
  DoubleContentBox,
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
  List,
  BoxShadowBox,
  // uniqueComponents => buttons

  ContactButton,
  // uniqueComponents => images
  Image,
  Parallax,
  SvgImage,
  // // uniqueComponents => typography
  TypographyRenderHelper,
  Typography,
}
