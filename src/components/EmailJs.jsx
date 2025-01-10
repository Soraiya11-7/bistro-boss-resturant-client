import React, { useRef } from "react"; 
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const EmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cheiy2g", "template_4jnarqi", form.current, {
        publicKey: "BYpOcfhdeh5YcjFaQ",
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-8 bg-black text-white">
      {/* Title and Divider */}
      <div className="flex items-center mb-12">
        <div className="flex-grow border-t border-white"></div>
        <h2 className="mx-6 text-4xl font-bold text-center text-fuchsia-600">Contact Me</h2>
        <div className="flex-grow border-t border-white"></div>
      </div>

      {/* Left and Right Content */}
      <div className="lg:grid lg:grid-cols-2 gap-16">
        {/* Left side: EmailJS form */}
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition duration-300"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-600 transition duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-fuchsia-900 text-white px-8 py-3 rounded-xl hover:bg-fuchsia-700 transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side: Contact details */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <div className="flex items-center space-x-4 border-2 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaEnvelope className="text-3xl text-white" />
            <a
              href="mailto:example@example.com"
              className="text-lg text-fuchsia-600 hover:text-fuchsia-800 transition duration-300"
            >
              soraiyaparvin@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 border-2 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaPhoneAlt className="text-3xl text-white" />
            <a
              href="tel:+880123456789"
              className="text-lg text-fuchsia-600 hover:text-fuchsia-800 transition duration-300"
            >
              +880 1770410933
            </a>
          </div>
          <div className="flex items-center space-x-4 border-2 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaWhatsapp className="text-3xl text-white" />
            <a
              href="https://wa.me/880123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-fuchsia-600 hover:text-fuchsia-800 transition duration-300"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex items-center space-x-4 border-2 p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-3xl text-white" />
            <span className="text-lg text-fuchsia-600">Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Social Media Divider and Icons */}
      <div className="mt-12">
        <div className="flex items-center justify-center space-x-8">
          <div className="flex-grow border-t border-white"></div>
          <div className="flex space-x-6 text-3xl text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-800 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-800 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-800 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex-grow border-t border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default EmailJs;
