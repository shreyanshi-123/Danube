
import { useState } from "react";
import city from '../../../assests/images/whyIcons/safecity.png';
import Economy from '../../../assests/images/whyIcons/grow.png';
import capital from '../../../assests/images/whyIcons/highcapacity.png';
import investment from '../../../assests/images/whyIcons/invest_money.png';
import ownership from '../../../assests/images/whyIcons/ownership.png';
import income from '../../../assests/images/whyIcons/taxfree.png';
import GoldenVisa from '../../../assests/images/whyIcons/goldenVisa.png';
import Internet from '../../../assests/images/whyIcons/connectivity.png';
import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import './whyDubai.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import whyDubai1 from '../../../assests/images/why2.jpg'
import { useTranslation } from 'react-i18next';

const LatestLaunches = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openPlan1, setOpenPlan1] = useState(false);
    const [openPlan2, setOpenPlan2] = useState(false);
    const [openPlan3, setOpenPlan3] = useState(false);

    const whyFeatures = [
        {
            id: 1,
            icon: city,
            title: t('why_invest_in_dubai.safest_city')

        },
        {
            id: 2,
            icon: Economy,
            title: t('why_invest_in_dubai.fastest_growing_economy')

        },
        {
            id: 3,
            icon: capital,
            title: t('why_invest_in_dubai.high_capital_appreciation')

        },
        {
            id: 4,
            icon: investment,
            title: t('why_invest_in_dubai.ease_of_investment')

        },
        {
            id: 5,
            icon: ownership,
            title: t('why_invest_in_dubai.freehold_ownership')

        },
        {
            id: 6,
            icon: income,
            title: t('why_invest_in_dubai.tax_free_income')

        },
        {
            id: 7,
            icon: GoldenVisa,
            title: t('why_invest_in_dubai.long_term_golden_visa')

        },
        {
            id: 8,
            icon: Internet,
            title: t('why_invest_in_dubai.worldwide_connectivity')

        }
    ];

    return (
        <>
            <section className="home-whyDubai pb-20 px-2.5" id='why-dubai'>
                <div className='max-w-6xl m-auto'>
                    <div className="flex flex-col text-left gap-0 uppercase">
                        <div className="flex flex-col md:flex-row sm:justify-between gap-4">
                            <div className="w-full flex gap-2.5 flex-col">
                                <h3 className="text-sm lg:text-[18px] font-medium text-left md:text-right leading-[1]">{t('why')}</h3>
                                <h2 className='text-[30px] lg:text-[40px] text-primary-yellow text-left md:text-right uppercase leading-[1]'>{t('invest_in_dubai')}</h2>

                            </div>

                        </div>
                        <div className="flex flex-col-reverse md:flex-row  gap-5 lg:gap-8  pt-20 md:pt-5  ">
                            <img className="w-full md:w-2/5  lg:w-1/3" src={whyDubai1} alt="" />
                            <div className="flex items-center w-full">
                                <div className="w-full main-abt grid single-col grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-0 h-max">

                                    {whyFeatures.map((item, i) => (
                                        <div className="radial-box w-full px-2 py-6 flex flex-col gap-4 justify-start items-center rounded-[3px]  border-primary-yellow border-1 whyDubai aminities-group cursor-pointer" key={i}>
                                            <img src={item.icon} alt={item.title} className="w-[54px] h-[54px] animate-wobble" />
                                            <h3 className="text-sm sm:text-[18px] wrap-anywhere text-center  text-primary-yellow uppercase leading-[1.2]">{t(item.title)}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            {/* Popup */}
            <Dialog
                open={open}
                onClose={handleClose}
                className="form_popup"
                aria-hidden="false"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "450px",
                            borderRadius: "30px",
                            backgroundColor: "#f7f7f7",
                            padding: "15px",
                        },
                    },
                }}
                aria-modal="true"
            >
                <div className="flex flex-col px-2.5 popup-form">
                    <div className="flex justify-end p-2.5 btn-cls">
                        <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
                    </div>
                    <EnquireForm title="Request For Price List" setOpen={setOpen} />
                </div>
            </Dialog>
        </>
    )
}

export default LatestLaunches