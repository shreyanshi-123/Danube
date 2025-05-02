import { NavLink, useLocation, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import logo from '../../../assests/images/damac-logo.svg';
import Danubelogo from '../../../assests/images/logofooter.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const location = useLocation();
    const [locationPath, setLocationPath] = useState(null);
    const pathname = location.pathname;
    const locationValue = pathname.split('/');

    const DanubeMenuLinks = [
        { name: t('useful_links.about_us'), redirect: '/about-us', id: 'about-us' },
        { name: t('useful_links.why_danube_properties'), redirect: '/why-danube', id: 'why-danube' },
        { name: t('useful_links.latest_launch'), redirect: '/new-launches', id: 'new-launches' },
        { name: t('useful_links.why_invest_in_dubai'), redirect: '/why-dubai', id: 'whydubai' },
        { name: t('useful_links.feature_projects'), redirect: '/featured-project', id: 'featured-project' },
        { name: t('useful_links.faqs'), redirect: '/faq', id: 'faq' },
        { name: t('useful_links.contact_us'), redirect: '/contact-us', id: 'contact-us' }
    ];
   
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

    useEffect(() => {
        const listenScrollEvent = () => {
            if (locationValue[1] === "" || DanubeMenuLinks.some(item => item.id === locationValue[1])) {
                const newScrollClass = window.scrollY > 50 ? 'scrolled' : 'scroll';
                // setScrollClass(newScrollClass);
            } else {
                // setScrollClass('scroll');
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

        if (DanubeMenuLinks.some(item => item.id === location.pathname.split("/")[1]) && location.pathname.split("/")[1] !== locationPath) {
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

    const social = [
        { icon: faXTwitter },
        { icon: faFacebookF },
        { icon: faInstagram },
        { icon: faYoutube },
    ];

    return (
        <>

            <footer className="pt-20 px-2.5 danube-footer overflow-hidden">

                <div className="max-w-6xl mx-auto  relative z-[9]">
                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row justify-between gap-8 pb-20">
                        {/* Column 1 - Logo and Description */}
                        <div className="flex flex-col gap-4 lg:w-[27%]">
                            <div className="footer-logo-wrapper">
                                <NavLink to="/" className="" reloadDocument={true}>
                                    <LazyLoadImage
                                        src={Danubelogo}
                                        alt="Danube Properties"
                                        className="footer-logo"
                                    />
                                </NavLink>
                            </div>
                            <p className="text-sm sm:text-[16px] text-white font-normal leading-[1.2]">{t('discover_dream_home')}</p>
                        </div>

                        {/* Column 2 - Useful Links */}
                        <div className="flex flex-col gap-3 lg:w-[46%] m-0">
                            <div className="w-full md:w-auto flex flex-col gap-[15px] overflow-hidden items-start m-0 lg:mx-auto">
                                <h6 className=" text-[20px] font-medium text-left text-white">{t('useful_links.usefulLinks')}</h6>
                                <ul className="flex flex-col sm:grid grid-cols-[auto,auto] justify-center gap-y-[7px] gap-x-[20px]">
                                    {/* <li><NavLink to='/danube/aboutUs' className="text-sm sm:text-[16px] font-medium hover:text-primary-yellow text-white"><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5" /> About Us</NavLink></li> */}
                                    {/* {DanubeMenuLinks.map((item, i) => (
                                         <li className="pop-menu">    <Link smooth="true" to={item.redirect} data-id={item.id} key={i} onClick={handleMenuClick} className="text-sm sm:text-[16px]   text-white font-light" ><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5 " />{t(item.name)}</Link></li>
                                          
                                        ))} */}
                                    {locationValue[1] === "" ?

                                        DanubeMenuLinks.map((item, i) => (
                                            <li className="pop-menu">     <Link smooth="true" to={item.redirect} key={i} className="text-sm sm:text-[16px]   text-white font-light" data-id={item.id} onClick={(e) => handleMenuClick(e)}><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5 " />{item.name}</Link></li>
                                        ))
                                        :
                                        DanubeMenuLinks.map((item, i) => (
                                            <li className="pop-menu">     <Link smooth="true" to={item.redirect} key={i} className="text-sm sm:text-[16px]   text-white font-light" ><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5 " />{item.name}</Link> </li>
                                        ))

                                    }
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 - Follow Us */}
                        <div className="flex flex-col gap-3 lg:w-[27%]">
                            <h6 className="text-[20px] font-medium text-white">{t('follow_us')}</h6>
                            <ul className="flex flex-row gap-[10px] sm:gap-[10px]">
                                {social.map((item, i) => (
                                    <NavLink to="/" className="" reloadDocument={true}>
                                        <li key={i} className="denube-link social bg-black rounded-full  flex items-center justify-center hover:bg-white hover:text-black">

                                            <FontAwesomeIcon icon={item.icon} size={40} className="text-base text-white" />

                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col items-start text-left gap-1.5 px-0 pb-2.5">
                        <div className="disclaimer-content pb-16 flex flex-col gap-6">
                            <p className='text-md text-white hidden'>Channel Partner RERA Number : Coming Soon</p>
                            <p className='text-[22px] font-medium  text-primary-yellow text-white'>{t('DisclaimerHead')}</p>
                            <p className="text-sm sm:text-[16px] text-white font-light leading-[1.2]">1. {t('disclaimer.line_1')}.</p>
                            <p className=' text-sm sm:text-[16px] text-white font-light leading-[1.2]'>2. {t('disclaimer.line_2')}</p>
                            <p className=' text-sm sm:text-[16px] text-white font-light leading-[1.2]'>3. {t('disclaimer.line_3')}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8 py-8 w-full">
                            <div className="flex items-center justify-center lg:justify-start">
                                <p className='flex gap-1 mt-1.5 text-[12px] text-white font-light'>
                                    <NavLink to='/terms-conditions' target='_blank' className='text-primary-yellow  text-white underline  font-light pop-menu underline-offset-4'>{t('terms_and_conditions')}</NavLink> {t('and')}
                                    <NavLink to='/privacy-policy' target='_blank' className='text-primary-yellow  text-white underline  font-light pop-menu underline-offset-4'>{t('Privacy_policy')}</NavLink>
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end ">
                                <p className='mt-1.5 text-[12px] text-white font-light flex  gap-1'>
                                    {t('crafted_by')} <div className="pop-menu"><NavLink to='https://iosandweb.net/' target='_blank' className=' text-white pop-menu underline underline-offset-4'>IosAndWeb Technologies</NavLink></div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
