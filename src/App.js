import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './components/DanubePage/Home';
import Layout from './components/Layouts/Layout';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';
import PageNotFound from './components/Layouts/PageNotFound';
// import CookieConsent from "react-cookie-consent";
import Thankyou from './components/Thankyou';
// import LatestLaunchesPage from './components/LatestLaunchesPage/LatestLaunchesPage';
// import CommunityPage from './components/CommunityPage/CommunityPage';
// import MasterPlanPage from './components/MasterPlanPage/MasterPlanPage';
// import LocationPage from './components/LocationPage/LocationPage';
// import PriceListPage from './components/PriceListPage/PriceListPage';
// import GalleryPage from './components/GalleryPage/GalleryPage';
// import AmenitiesPage from './components/AmenitiesPage/AmenitiesPage';
import DanubePage from './components/DanubePage/Danube';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  // }, [i18n.language]);
  return (
    <>

      {/* <CookieConsent
        location="top"
        buttonText="Okay, Got It"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", color: "#000", padding: "0 20px", alignItems: "center", flexDirection: "column" }}
        buttonStyle={{ color: "#fff", fontSize: "16px", backgroundColor: "#C27C00", padding: "10px 30px" }}
        expires={150}
        overlay={true}
        containerClasses="cookie-banner"
        contentStyle={{textAlign: "center", flex: 1}}
        overlayStyle={{backgroundColor: "#00000099"}}
      >
        <p className='font-semibold text-xl mb-2'>Important</p> 'Danube Residences' serves solely as a platform for online advertising services and does not facilitate sales between developers and website users. The information displayed does not guarantee that a developer or project is registered or compliant with the Real Estate (Regulation and Development) Act, 2016. Please exercise caution and independently verify all project information before making any purchase or decision.
      </CookieConsent> */}

      <BrowserRouter basename='/danubeproperties' >
        <Routes >
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='terms-conditions' element={<TermsConditions />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='thankyou' element={<Thankyou />} />
            <Route path='community' element={<Home />} />
            <Route path='LatestLaunches' element={<Home />} />
            <Route path='pricelist' element={<Home />} />
            <Route path='gallery' element={<Home />} />
            <Route path='location' element={<Home />} />
            <Route path='MasterPlan' element={<Home />} />
            <Route path='amenities' element={<Home />} />
            <Route path='flats' element={<Home />} />
            <Route path='luxuryflats/3+1bhk' element={<Home />} />
            <Route path='danube' element={<DanubePage />} />
            <Route path='/WhyDanube' element={<DanubePage />} />
            <Route path='/whyDubai' element={<DanubePage />} />
            <Route path='/NewLaunches' element={<DanubePage />} />
            <Route path='/featured-project' element={<DanubePage />} />
            <Route path='/aboutUs' element={<DanubePage />} />
            <Route path='/faq-section' element={<DanubePage />} />
            <Route path='/Contact-section' element={<DanubePage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
