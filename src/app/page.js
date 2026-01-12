import ClientReview from "./components/ClientReview/ClientReview";
import Experience from "./components/Experience/Experience";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import HomeContact from "./components/HomeContact/HomeContact";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import ServicePlace from "./components/ServicePlace/ServicePlace";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";


export default function Home() {
  return (
  
  <div>
  

    <Hero/>
     <ServicePlace/>
    <WhatWeDo/>
    <Experience/>
    <Gallery/>
    <Menu/>
    <News/>
    {/* <ClientReview/> */}
    <HomeContact/>

   
  </div>

  );
}
