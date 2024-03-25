import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
           <strong> Any query or info about product feel free to call anytime we 24x7
            available </strong>.
          </p>
          <p className="mt-3">
            <BiMailSend /> : Reach out to us via email at <b>support@nexuscartify.com</b>.
          </p>
          <p className="mt-3">
            <BiMailSend /> : Contact our business development team at <b>bizdev@nexuscartify.com</b>.
          </p>
          <p className="mt-3">
            <BiMailSend /> : Feedback and Suggestions:  Share your thoughts, suggestions, or ideas for enhancement by emailing us at <b>feedback@nexuscartify.com</b>.
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : <b> 012-3456789 / 91+ 7620100227 </b>
          </p>
          <p className="mt-3">
            <BiSupport /> : <b> 1800-0000-0000 (toll free) </b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
