import { Dialog } from '@mui/material';
import EnquireForm from '../../Layouts/EnquireForm/EnquireForm';
import Owner from '../../../assests/images/ownerImg.png'
import aboutImg from '../../../assests/images/AboveGetintouch.jpg'
import video from './../../../assests/images/video.png'
import './owner.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const amenities = [

  ]

  return (
    <>
      <section className="home-about-section pb-20 px-2.5" id="about">
        <div className='max-w-6xl m-auto'>
          <div className="flex flex-col text-left gap-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
              <div className="abt flex flex-col gap-5"> <div className="heading-owner flex flex-col gap-2.5 ">
                <h3 className="text-sm lg:text-[18px] font-medium text-left leading-[1] ">{t('about_rizwan_sajan.title')}</h3>
                <h2 className='text-[30px] lg:text-[40px] text-primary-yellow leading-[1]  text-left uppercase'>{t('about_rizwan_sajan.name')}</h2>
                <h3 className='text-sm lg:text-[20px] leading-[1]  text-left text-black'>{t('about_rizwan_sajan.position')}</h3></div>
                <p className='text-sm lg:text-[18px] py-0 md:py-20 leading-[1.2]'>{t('about_rizwan_sajan.line_1')}</p>
                <div className='flex gap-2 items-center'>
                  <div className="btn-item flex gap-2 flex-wrap">
               <Link  to="https://www.youtube.com/watch?v=R38fMhdrT1U&t=1s" target='_blank'>     <button className='text-sm lg:text-[18px] bg-primary-darkgrey border-1 hover:bg-primary-yellow rounded-[3px] px-4 py-[6.5px] uppercase text-white' ><img src={video} className='w-[30px]' alt="" /> {t('about_rizwan_sajan.watch_complete_story')}</button></Link>


                  </div>
                </div>
              </div>
              <div className="owner-image relative">
                <img src={Owner} className='w-full' alt="" />
                {/* <div className="owner-toptext bg-primary-yellow text-white text-sm sm:text-[20px] font-semibold absolute top-0 left-0 border-0 rounded-tr-[15px] rounded-bl-[15px] xs:rounded-tr-[25px] xs:rounded-bl-[25px] border-solid p-3 sm:p-6 leading-none">
                                   <span className='w-1/2 leading-[1.3]'>The</span>  <span className='w-1/2 text-[20px]  sm:text-[40px] text-white font-semibold leading-[1]'>1%</span> <span className='w-full text-[20px]  sm:text-[40px] text-white font-semibold leading-[1]'>Man</span>
                                </div> */}
              </div>
            </div>
            <div className="overlayimage relative pt-20">
              <LazyLoadImage src={aboutImg} alt='' className="w-full min-h-[400px] object-cover z-0" />

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
              maxWidth: "554px",
              //   borderRadius: "30px",
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
          <EnquireForm title={t('popupTitle')} button={t('Submit')} setOpen={setOpen} />
        </div>
      </Dialog>

    </>
  )
}

export default AboutSection