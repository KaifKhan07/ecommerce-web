import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Nexus Cartify, where shopping meets convenience and quality. At Nexus Cartify, we're dedicated to providing you with an unparalleled online shopping experience.

Our mission is simple: to connect you with a wide array of products that enrich your life, all in one convenient location. Whether you're searching for the latest fashion trends, cutting-edge gadgets, or everyday essentials, Nexus Cartify has you covered.

What sets us apart is our commitment to excellence in every aspect of your journey with us. From our carefully curated product selection to our seamless checkout process, we prioritize your satisfaction above all else. We believe that shopping should be effortless, enjoyable, and secure, and we strive to exceed your expectations at every turn.

But Nexus Cartify is more than just a marketplace—it's a community. We cherish the relationships we build with our customers and partners, and we're constantly seeking ways to enhance your experience and foster a sense of belonging.

Join us on this exciting journey as we revolutionize the way you shop online. Thank you for choosing Nexus Cartify—we're honored to be your trusted destination for all your shopping needs.

Welcome to the Nexus Cartify family.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
