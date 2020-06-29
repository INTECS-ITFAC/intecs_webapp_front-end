import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const LandingLayout = (ViewComponent) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    {/* <Import the nav bar> */}
                    <Navbar />
                    <div>
                        <ViewComponent />
                    </div>
                    {/* <Import the Footer /> */}
                    <Footer />
                    <MessengerCustomerChat
                        pageId="10150156747435257"
                        appId="2553724194886470"
                    />
                </>
            );
        }
    };
};

export default LandingLayout;
