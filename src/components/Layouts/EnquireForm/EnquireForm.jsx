import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../Layouts/languageSwitcher';

    
const EnquireForm = ({ subtitle, title, setOpen, button, setshowsidePopup }) => {
    const { t, i18n } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState();
    const [message, setMessage] = useState('');
    const [termsValue, setTermsValue] = useState(false);

    const [phoneError, setPhoneError] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (mobileNumber) {
            if (!isValidPhoneNumber(mobileNumber) || !isPossiblePhoneNumber(mobileNumber)) {
                setPhoneError(t('validation.mobile_number_error'));
                setTimeout(() => setPhoneError(''), 5000);
                return false;
            }
        }

        setLoading(true);

        axios({
            method: "post",
            url: "https://iosandweb.net/danubeproperties/api/enquire-us-api.php",
            data: JSON.stringify({
                name: `${firstName} ${lastName}`,
                mobileNumber,
                email,
                message
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                setLoading(true);
                if (response.data.status === 0) {
                    if (setOpen) setOpen(false);
                    if (setshowsidePopup) setshowsidePopup(false);
                    navigate('/thankyou');
                    resetForm();
                } else {
                    setFormError(t('validation.generic_error'));
                    setTimeout(() => setFormError(''), 10000);
                }
            })
            .catch(function () {
                setLoading(true);
                setFormError(t('validation.generic_error'));
                setTimeout(() => setFormError(''), 5000);
            });
    };

    const handleNameChange = (e, type) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
        if (type === 'firstName') setFirstName(value);
        if (type === 'lastName') setLastName(value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (number) => {
        setMobileNumber(number);
    };

    const handleTermsChange = () => {
        setTermsValue(!termsValue);
    };

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobileNumber('');
        setMessage('');
        setTermsValue(false);
    };

    return (
        <form className="enquire-form py-[15px]" onSubmit={handleSubmit}>
            <div className="form-section text-left">
                {formError && <p className="error-class text-red-400 py-2 text-[15px] text-center">{formError}</p>}
                <h2 className='text-[30px] sm:text-[40px]  text-left text-primary-yellow mb-3 leading-[1.2}'>{title}</h2>
                <p className="text-2xl title font-extrabold capitalize mb-2.5">{subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-0 sm:gap-3">
                    <input
                        type="text"
                        placeholder= {t('first_name')}
                        className="capitalize text-md form-input rounded-[3px] border border-gray-300 w-full my-1.5 px-3.5 py-2.5 bg-transparent text-white"
                        required
                        value={firstName}
                        onChange={(e) => handleNameChange(e, 'firstName')}
                    />
                    <input
                        type="text"
                        placeholder= {t('last_name')}
                        className="capitalize text-md form-input rounded-[3px] border border-gray-300 w-full my-1.5 px-3.5 py-2.5 bg-transparent text-white"
                        required
                        value={lastName}
                        onChange={(e) => handleNameChange(e, 'lastName')}
                    />
                </div>

                <div className="py-1.5">
                    <input
                        type="text"
                        placeholder= {t('email')}
                        className="text-md form-input rounded-[3px] border border-gray-300 w-full px-3.5 py-2.5 bg-transparent text-white"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="py-1.5">
                    <PhoneInput
                        placeholder={t('mobile_number')}
                        className="text-md form-input rounded-[3px] border border-gray-300 w-full px-3.5 py-2.5 bg-transparent "
                        country="IN"
                        defaultCountry="IN"
                        value={mobileNumber}
                        onChange={handlePhoneChange}
                        required
                    />
                    {phoneError && <p className="error-class text-primary-red text-xs pt-1.5">{phoneError}</p>}
                </div>

                <div className="py-1.5">
                    <textarea
                        placeholder={t('message')}
                        rows={5}
                        cols={40}
                        className="capitalize text-md form-input rounded-[3px] border border-gray-300 w-full px-3.5  py-2.5 bg-transparent text-white"
                       
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <p className="flex text-sm  font-medium text-black valid-popup">
                   {t('popupForm')}
                </p>
                <p className="flex text-sm sm:text-[18px]  text-white disclaimer leading-[1.2]">
                    {/* Disclaimer: Danube Properties values your privacy and will use the contact information you provide solely for communicating with you about our products and services. By clicking the submit button, you consent to our sales agents contacting you via phone calls, emails, and WhatsApp messages. */}
                    {t('privacy_disclaimer.line_1')}
                </p>

                <div className="mt-2.5 flex items-center gap-5 justify-start">
                    <input
                        type="submit"
                        value={button ? button : t('Submit')}
                        className={`submit w-max hover:text-white font-semibold text-white capitalize text-xs sm:text-[18px] tracking-widest  py-[11.5px]  px-4 1xl:px-8 bg-primary-btnGray hover:bg-primary-yellow border-2 border-primary-btnGray hover:border-primary-yellow rounded-[3px] cursor-pointer flex items-center justify-center leading-[1]`}
                        disabled={loading}
                    />
                    {loading && (
                        <CircularProgress
                            sx={{
                                color: (theme) =>
                                    theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                            }}
                            size={35}
                            thickness={4}
                            value={100}
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

export default EnquireForm;
