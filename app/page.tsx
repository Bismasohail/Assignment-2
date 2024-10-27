import Link from "next/link";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Hero from "./component/hero/herosection";
export default function Home(){
  return(
    <div>
      <Hero/>
  
     <Header></Header>
      <h1>Pet care organization is the most active animal rescue service for abused and injured animals in Karachi. It also has an animal sanctuary with qualified vets.</h1>
      
      <br/>
      <Link href="/about"> About Us</Link>
      <br/>
      <Link href="/contact"> Contact Us</Link>
      <br/>
      <Link href="/service"> Our Services</Link>
      <Footer></Footer>
      
    
    </div>
  )
}