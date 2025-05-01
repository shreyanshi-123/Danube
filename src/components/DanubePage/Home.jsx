import { useLocation } from "react-router-dom";
import Banner from './Banner/banner';
import About from './AboutUs/About';
import NewLaunches from './NewLaunches/newLaunches';
import Featured from './featuredProject/featuredProject';
import WhyDanube from './whyDanube/whyDanube'
import WhyDubai from './whyDubai/whyDubai'
import Owner from './AboutOwner/Owner'
import Contact from './Contact/contactPage'
import FAQ from "./Faq/faq";

const DanubePage = () => {



    return (
        <>
            <Banner />
            <About />
            <NewLaunches />
            <Featured />
            <WhyDanube/>
            <WhyDubai/>
            <Owner/>
            <Contact/>
            <FAQ/>
        </>

    )
}

export default DanubePage