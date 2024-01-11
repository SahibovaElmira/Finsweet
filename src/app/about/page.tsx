import React from "react";
import OurSponsor from "../components/OurSponsor/page";
import Footer from "../components/Footer/page";
import Copyright from "../components/Copyright/page";
import AboutHeader from "../components/AboutHeader/page";
import Item from "../components/Item/page";
import Achievements from "../components/Achievements/page";
import AboutOurTeam from "../components/AboutOurTeam/page";
import MeetOurTeam from "../components/MeetOurTeam/page";
import TopRow from "../components/TopRow/page";
import Cards from "../components/cards/page";
import OurSponsorTwo from "../components/OurSponsorTwo/page";

const About = () => {
  return  <div>
    <AboutHeader/>
    <Item/>
    <AboutOurTeam/>
    <MeetOurTeam/>
    <OurSponsorTwo/>
    <TopRow/>
    <Cards/>
    <OurSponsor/>
 <Footer/>
 <Copyright/>
</div>;
};

export default About;