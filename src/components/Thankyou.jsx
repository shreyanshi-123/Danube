import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './thankyou.css';
import { useTranslation } from 'react-i18next';
export default function Thankyou() {

  const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0,0);
     
        // if (window.gtag) {
        //     window.gtag('event', 'conversion', {
        //         'send_to': 'AW-16677697257/DBiSCPzj9MsZEOntxZA-',
        //         'value': 0.0,
        //         'currency': 'INR'
        //     });
        //     console.log('Conversion event sent');
        // } else {
        //     console.error('gtag is not defined');
        // }
    }, []); 

    return (
        <div className="container justify-self-center thanku-txt-wrapper">
        <div className="row">
        <div className="thankyou-enclose py-10 px-10">
            <div className="text-white  check"> <FontAwesomeIcon icon={faCheck} /></div>
            <div className="thankyou-text items-center text-4xl font-semibold my-5 text-primary-yellow  text-center">
                {t('thankyou')}
                
            </div>
            <div className='items-center  text-center thankyou-subtxt'>{t('Thankyou_sub1')}</div>
            <div className='items-center  text-center thankyou-subtxt'>{t('Thankyou_sub2')}</div>
            </div>
        </div>
    </div>
    );
}
