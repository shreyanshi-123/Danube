import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import overlay from '../../../assests/images/about/aboutOverlay.png'
import aboutImg from '../../../assests/images/about/about.png'
import architecture from '../../../assests/images/about/architecture.png';
import PrimeLocation from '../../../assests/images/about/home.png';
import PaymentPlans from '../../../assests/images/about/hand.png';
import CapitalGrowth from '../../../assests/images/about/graph.png';
import WorldClassAmenities from '../../../assests/images/about/amenities.png';
import './about.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Layouts/languageSwitcher';

const AboutSection = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const amenities = [
        {
            title: t('award_winning_architecture'),
            icon: architecture,
        },
        {
            title: t('prime_locations'),
            icon: PrimeLocation,
        },
        {
            title: t('flexible_payment_plans'),
            icon: PaymentPlans,
        },
        {
            title: t('strong_roi'),
            icon: CapitalGrowth,
        },
        {
            title: t('world_class_amenities'),
            icon: WorldClassAmenities,
        }
    ]

    return (
        <>
            <section className="home-about-section py-20 px-2.5" id="about-us">
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-left gap-5 sm:gap-7">
                        <h2 className="text-2xl sm:text-[33px] font-semibold text-left text-[#4E2807] leading-[1]">{t('navigation.about_us')}</h2>
                        <p className="text-sm sm:text-[18px] leading-[1.2]">{t('about_us')}</p>
                        <div className="overlayimage relative ">
                            <LazyLoadImage src={overlay} alt='' className="w-full z-0 relative" />
                            <LazyLoadImage src={aboutImg} alt='' className="w-full absolute top-0 z-[-1]" />

                            <div className="main-abt grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-20">
                                {amenities.map((item, i) => (
                                    <div className="radial-box about-item w-full p-6 flex flex-col gap-4 justify-start items-center rounded-[3px] hover:bg-primary-yellow border-primary-yellow border-1 aminities-group cursor-pointer" key={i}>
                                        <img src={item.icon} alt={item.title} className="size-[54px] animate-wobble" />
                                        <h3 className="text-sm sm:text-[18px]  text-center capitalize leading-[1.2]">{t(item.title)}</h3>
                                    </div>
                                ))}
                            </div></div>
                        {/* <button tabIndex='-1' className="w-max  self-center text-primary-yellow border-2 border-primary-yellow  hover:bg-primary-yellow  mt-5 hover:text-white font-bold uppercase text-xs tracking-widest py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8" onClick={handleOpen}>Request For Brochure</button> */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default AboutSection