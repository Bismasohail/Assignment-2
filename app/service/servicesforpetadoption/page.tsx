import Footer from '@/app/component/footer/footer'
import Header from '@/app/component/header/header'
import Link from 'next/link'

import React from 'react'

function service() {
  return (
    <div>
      <Header></Header>
      <h1><b>1. Services for Pet Adoption</b></h1>
<i><b>1.1 </b>Pet Adoption Programs</i>
<p>Pet organizations often run programs that facilitate the adoption of pets from shelters, including dogs, cats, and other animals. These programs aim to find loving homes for animals in need.</p>

<i><b>1.2 </b>Foster Care Initiatives</i>
<p>Foster programs recruit families to care for animals temporarily until they can be adopted. This helps alleviate overcrowding in shelters and provides a nurturing environment for pets.</p>
      <br/>
      <Link href="/service">Back to Service page</Link>
      <br/>
      <Link href="/">Back to Home page</Link>
      <Footer></Footer>
    </div>
  )
}

export default service
