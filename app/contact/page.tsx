import Link from 'next/link'
import React from 'react'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'
const ContactPage = () => {
  return (
    
    <div>
      <Header></Header>
      <h1>For contacting us:
      
        </h1>
        <br/>
        <p>Feel free to reach to us at <b>petcareorganization@gmail.com</b></p>
      <br/>
      <Link href="/">Back to Home page</Link>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage
