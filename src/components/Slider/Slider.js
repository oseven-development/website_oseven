/** @format */

import React from 'react'
import Slider from 'react-slick'
import {StyledSlider} from './styled'
// import {Image} from 'rebass'
// import {StaticQuery, graphql} from 'gatsby'

export const _Slider = ({children, ...props}) => {
  const settings = {
    className: 'slider',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    arrows: false,
  }
  console.log({...props})
  return (
    <StyledSlider {...props}>
      <Slider {...settings}>
        {props.items.map(e => {
          return (
            <div key={e} className="slider">
              <div
                style={{
                  backgroundImage: `url(${e})`,
                  width: '100%',
                  height: '100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          )
        })}
      </Slider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: props.height,
          overflow: 'hidden',
          zIndex: 2,
          alignItems: 'center',
          position: 'absolute',
          top: 0,
        }}>
        {children}
      </div>
    </StyledSlider>
  )
}

// var images = require.context('../../images', true)
//FIXME: Dynamic require / import funktioniert nicht mit gatsby und require context funktioniert
//auch nicht das webpack das davor zusammen baut
// wenn man zeit ist schauen wie man dynamich webpack baut
//
// export const _Slider = ({children, ...props}) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: 'linear',
//   }
//   return (
//     <StaticQuery
//       query={graphql`
//         {
//           allFile(filter: {sourceInstanceName: {eq: "slider"}}) {
//             edges {
//               node {
//                 relativePath
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <StyledSlider {...props}>
//           <h2>Auto Play</h2>
//           <Slider {...settings}>
//             {data.allFile.edges.map(e => {
//               return (
//                 <div key={e} className="slider">
//                   <div
//                     style={{backgroundImage: `url(${path}/${e.node.relativePath})`, width: '100%', height: '100%'}}
//                   />
//                 </div>
//               )

//               const image = `${path}/${e.node.relativePath}`
//               const image = images('./slider/bool.jpg')
//               return <img src={image} alt={'test'} />
//             })}
//           </Slider>
//         </StyledSlider>
//         <StyledSlider {...props}>
//           <Slider {...settings}>{slideItems(data.allFile.edges)}</Slider>
//         </StyledSlider>
//       )}
//     />
//   )
// }
// const path = '../../assets/images/slider'
