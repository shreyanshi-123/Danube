import { NavLink, useLocation } from "react-router-dom";
import logo from '../../../assests/images/damac-logo.svg';
import Danubelogo from '../../../assests/images/DanubeProperties/logofooter.png';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [locationPath, setLocationPath] = useState(null);

    useEffect(() => {
        const path = location.hash ? location.hash.substring(1) : null;
        if (path && path !== locationPath) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.style.scrollMarginTop = '100px'; 
                element.scrollIntoView({ behavior: 'smooth' });
                setLocationPath(path);
            }
        }

    }, [location, locationPath]);

    const isDanubePage = location.pathname.includes("danube");

    const menuLinks = [
        { name: "Amenities", redirect: "/amenities", id: "amenities" },
        { name: "Latest Launches", redirect: "/latest-launches", id: "latest-launches" },
        { name: "Community", redirect: "/community", id: "community" },
        { name: "Master Plan", redirect: "/master-plan", id: "master-plan" },
        { name: "Location", redirect: "/location-map", id: "location-map" },
        { name: "Gallery", redirect: "/galleries", id: "galleries" },
        { name: "Price List", redirect: "/price-list", id: "price-list" },
    ];

    const DanubeMenu = [
        { name: t('useful_links.about_us'), redirect: "#aboutUs", id: 'aboutUs' },
        { name: t('useful_links.why_danube_properties'), redirect: "#WhyDanube", id: 'WhyDanube' },
        { name: t('useful_links.latest_launch'), redirect: "#NewLaunches", id: 'NewLaunches' },
        { name: t('useful_links.why_invest_in_dubai'), redirect: "#whyDubai", id: 'whyDubai' },
        { name: t('useful_links.feature_projects'), redirect: "#featured-project", id: 'featured-project' },
        { name: t('useful_links.faqs'), redirect: "#faq-section", id: 'faq-section' },
        { name: t('useful_links.contact_us'), redirect: "#Contact-section", id: 'Contact-section' }
    ];

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
                                <p className="text-sm sm:text-[16px] text-white font-normal">{t('discover_dream_home')}</p>
                            </div>

                            {/* Column 2 - Useful Links */}
                            <div className="flex flex-col gap-3 lg:w-[46%] m-0">
                                <div className="w-full md:w-auto flex flex-col gap-[15px] overflow-hidden items-start m-0 lg:mx-auto">
                                    <h6 className="text-[20px] font-medium text-left text-white">{t('useful_links.usefulLinks')}</h6>
                                    <ul className="flex flex-col sm:grid grid-cols-[auto,auto] justify-center gap-y-[7px] gap-x-[20px]">
                                        {/* <li><NavLink to='/danube/aboutUs' className="text-sm sm:text-[16px] font-medium hover:text-primary-yellow text-white"><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5" /> About Us</NavLink></li> */}
                                        {DanubeMenu.map((item, i) => (
                                            <li key={i}><NavLink to={item.redirect} className="text-sm sm:text-[16px]  hover:text-primary-yellow text-white font-light" target={item.redirect.includes('http') ? '_blank' : '_self'}><FontAwesomeIcon icon={faAngleRight} className="text-white pr-1.5" /> {t(item.name)}</NavLink></li>
                                        ))}
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
                                        <NavLink to='/terms-conditions' target='_blank' className='text-primary-yellow  text-white underline hover:text-primary-yellow font-light'>{t('terms_and_conditions')}</NavLink> {t('and')}
                                        <NavLink to='/privacy-policy' target='_blank' className='text-primary-yellow  text-white underline hover:text-primary-yellow font-light'>{t('Privacy_policy')}</NavLink>
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end ">
                                    <p className='mt-1.5 text-[12px] text-white font-light'>
                                        {t('crafted_by')} <NavLink to='https://iosandweb.net/' target='_blank' className='hover:text-primary-yellow text-white underline'>IosAndWeb Technologies</NavLink>
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
