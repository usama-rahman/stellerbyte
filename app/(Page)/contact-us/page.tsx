import FooterSection from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import ContactUs from "./contact-us";
import BgBlurBlock from "@/app/Styles/bg-blur-block";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <FooterSection />
    </>
  );
};

export default ContactUsPage;
