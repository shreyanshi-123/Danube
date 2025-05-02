import bedroom from '../../../assests/images/latestLaunches/Bedroom2.png';
import exterior from '../../../assests/images/latestLaunches/exterior3.png';
import livingroom from '../../../assests/images/latestLaunches/livingRoom2.png';
import lobby from '../../../assests/images/latestLaunches/lobby2.png';
import pool from '../../../assests/images/latestLaunches/pool2.png';
import { useState } from "react";
import discover from '../../../assests/images/expand-arrows.png'
import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import './newLaunch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import { useTranslation } from 'react-i18next';

const LatestLaunches = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openPlan1, setOpenPlan1] = useState(false);
  const [openPlan2, setOpenPlan2] = useState(false);
  const [openPlan3, setOpenPlan3] = useState(false);

  const launches = [
    {
      id: 1,
      image: exterior,
      title: t('featured_area.exterior')


    },
    {
      id: 2,
      image: bedroom,
      title: t('featured_area.bedroom')


    },
    {
      id: 3,
      image: livingroom,
      title: t('featured_area.living_room')


    },
    {
      id: 4,
      image: lobby,
      title: t('featured_area.lobby')

    },
    {
      id: 5,

      image: pool,
      title: t('featured_area.pool')
    }
  ];

  return (
    <>
      <section className="home-NewLaunches-section pb-20 " id="new-launches">

        <div className="flex flex-col text-left  uppercase">
          <div className='px-2.5'>
          <div className='max-w-6xl m-auto w-full'>
            <div className="flex flex-col md:flex-row sm:justify-between gap-5">
              <div className='flex flex-col gap-2.5'>
                <h3 className="text-sm lg:text-[18px] font-semibold text-left leading-[1] ">{t('latest_launches.title_main')}</h3>
                <h2 className='text-[30px] lg:text-[40px] text-primary-yellow font-semibold text-left uppercase leading-[1]'>{t('latest_launches.title')}</h2>
                <h3 className='text-sm lg:text-[18px] font-medium text-left text-primary-textGrey leading-[1]'>{t('latest_launches.tagline')}</h3>
              </div>
              <div className='flex gap-2 items-center'>
                <div className="btn-item flex gap-2 flex-wrap">
                  <button className='text-sm lg:text-[18px] bg-primary-darkgrey border-1 hover:bg-primary-yellow rounded-[3px] py-[11.5px] px-3.5 uppercase text-white' onClick={handleOpen}><img className='w-5 h-5' src={discover} alt="" /> {t('latest_launches.register_interest')}</button>


                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1  grid-flow-row gap-[20px] lg:gap-[40px] pt-20 ">
            {/* Plan 1 */}
            {launches.map((item) => (
              <div
                key={item.id}
                className="relative bg-cover bg-center bg-no-repeat  flex items-center justify-center text-white image-ht"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className=" w-full  rounded-lg text-center ">
                  <h2
                    className="trns-text"
                    // style={{
                    //   backgroundImage: `url(${item.image})`,
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover"
                    // }}
                  >
                    {t(item.title)}
                  </h2>
                  <p className="text-lg md:text-xl text-white mt-4">{item.description}</p>
                </div>
              </div>
            ))}



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
              maxWidth: "554px",
              // borderRadius: "30px",
              backgroundColor: "#f7f7f7",
              padding: "15px",
            },
          },
        }}
        aria-modal="true"
      >
        <div className="flex flex-col px-2.5 popup-form">
          <div className="flex justify-end p-[10px] btn-cls">
            <FontAwesomeIcon icon={faClose} className="text-2xl cursor-pointer" onClick={handleClose} />
          </div>
          <EnquireForm title={t('popupTitle')}  button={t('Submit')} setOpen={setOpen} />
        </div>
      </Dialog>
    </>
  )
}

export default LatestLaunches