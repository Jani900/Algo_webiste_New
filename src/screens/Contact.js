import React, {useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroContact from '../components/HeroContact'
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import { Link as ScrollLink } from 'react-scroll';
import emailjs from '@emailjs/browser'


const Contact = () => {
  //-----------------States-----------------//
  const form = useRef();
  const captchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  // const apiKey = "6Lfh4KQnAAAAAHKam4Or_IXDQGkvXxDI4L_jBGC3";
  // const apiKey1 = "6Ley2V4nAAAAAIKkIbOuufA2wITVjJX5ccGPez71";
  // const testKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const serviceID = "service_sddgyff";
  const templateID = "template_1hwr7zs";
  const userID = "IJX4Qp4huwoVFCpsN";

  const DEF_SITEKKEY_PRODUCT = process.env.REACT_APP_RECAPTCHA_API_KEY_17082023;
  const DEF_SITEKEY_DEBUG = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const DEF_SECRETKEY_DEBUG = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
 

  const [focusedField, setFocusField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [message1, setMessage1] = useState("");

  //-----------------Functions-----------------//


  const handleCaptchaVerify = (value) => {
    setIsCaptchaVerified(!!value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    captchaRef.current.reset();

    //check if the captcha is verified

    if (!isCaptchaVerified) {
      alert("Please verify the captcha before submitting the form");
      return;
    }
    if (isCaptchaVerified) {
          emailjs.sendForm(serviceID, templateID, form.current, userID).then(
            (result) => {
               alert(
                 "Thank you for your message. We will get back to you shortly"
               );

                setName1("");
                setEmail1("");
                setMessage1("");

               setFormData({
                 name: "",
                 email: "",
                 message: "",
               });

               console.log(result.text);
               setLoading(false);
               setIsCaptchaVerified(false);
             
            },
            (error) => {
              console.log(error.text);
            }
          );
     
      return;
    } 
    else 
    {
      console.error("There was an error sending the message");
      alert("There was an error sending the message");
    }
  };

  const handlePhoneClick = () => {
    alert("For phone enquiries call number: +64 22 620 6644");
  };

  const handleEmailClick = () => {
    alert("For email enquiries use: systems@algotech.co.nz");
  };

 

  const isFieldFocused = (fieldName) => focusedField === fieldName;


  //--------------------------------------Render main--------------------------------------//

  return (
    <div>
      <Navbar />
      <HeroContact />

      <div className="grid lg:flex  text-black justify-center pt-5 bg-slate-50 w-full lg:pb-20 pb:10 ">
        <div className="grid-cols-1 md:flex lg:flex justify-center w-full  ">
          <div
            className="flex py-10 md:py-0 justify-center md:pt-20"
            onClick={handlePhoneClick}
          >
            <HiOutlinePhoneIncoming
              size={60}
              color="#81cdba "
              className="hover:scale-150 duration-300"
            />
            <h1 className="w-full px-5 md:px-10 lg:px-10 self-center lg:w-[12rem] text-2xl md:text-2xl lg:text-3xl">
              Call us
            </h1>
          </div>

          <div
            className="flex flex-col-2 py-10 md:py-0 justify-center md:pt-20"
            onClick={handleEmailClick}
          >
            <HiOutlineMail
              size={60}
              color="#81cdba "
              className="hover:scale-150 duration-300"
            />
            <h1 className=" w-full px-5 md:px10 lg:px-10 self-center lg:w-[12rem] text-2xl md:text-2xl lg:text-3xl ">
              Email us
            </h1>
          </div>
        </div>
      </div>

      <ScrollLink to="contact" smooth={true} duration={1000} />
      <div className="h-[650px]  bg-slate-50 w-full ">
        <form
          key={formData}
          ref={form}
          className="flex flex-col items-center  w-full pt-20"
          onSubmit={handleSubmit}
        >
          <div
            className={`mb-4  ${
              isFieldFocused("name") ? "border-[#81cdba]" : "#000"
            }`}
          >
            <label
              htmlFor="name"
              className="lg:w-[650px] block mb-1 font-semibold"
            >
              Name:
            </label>
            <input
              type="text"
              name="from_name"
              value={name1}
              id="name"
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
              w-[300px] lg:w-[650px] sm:w-[400px]"
              required
              onChange={(e) => {
                setName1(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="lg:w-[650px] sm:w-[400px] block mb-1 font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
             w-[300px] lg:w-[650px] sm:w-[400px]"
              required
              onChange={(e) => {
                setEmail1(e.target.value);
              }}
              value={email1}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="lg:w-[650px] sm:w-[400px] block mb-1 font-semibold"
            >
              Message:
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              rows="5"
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
              w-[300px] lg:w-[650px] sm:w-[400px]"
              required
              onChange={(e) => {
                setMessage1(e.target.value);
              }}
              value={message1}
            />
          </div>

          <ReCAPTCHA
            className="mb-4"
            ref={captchaRef}
        sitekey={ DEF_SITEKKEY_PRODUCT }
            onChange={handleCaptchaVerify}
          />

          <button
            type="submit"
            value="Send"
            className="px-28 py-2 text-[#81cdba] bg-[#606161] rounded-md hover:bg-[#81cdba] hover:text-[#606161] focus:outline-none focus:bg-[#606161] focus:text-[#81cdba] lg:px-64 lg:py-3 w-[300px] lg:w-[650px] sm:w-[400px]"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;