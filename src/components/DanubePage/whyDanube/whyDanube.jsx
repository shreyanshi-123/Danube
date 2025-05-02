import { useState } from "react";
import Zero from '../../../assests/images/whyIcons/zeropercent.png';
import One from '../../../assests/images/whyIcons/one-percnt.png';
import eighty from '../../../assests/images/whyIcons/eightyy.png';
import investment from '../../../assests/images/whyIcons/highreturnn.png';
import calender from '../../../assests/images/whyIcons/calender.png';
import primeLocation from '../../../assests/images/whyIcons/maplocation.png';
import Luxary from '../../../assests/images/whyIcons/soffa.png';
import pool from '../../../assests/images/whyIcons/ammentity.png';
import whyDanube1 from '../../../assests/images/why1.jpg';
import './whyDanube.css';
import { useTranslation } from 'react-i18next';
// image font family roboto condense
const LatestLaunches = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    const whyFeatures = [
        { id: 1, icon: Zero, title: t('why_danube_properties.feature1') },
        { id: 2, icon: One, title: t('why_danube_properties.feature2') },
        { id: 3, icon: eighty, title: t('why_danube_properties.feature3') },
        { id: 4, icon: investment, title: t('why_danube_properties.feature4') },
        { id: 5, icon: calender, title: t('why_danube_properties.feature5') },
        { id: 6, icon: primeLocation, title: t('why_danube_properties.feature6') },
        { id: 7, icon: Luxary, title: t('why_danube_properties.feature7') },
        { id: 8, icon: pool, title: t('why_danube_properties.feature8') },
        
    ];

    const renderIcon = (icon) => {
        // Check if icon corresponds to numbers like 0, 1, or 80 and return them as text
        // if (icon === Zero) {
        //     // return <span className="text-2xl text-primary-yellow animate-wobble">0%</span>;
        // }
        // if (icon === One) {
        //     // return <span className="text-2xl text-primary-yellow animate-wobble">1%</span>;
        // }
        
        // Default case: render image
        return <img src={icon} alt="Feature Icon" className="w-[54px] animate-wobble" />;
    };

    return (
        <section className="home-whyDanube py-20 px-2.5" id='why-danube'>
            <div className='max-w-6xl m-auto'>
                <div className="flex flex-col text-left gap-1 md:gap-0 uppercase">
                    <div className="flex flex-col md:flex-row sm:justify-between gap-4">
                        <div className="flex gap-2.5 flex-col">
                            <h3 className="text-sm lg:text-[18px] font-medium text-left leading-[1]">{t('why')}</h3>
                            <h2 className='text-[30px] lg:text-[40px] text-primary-yellow text-left uppercase leading-[1]'>
                                {t('danube_properties')}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-8 pt-20 md:pt-5  mob-center">
                        <div className="flex items-center w-full">
                        <div className="grid w-full main-abt single-col grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-0 h-max">
                            {whyFeatures.map((item) => (
                                <div key={item.id} className="w-full px-2 py-6 flex flex-col gap-4 justify-start items-center rounded-[3px] border-primary-yellow border-1 whyDanube aminities-group cursor-pointer radial-box">
                                    {renderIcon(item.icon)} {/* Conditional rendering of image or number */}
                                    <h3 className="text-sm sm:text-[18px] wrap-anywhere text-center text-primary-yellow uppercase leading-[1.2]">{t(item.title)}</h3>
                                </div>
                            ))}
                            </div>
                        </div>
                        <img className="w-full md:w-2/5  lg:w-1/3" src={whyDanube1} alt="Danube Properties Overview" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestLaunches;
