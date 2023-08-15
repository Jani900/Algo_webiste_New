import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroContact from '../components/HeroContact'
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import { Link as ScrollLink } from 'react-scroll'

const Contact = () => {

  
      const { REACT_APP_RECAPTCHA_API_KEY_14082023 } = process.env;


  

  //-----------------States-----------------//
  const [focusedField, setFocusField] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)


  //-----------------Functions-----------------//

  const handleCaptchaVerify = (value) => { 
    setIsCaptchaVerified(!!value)

  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const {name, email, message} = formData
    const subject = `New message from ${name}`
    const body = `Name: ${name} \n Email: ${email} \n Message: ${message}`
    const mailtoLink = `mailto:systems@algotech.co.nz?subject=${encodeURIComponent(
      subject)}&body=${encodeURIComponent(body)}`;

    //check if the captcha is verified

    if (!isCaptchaVerified) {
      alert('Please verify the captcha before submitting the form')
      return;
    }
if (isCaptchaVerified) {
  window.location.href = mailtoLink;
  alert('Thank you for your message. We will get back to you shortly')
  setFormData({
    name: '',
    email: '',
    message: ''
  })
  return;
  }
  else {
console.error('There was an error sending the message');
alert('There was an error sending the message')
  }
  }



  const handlePhoneClick = () => {
    alert('For phone enquiries call number: +64 22 620 6644')
  }

  const handleEmailClick = () => {
    alert('For email enquiries use: systems@algotech.co.nz')
  }


  const handleFocus = (e) => {
    setFocusField(e.target.name)
  }
  const handleBlur = () => {
    setFocusField(null)
  }

  const isFieldFocused = (fieldName) => focusedField === fieldName;




  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }



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
          className="flex flex-col items-center  w-full pt-20"
          onSubmit={handleSubmit}
        >
          <div
            className={`mb-4  ${
              isFieldFocused("name") ? "border-[#81cdba]" : ""
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
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
              w-[300px] lg:w-[650px] sm:w-[400px]"
              required
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
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
             w-[300px] lg:w-[650px] sm:w-[400px]"
              required
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
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className=" px-4 py-2 border border-[#606161] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81cdba] focus:border-transparent
              w-[300px] lg:w-[650px] sm:w-[400px]"
              required
            />
          </div>
          <ReCAPTCHA
            className="mb-4"
            sitekey={REACT_APP_RECAPTCHA_API_KEY_14082023}
            onChange={handleCaptchaVerify}
          />

          <button
            type="submit"
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