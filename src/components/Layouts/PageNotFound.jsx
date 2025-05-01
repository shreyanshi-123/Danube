import { Link } from "react-router-dom"
import MetaData from "./MetaData"
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {

  const { t } = useTranslation();
    return(
        <>
            <MetaData title={"Page Not Found - Denube Properties"} />

            <section className="max-w-5xl m-auto py-14 px-2.5 text-center flex flex-col gap-5">
                <h3 className="text-8xl font-semibold text-primary-yellow pt-1 text-center">404</h3>
                <p className="text-2xl">{t('404_page.oops_message')}</p>
                <div className="w-20 h-1 bg-black m-auto"></div>
                <p className="max-w-md mx-auto">{t('404_page.separator')}</p>

                <Link to="/" className="w-max bg-primary-yellow mx-auto text-white font-bold uppercase text-xs tracking-widest py-3.5 px-8" reloadDocument={true}>{t('404_page.back_to_home')}</Link>
            </section>
        </>
    )
}

export default PageNotFound