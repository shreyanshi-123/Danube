import { useLocation } from "react-router-dom";
import MetaData from "../Layouts/MetaData";
import { useTranslation } from 'react-i18next';

const TermsConsitions = () => {
    const { t } = useTranslation();
    const location = useLocation();

    return(
        <>
            <MetaData 
                title={"Danube Properties | Terms & Conditions"} 
                description={"Review our Terms & Conditions before engaging with Danube Properties. This page outlines the legal framework for using our website and services."}
                keywords={"Danube Properties terms and conditions, user agreement, website usage, legal disclaimers, Dubai"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            <section className=" py-5 md:py-16 px-2.5">
                <div className='max-w-6xl m-auto flex flex-col gap-5 text-sm'>
                <h2 className="text-[30px] lg:text-[40px] text-primary-yellow font-semibold text-left uppercase leading-[1] mb-3">{t('terms_n_conditions.title')}</h2>

                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.intro')}</p>
                
                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.intellectual_property.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.intellectual_property.description')}</p>


                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.property_information.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.property_information.description')}</p>
                
                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.user_obligations.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.user_obligations.description')}</p>


                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.disclaimer_of_liability.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.disclaimer_of_liability.description')}</p>
                

                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.links_to_third_party_websites.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.links_to_third_party_websites.description')}</p>


                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.modifications_to_the_terms.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.modifications_to_the_terms.description')}</p>

                <h5 className="text-xl text-primary-yellow font-semibold">{t('terms_n_conditions.content.governing_law_and_jurisdiction.title')}</h5>
                <p className="text-sm sm:text-[18px] leading-[1.2]">{t('terms_n_conditions.content.governing_law_and_jurisdiction.description')}</p>
            </div>
                
            </section>
        </>
    )
}

export default TermsConsitions