import React, { useEffect } from 'react'
import banner from './img/banner.png'
import { Link } from 'react-router-dom'

const Contact = () => {

  useEffect(() => {
    document.title = 'Aranya - Contact'
  })

  return (
    <>
      <div className="container my-2">
        <h1 className="text-center mp-5">Aranya</h1>
        <img src={banner} className="img-fluid" alt="..." />
      </div>

      <div className="container my-2 text-center"><h1>Get in Touch</h1></div>

      <div className="container my-3 bg-light text-dark">

        <h2 className="my-1 pt-4 " style={{
          fontStyle: 'italic'
        }} >Email Address</h2>
        <Link to="mailto: aranya@iittp.ac.in" target='blank' style={{
          textDecoration: 'none',
          color: 'black'
        }} >
          <h4 className="p-2" style={{
            fontWeight: 'bold'
          }} >aranya@iittp.ac.in</h4>
        </Link>


        <h2 className="my-1" style={{
          fontStyle: 'italic'
        }} >Instagram Account</h2>
        <Link to="https://www.instagram.com/aranya_iittp/" target='blank' style={{
          textDecoration: 'none',
          color: 'black'
        }} >
          <h4 className=" p-2 pb-4" style={{
            fontWeight: 'bold'
          }} >@aranya_iittp</h4>
        </Link>
      </div>
    </>
  )
}

export default Contact
