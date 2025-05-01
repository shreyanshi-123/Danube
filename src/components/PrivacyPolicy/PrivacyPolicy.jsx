import { useLocation } from "react-router-dom";
import MetaData from "../Layouts/MetaData"
import { useTranslation } from 'react-i18next';
const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Danube Properties | Privacy Policy"} 
                description={"This page outlines the privacy practices of Danube Properties. Learn how we collect, use, and protect your personal information."}
                keywords={"Danube Properties, privacy policy, data protection, personal information, data privacy, data security, Dubai"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <section className=" py-5 md:py-16 px-2.5">
                <div className='max-w-6xl m-auto flex flex-col gap-5 text-sm'>
                <h2 className="text-[30px] lg:text-[40px] text-primary-yellow font-semibold text-left uppercase leading-[1] mb-3">{t('privacy_policy.title')}</h2>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('privacy_policy.content.intro')}</p>
                
                <h5 className="text-xl text-primary-yellow font-semibold">{t('privacy_policy.content.update_policy.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('privacy_policy.content.update_policy.description')}</p>


                <h5 className="text-xl text-primary-yellow font-semibold">{t('privacy_policy.content.user_information.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('privacy_policy.content.user_information.description')}</p>
                

                <h5 className="text-xl text-primary-yellow font-semibold">{t('privacy_policy.content.security.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('privacy_policy.content.security.description')}</p>

                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('privacy_policy.content.disclaimer.description')}</p>
                </div>
            </section>
        </>
    )
}

export default PrivacyPolicy