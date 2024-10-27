import Link from 'next/link'
import React from 'react'
import Header from '../component/header/header'
import Footer from '../component/footer/footer'

const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <h1><b>About us</b></h1>
      <p>The Pet Care Organization, affectionately known as “PCO,” was established in 2013 as a Non-Profit Organization and stands as a beacon of hope for animals in Pakistan. The first-of-it’s-kind animal rescue organisation in Pakistan that rescues and rehabilitates abused, injured and homeless street animals alongside highlighting the important role of empathy and compassion to help create a much more civilised and kinder society. Their mission is to help animals and people integrate and live as one in their environment, and highlight issues regarding animals that have direct relevance to other issues in society.

If you represent this organization, you can take control of this listing and regularly update it.

</p>
<br/>
<Link href="/">Back to Home page</Link>
<Footer></Footer>
    </div>
  )
}

export default AboutPage
