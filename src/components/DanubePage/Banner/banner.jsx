import './Banner.css';
// import banner1 from '../../../assests/images/DAMAC-Safa-Gate-at-Sheikh-Zayed-Road-29.webp';
// import banner2 from '../../../assests/images/DAMAC_Islands.jpg';
// import banner3 from '../../../assests/images/Damac-Riverside-River-View.avif';
import banner from '../../../assests/images/banner3.png';
import home from '../../../assests/images/home.png'
// import banner4 from '../../../assests/images/banner-slider.jpg';
// import banner5 from '../../../assests/images/DAMAC-Lagoons-new-launchTownhouses-in-dubai.jpg';
// import banner6 from '../../../assests/images/banner-slider-main.avif';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from '../../Layouts/languageSwitcher';

const BannerSlider = () => {
  const { t, i18n } = useTranslation();
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    
        
   

    return (
        <section className="" id='Banner-denube'>
            {/* <Slider {...settings}>
                {slides.map((el, i) => ( */}
                    <div className='w-full content-center  relative overflow-hidden' >
                        <div className='max-w-6xl m-auto justify-center sm:justify-end flex relative h-screen home-banner-danube text-white px-2.5 py-3 z-0'>
                            <div className="flex flex-col items-center">
                                <div md={12} xl={10} className='  m-auto sm:mr-11 parent-text '>
                                    <div className='flex bg-banner-txt p-2 sm:p-6 h-full flex-col gap-4 text-left z-0'>
                                        <h1 className='text-3xl sm:text-4xl lg:text-4xxl font-semibold banner-title text-primary-yellow flex flex-col'><span className='text-3xl sm:text-4xl lg:text-4xxl font-semibold banner-title text-primary-yellow leading-[1.2]'>{t('hero_section.heading')}</span>
                                        <span className='text-3xl sm:text-4xl lg:text-4xxl font-semibold banner-title text-primary-yellow leading-[1.2]'>{t('hero_section.headingLine2')}</span></h1>
                                        {/* <p className='text-md sm:text-xl'>{el.subtitle}</p> */}
                                        {/* <div className='w-72 h-px bg-white mt-16'></div> */}
                                        <ul className='flex flex-col md:flex-row gap-4'>
                                            <li className='flex gap-2 items-center text-[16px]  text-black'><img src={home} alt="" />{t('hero_section.subheading_1')} </li>
                                            <li className='flex gap-2 items-center text-[16px]  text-black'><img src={home} alt="" />  {t('hero_section.subheading_2')}</li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <LazyLoadImage
                            src={banner}
                            alt=''
                            className="w-full object-cover object-top absolute top-0 h-full banner-slider-bg"
                            style={{ zIndex: "-1" }}
                        />
                        <div className='w-full absolute top-0 h-full z-[-1]' style={{ backgroundColor: "" }}></div>
                        {/* <p className='text-xs font-semibold p-1 absolute mx-auto bottom-0.5 right-3 text-white w-max'>*Image shown is for illustration purposes only</p> */}
                    </div>
                {/* ))}
            </Slider> */}
        </section>
    )
}

export default BannerSlider