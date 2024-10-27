import Link from 'next/link'
import React from 'react'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'

const ServicePge = () => {
  return (
    <div>
      <Header></Header>
     <h1>Our services include the following:
      <ul>
        <li>Services for Pet Adoption</li>
        <li>Community Support and Education</li>
        </ul>
        </h1> 
     <br/>
     <Link href="/">Back to Home page</Link>
     <br/>
     <Link href="/service/servicesforpetadoption">See PET ADOPTION services</Link>
     <br/>
     <Link href="/service/communitysupport">See COMMUNITY SUPPORT & EDUCATION services</Link>
     <Footer></Footer>
    </div>
  )
}

export default ServicePge
