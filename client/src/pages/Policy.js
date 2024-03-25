import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>Privacy Policy</b>

At Nexus Cartify, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website www.nexuscartify.com and any related services (collectively referred to as the "Service").

<b>Information We Collect:</b>

Personal Information: When you register an account, make a purchase, or interact with our Service, we may collect personal information such as your name, email address, shipping address, and payment details.

Usage Information: We automatically collect certain information about your device and how you interact with our Service, including your IP address, browser type, and pages visited.

<b>How We Use Your Information:</b>

We use the information we collect for various purposes, including:

Providing and Improving the Service: To deliver, maintain, and enhance the functionality of our Service, and to personalize your experience.

Communicating with You: To respond to your inquiries, provide customer support, and send you important updates and promotions.

Legal Compliance: To comply with legal obligations and enforce our policies.

<b>Information Sharing and Disclosure:</b>

We may share your personal information with third-party service providers and partners who assist us in operating our Service, conducting our business, or servicing you. We may also disclose your information in response to legal requests or to protect our rights and interests.

<b>Data Security:</b>

We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.

<b>Your Choices:</b>

You have the right to access, update, or delete your personal information. You can also opt-out of receiving promotional communications from us by following the instructions provided in the communication.

<b>Changes to This Policy:</b>

We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on this page.

<b>Contact Us:</b>

If you have any questions or concerns about this Privacy Policy, please contact us at privacy@nexuscartify.com.

By using our Service, you consent to the collection and use of your information as described in this Privacy Policy.

</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
