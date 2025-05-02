import React, { useState } from 'react';
import './faq.css'; // Make sure to add styles for the accordion
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: t('faqs.real_estate_developer'),
      answer: t('faqAns1'),
    },
    {
      question: t('faqs.why_choose_danube_properties'),
      answer: (
        <>
          {t('faqAns2')}
          <br />
          <br />
          {t('faqAns2Para2')}
        </>
      ),
    },
    {
      question: t('faqs.trusted_name_in_real_estate'),
      answer: t('faqAns3'),
    },
    {
      question: t('faqs.investment_opportunities'),
      answer: t('faqAns4'),
    },
    {
      question: t('faqs.impressive_portfolio'),
      answer: (
        <>
         {t('faqAns5')}
          <br />
         
          {t('faqAns5Para2')}
        </>
      ),
    },
  ];

  return (
    <section className="home-whyDanube py-20 px-2.5" id='faq'>
      <div className='max-w-6xl m-auto'>
        <div className="faq-section">
          <h2 className="faq-title">{t('faq')}</h2>
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'activeitem' : ''}`}>
                <div
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.question}</h3>
                  <span className={`faq-arrow ${activeIndex === index ? 'rotate' : ''}`}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
