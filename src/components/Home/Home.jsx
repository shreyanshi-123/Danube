import MetaData from "../Layouts/MetaData"
import Danube from '../DanubePage/Danube'
// import AboutSection from "./AboutSection/AboutSection"
// import Amenities from "./Amenities/Amenities"
// import BannerSlider from "./BannerSlider/BannerSlider"
// import Clubhouse from "./Clubhouse/Clubhouse"
// import LatestLaunches from "./LatestLaunches/LatestLaunches"
// import Gallery from "./Gallery/Gallery"
// import Location from "./Location/Location"
// import Community from "./Community/Community"
// import PriceList from "./PriceList/PriceList"
// import MasterPlan from "./MasterPlan/MasterPlan"

const Home = () => {
    return (
        <>
            <MetaData
                title={"Danube Properties Group Dubai | Luxury 3 & 4 BHK Apartments"}
                description={"Discover luxury apartments in Dubai by Danube Properties Group Dubai. Explore 3 BHK flats for sale in Dubai & 4 BHK apartments in a prime location."}
                keywords={"Danube Group, Danube Properties, 3 BHK flats Dubai, 3+1 BHK flats Dubai, 4+1 BHK flats Dubai, Luxury apartments Dubai, Luxury Flats in Dubai, Premium Property in Dubai, New Residential Project in Dubai"}
                canonicalUrl={process.env.REACT_APP_API_URL}
            />
            <Danube />
            {/* <BannerSlider />
            <AboutSection />
            <Amenities />
            <LatestLaunches />
            <Community />
            <MasterPlan/>
            <Location /> */}
            {/* <Clubhouse /> */}
            {/* <Gallery />
            <PriceList /> */}
        </>
    )
}

export default Home