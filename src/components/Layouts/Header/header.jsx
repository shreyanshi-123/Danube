import './Header.css';
import { useNavigate } from 'react-router-dom';
// import logo from '../../../assests/images/damac-logo.svg';
import DanubelogoBlack from '../../../assests/images/denube-header-logo.png';
import DanubelogoWhite from '../../../assests/images/logofooter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPhone, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import EnquireForm from '../EnquireForm/EnquireForm';
// import popupImg from '../../../assests/images/popup-img.jpg';
import React from 'react';
import i18n from '../../../i18n';

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import LanguageSwitcher from '../languageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split('/');

  const [scrollClass, setScrollClass] = useState('scroll');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationPath, setLocationPath] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMenuClick = (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    console.log (document.getElementById(e.target.dataset));
    const element = document.getElementById(id);
   
    if (element) {
      element.style.scrollMarginTop = '50px';
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const DanubeMenuLinks = [
    { name: t('navigation.about_us'), redirect: '/about-us', id: 'about-us' },
    { name: t('navigation.latest_launch'), redirect: '/new-launches', id: 'new-launches' },
    { name: t('navigation.projects'), redirect: '/featured-project', id: 'featured-project' },
    { name: t('navigation.danube_properties'), redirect: '/why-danube', id: 'why-danube' },
    { name: t('navigation.invest_in_dubai'), redirect: '/why-dubai', id: 'why-dubai' },
    { name: t('navigation.contact_us'), redirect: '/contact-us', id: 'contact-us' }
  ];
  // const handleMenuClick = (e) => {
  //   // e.preventDefault();
    
  //   const { id } = e.target.dataset;
  //   console.log("Clicked Link ID:", id);  // Check the id value
   
  //   if (id) {
  //     navigate('/', { replace: true });
  //     const element = document.getElementById(id);
  //     console.log("Target Element:", element);  // Check if the element exists
  //     // element.scrollIntoView({ behavior: 'smooth' });
  //     if (element) {
  //       element.style.scrollMarginTop = '50px';
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };
  
  useEffect(() => {
    const listenScrollEvent = () => {
      if (locationValue[1] === "" ||  DanubeMenuLinks.some(item => item.id === locationValue[1])) {
        const newScrollClass = window.scrollY > 50 ? 'scrolled' : 'scroll';
        setScrollClass(newScrollClass);
      } else {
        setScrollClass('scroll');
      }
    };


    window.addEventListener("scroll", listenScrollEvent);

    if (location.hash && location.hash.slice(1) !== locationPath) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setLocationPath(location.hash.slice(1))
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // console.log(location.pathname.split("/"))

    if(DanubeMenuLinks.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath){
      const path = location.pathname.split("/")[1];
      const element = document.getElementById(path);

      if (element) {
        setLocationPath(path)
        element.style.scrollMarginTop = '50px';
        element.scrollIntoView({ behavior: 'smooth' });
        
      }
    }

    // eslint-disable-next-line
  }, [location, locationValue, locationPath]);
  
  
  // Check if the current page should have the "home-header" class
  const isDanubePage = pathname.includes('/');
  const isHomePage = locationValue[1] === '' || DanubeMenuLinks.some(item => item.id === locationValue[1]);

  return (
    <>
      <header className={`danube-header px-2.5 bg-primary-bg top-0 z-20 w-full ${scrollClass} ${isHomePage ? 'sticky home-header' : 'sticky'} ${isDanubePage ? 'danubeHeader' : ''}`}>
        <div className="danube-header-inner max-w-6xl mx-auto flex items-center justify-between py-[17px]">
          <div className="logo-container">
            <NavLink to="/" className="header-logo-black" reloadDocument={true}>
              <LazyLoadImage src={DanubelogoBlack} alt="Danube Properties" className="header-logo w-40" />
            </NavLink>
            <NavLink to="/" className="header-logo-white" reloadDocument={true}>
              <LazyLoadImage src={DanubelogoWhite} alt="Danube Properties" className="header-logo w-40" />
            </NavLink>
          </div>
          <div className='flex'>
            <div  className='flex'>
              <nav className="danube-nav hidden lg:flex gap-3">
                {/* {DanubeMenuLinks.map((item, i) => ( */}
                  {/* // <Link smooth="true" to={item.redirect} data-id={item.id} key={i} onClick={handleMenuClick} className="danube-nav-link relative text-xs font-medium px-0 xl:px-1 leading-[1] flex items-center text-black uppercase animated-underline" >{t(item.name)}</Link> */}
                  {locationValue[1] === "" ?

                    DanubeMenuLinks.map((item, i) => (
                      <Link smooth="true" to={item.redirect} key={i} className="danube-nav-link relative text-xs font-medium px-0 xl:px-1 leading-[1] flex items-center text-black uppercase animated-underline" data-id={item.id} onClick={(e) => handleMenuClick(e)}>{item.name}</Link>
                    ))
                  :
                  DanubeMenuLinks.map((item, i) => (
                      <Link smooth="true" to={item.redirect} key={i} className="danube-nav-link relative text-xs font-medium px-0 xl:px-1 leading-[1] flex items-center text-black uppercase animated-underline" >{item.name}</Link>
                    ))
                    
                  } 
                  {/* // <Link */}
                  {/* //   key={i}
                  //   to={item.redirect}
                  //   className="danube-nav-link relative text-xs font-medium px-0 xl:px-1 leading-[1] flex items-center text-black uppercase animated-underline"
                  //   onClick={handleMenuClick}
                  //   data-id={item.id}
                  // >
                  //   {t(item.name)}
                  // </Link> */}
                {/* // ))} */}

              </nav>
              <LanguageSwitcher />
            </div>
            <div className="lg:hidden lastdiv flex flex-row lg:flex-col">
              {/* <div className="flex item-center"><LanguageSwitcher /></div> */}
              <button className="lg:hidden p-2 text-black" onClick={toggleMobileMenu} aria-label="Open mobile menu">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-md z-30 z-[99999]">
              <div className="flex justify-end p-4">
                <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={toggleMobileMenu} />
              </div>
              <nav className="flex flex-col items-center mt-4">
                {DanubeMenuLinks.map((item, i) => (
                  <Link key={i} to={item.redirect} className="text-lg font-medium py-2 px-4 hover:text-primary-yellow uppercase" onClick={toggleMobileMenu}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Download Brochure Button */}
      <div className="sticky h-0 z-10" style={{ top: "50%" }}>
        <div className={` ${i18n.language === 'ar' ? 'arabicSelected' : ''} ${i18n.language === 'en' ? 'EnglishSelected' : ''} ${i18n.language === 'fr' ? 'frenchSelected' : ''} absolute -rotate-90 flex gap-1 side-icons`} style={{ [i18n.language === 'ar' ? 'left' : 'right']: '-151px' }}>
          <NavLink to='https://api.whatsapp.com/send?phone=910000000000' target="_blank" className="bg-primary-yellow text-white items-center border-primary-yellow overflow-hidden side-whatsapp side-option">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white pr-1 rotate-90" />
          </NavLink>

          <NavLink to="mailto:dannube@gmail.com" className="side-option text-xxs sm:text-sm 1xl:text-md flex items-center header-nav-link rotate-90 bg-primary-yellow side-item">
            <FontAwesomeIcon icon={faEnvelope} className="text-white pr-1" />
          </NavLink>

          <NavLink to="tel:+910000000000" className="side-option text-xxs sm:text-sm 1xl:text-md flex items-center header-nav-link rotate-90 bg-primary-yellow side-item">
            <FontAwesomeIcon icon={faPhone} className="text-white pr-1" />
          </NavLink>

          <button tabIndex='-1' className="side-option w-max text-xs lg:text-[15px] capitalize cursor-pointer bg-primary-yellow rounded-[3px] text-white py-1 px-3.5 lg:py-2 lg:px-3.5 download-broucher-btn" onClick={handleOpen}>{t('download_brochure')}</button>
        </div>
      </div>

      {/* Popup */}
      <Dialog open={isModalOpen} onClose={handleClose} className="form_popup" aria-hidden="false">
        <div className="flex flex-col px-2.5 popup-form">
          <div className="flex justify-end p-[10px] btn-cls">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <EnquireForm title={t('popupTitle')} button={t('Submit')} setOpen={setIsModalOpen} />
        </div>
      </Dialog>
    </>
  );
};

export default Header;
