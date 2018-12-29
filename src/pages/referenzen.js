/** @format */

import React from 'react'
import {Link} from 'gatsby'
import {Layout, Slider} from '../components'
import img1 from '../assets/images/slider/business.jpg'
import img2 from '../assets/images/slider/computer.jpg'
import img3 from '../assets/images/slider/home-office.jpg'
import img4 from '../assets/images/slider/keyboard.jpg'
import img5 from '../assets/images/slider/laptop.jpg'
import img6 from '../assets/images/slider/mobile.jpg'
import img7 from '../assets/images/slider/notebook.jpg'
import img8 from '../assets/images/slider/notebook2.jpg'
import img9 from '../assets/images/slider/office.jpg'
import img10 from '../assets/images/slider/paper.jpg'
import img11 from '../assets/images/slider/table.jpg'

const ReferencePage = () => (
  <Layout>
    <Slider items={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]} height='500px'/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ReferencePage
