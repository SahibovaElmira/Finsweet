import React from "react";
import OurSponsor from "../components/OurSponsor/page";
import Footer from "../components/Footer/page";
import Copyright from "../components/Copyright/page";
import AboutHeader from "../components/AboutHeader/page";
import Item from "../components/Item/page";
import Achievements from "../components/Achievements/page";

const About = () => {
  return  <div>
    <AboutHeader/>
    <Item/>
    <OurSponsor/>
 <Footer/>
 <Copyright/>
</div>;
};

export default About;