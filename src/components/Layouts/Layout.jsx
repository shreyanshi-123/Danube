import { Outlet } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import Header from "./Header/header";
import Footer from "./Footer/Footer";
import i18n from '../../i18n'

const Layout = () => {
    return (
        <>
        {/* <I18nextProvider i18n={i18n}> */}
            <Header />
            <Outlet />
            <Footer />
       {/* </I18nextProvider> */}
        </>
    );
}

export default Layout;
