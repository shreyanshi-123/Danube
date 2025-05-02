import EnquireForm from "../../Layouts/EnquireForm/EnquireForm";
import './contact.css';
import { useTranslation } from 'react-i18next';

const PriceList = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="contact-section py-20 px-2.5" id="contact-us">
      <div className="max-w-6xl m-auto">
        <div className="flex flex-col text-left gap-5 content">
          <div className="w-full max-w-3xxl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] uppercase text-left text-primary-yellow mb-3 leading-[1]">
            {t('get_in_touch')}
            </h2>
            {/* <p className="text-lg text-gray-700 mb-6">
              Have questions? Fill out the form below, and we'll get back to you as soon as possible!
            </p> */}
            <EnquireForm title="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
