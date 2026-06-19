import React from 'react'
import Topbar from './Topbar'
import NavbarElement from './NavbarElement'
import Footer from './Footer'
import Copyright from './Copyright'
import Reviews from '../pages/Reviews'

const NewReviews = () => {
  return (
    <>
    {/* <Topbar></Topbar> */}
    <NavbarElement></NavbarElement>
    <div>
      <Reviews></Reviews>
    </div>
    <Footer></Footer>
    <Copyright></Copyright>
    </>
  )
}

export default NewReviews
