import Footer from '@/app/component/footer/footer'
import Header from '@/app/component/header/header'
import Link from 'next/link'
import React from 'react'

const Commsupport = () => {
  return (
    <div>
      <Header></Header>
      <h1><b>2. Community Support and Education</b></h1>
<i><b>2.1 </b>Educational Workshops</i>
<p>Pet organizations frequently conduct workshops and seminars on responsible pet ownership, training techniques, and animal care to empower pet owners with knowledge.</p>

<i><b>2.2 </b>Outreach and Awareness Campaigns</i>
<p>These organizations often engage in community outreach, raising awareness about animal welfare issues through events, fundraising, and volunteer opportunities.</p>
      <br/>
      <Link href="/service">Back to Service page</Link>
      <br/>
      <Link href="/">Back to Home page</Link>
      <Footer></Footer>
        </div>
  )
}

export default Commsupport
