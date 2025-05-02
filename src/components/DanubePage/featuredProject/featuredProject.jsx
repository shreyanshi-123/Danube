import Slider1 from '../../../assests/images/slider/ProjectS1.jpg';
import slider2 from '../../../assests/images/slider/ProjectS2.png';
import slider3 from '../../../assests/images/slider/ProjectS3.jpg';
import slider4 from '../../../assests/images/slider/ProjectS4.jpg';
import slider5 from '../../../assests/images/slider/ProjectS5.jpg';
import slider6 from '../../../assests/images/slider/ProjectS6.jpg';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './featuredproject.css'; // Optional for custom styles

const BannerSlider = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    { id: 1,
      image: Slider1,
      title: t('feature_project.Bays102_by_Danube'),
      subtitle: t('feature_project.your_home_in_the_sky'),
      class: "justify-start",
      color: "text-white"
    },
    { id: 2,
      image: slider2,
      title: t('feature_project.Oasiz_by_danube'),
      subtitle: t('feature_project.Affordable_luxary_home'),
      class: "justify-start",
      color: "text-white"
    },
    { id: 3,
      image: slider3,
      title: t('feature_project.diamonds_by_danube'),
      subtitle:  t('feature_project.where_every_home_sparkels'),
      class: "justify-start",
      color: "text-white"
    },
    { id: 4,
      image: slider4,
      title:  t('feature_project.Bays_101_by_danube'),
      subtitle: t('feature_project.levels_of_luxary_line1'),
      line2: ('feature_project.levels_of_luxary_line2') ,
      class: "justify-start",
      color: "text-white"
    },
    { id: 5,
      image: slider5,
      title: t('feature_project.sportz_by_danube'),
      subtitle:t('feature_project.come_home_to_play_line1'),
      line2: ('feature_project.come_home_to_play_line2') ,
      class: "justify-start",
      color: "text-white"
    },
    { id: 6,
      image: slider6,
      title: t('feature_project.Oceanz_by_danube'),
      subtitle: t('feature_project.wake_up_to_this'),
      class: "justify-end",
      color: "text-white"
    },
  ];

  return (
    <section className="home-featuredProjects pb-8 px-0 gap-1" id='featured-project'>
        <div className='max-w-6xl px-2.5 m-auto'>
          <div className="flex flex-col md:flex-row sm:justify-between gap-4 pb-20">
            <div>
              <h3 className="text-sm lg:text-[18px] font-semibold text-left uppercase">{t('feature_project.featured')}</h3>
              <h2 className='text-[30px] lg:text-[40px] text-primary-yellow font-semibold text-left uppercase'>{t('feature_project.projects')}</h2>
              <h3 className='text-sm lg:text-[18px] font-semibold text-left text-primary-textGrey uppercase'>{t('feature_project.where_idea_turned')}</h3>
            </div>
          </div>
        </div>
   

      <Slider {...settings}>
       
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-[500px] lg:h-[940px] overflow-hidden">
            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-left justify-start  text-left py-4">
            <div className={`max-w-6xl px-2.5 flex m-auto mt-32 lg:mt-60 w-full ${slide.class}`}>
              <div className={`py-4 px-5 lg:py-8 lg:px-10 gap-2 flex flex-col bg-[#565656] slide-${slide.id} `}>
                <h2 className={` text-3xl   lg:text-[45px]  w-fit   font-semibold text-white leading-[1]`}>
                  {t(slide.title)}
                </h2>
                <p className={`subtitle text-sm sm:text-[18px] ${slide.color} font-semibold   w-fit  leading-[1.2] `}>{t(slide.subtitle)} <br /> {t(slide.line2)}</p>
              </div>
              </div>
            </div>

            {/* Background Image */}
            <LazyLoadImage
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-top absolute top-0 left-0 z-0"
            />

            {/* Optional dark overlay */}
            <div className="absolute inset-0  z-0" />
          </div>
        ))}

      </Slider>

    </section >
  );
};

export default BannerSlider;
