import React, { useRef } from "react";
import axios from "axios";
import Imagecopy from "../assets/copyright (4).png";
import ContactImage from "../assets/—Pngtree—customer service concept online helpline_8644425 (4).png";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const contactData = {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message')
    };

    try {
      const response = await axios.post('http://localhost:5000/api/contact', contactData);
      console.log(response.data);
      console.log("message sent");
      window.location.reload();
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  return (
    <section>
      <div id="Contact" className="container mx-auto px-4">
        <div className="section_title center mb-8">
          <p>Contact</p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <img src={ContactImage} className="w-full" alt="Contact" />
          </div>
          <div className="lg:w-2/3 lg:pl-8">
            <form ref={form} onSubmit={sendEmail} className="text-base">
              <div className="mb-6">
                <label className="text-white block mb-2">Name</label>
                <input type="text" name="user_name" className="w-full py-2 px-4 rounded border border-gray-300 focus:border-teal-500 outline-none" />
              </div>
              <div className="mb-6">
                <label className="text-white block mb-2">E-Mail</label>
                <input type="text" name="user_email" className="w-full py-2 px-4 rounded border border-gray-300 focus:border-teal-500 outline-none" />
              </div>
              <div className="mb-6">
                <label className="text-white block mb-2">Description</label>
                <textarea name="message" className="w-full h-48 py-2 px-4 rounded border border-gray-300 focus:border-teal-500 outline-none"></textarea>
              </div>
              <input type="submit" value="Send" className="mt-4 cursor-pointer bg-[#0077cc] text-white border-none px-4 py-2" />
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 py-10">
        <img src={Imagecopy} alt="Copyright" className="w-3 mr-2" />
        <div className="text-white text-[0.45em]">Copyrights Sushiiel 2024 all rights reserved</div>
      </div>
    </section>
  );
};

export default Contact;
