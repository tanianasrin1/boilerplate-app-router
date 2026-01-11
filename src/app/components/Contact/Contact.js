// "use client"
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
// import Button from '../UI/Button';

// const Contact = () => {
//     // Formik setup with validation
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             phone: '',
//             message: ''
//         },
//         validationSchema: Yup.object({
//             name: Yup.string()
//                 .min(3, 'Name must be at least 3 characters')
//                 .required('Name is required'),
//             email: Yup.string()
//                 .email('Invalid email address')
//                 .required('Email is required'),
//             phone: Yup.string()
//                 .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
//                 .min(10, 'Phone number must be at least 10 digits')
//                 .required('Phone is required'),
           
//             message: Yup.string()
//                 .min(10, 'Message must be at least 10 characters')
//                 .required('Message is required')
//         }),
//         onSubmit: (values, { resetForm }) => {
//             console.log('Form submitted:', values);
//             alert('Thank you for contacting us! We will get back to you soon.');
//             resetForm();
//         }
//     });



//     return (
//         <div className="bg-gradient-to-br from-white via-[#e51721]/5 to-white py-16 lg:py-20">
//             <div className="container-sk">
//                 {/* Header Section */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-[#231f1e] mb-4">
//                         Get In <span className="text-[#e51721]">Touch</span>
//                     </h2>
//                     <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
//                         We  love to hear from you! Whether you have questions, feedback, or just want to say hello.
//                     </p>
//                 </div>

            

//                 {/* Contact Form */}
//                 <div className="max-w-2xl mx-auto">
//                     <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                          
//                         <form onSubmit={formik.handleSubmit} className="space-y-6">
//                             {/* Name & Email */}
//                             <div className=" gap-6">
//                                 {/* Name */}
//                                 <div>
//                                     <label htmlFor="name" className="block text-[#231f1e] font-medium mb-2">
//                                         Full Name <span className="text-[#e51721]">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         placeholder="Enter your name"
//                                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f87f85] transition-all ${
//                                             formik.touched.name && formik.errors.name
//                                                 ? 'border-yellow'
//                                                 : 'border-gray-200 focus:border-yellow'
//                                         }`}
//                                         {...formik.getFieldProps('name')}
//                                     />
//                                     {formik.touched.name && formik.errors.name && (
//                                         <p className="text-[#e51721] text-sm mt-1">{formik.errors.name}</p>
//                                     )}
//                                 </div>

//                                 {/* Email */}
//                                 <div>
//                                     <label htmlFor="email" className="block text-[#231f1e] font-medium mb-2">
//                                         Email Address <span className="text-[#e51721]">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         placeholder="Enter your email"
//                                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f87f85]  transition-all ${
//                                             formik.touched.email && formik.errors.email
//                                                 ? 'border-yellow'
//                                                 : 'border-gray-200 focus:border-yellow'
//                                         }`}
//                                         {...formik.getFieldProps('email')}
//                                     />
//                                     {formik.touched.email && formik.errors.email && (
//                                         <p className="text-[#e51721] text-sm mt-1">{formik.errors.email}</p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label htmlFor="phone" className="block text-[#231f1e] font-medium mb-2">
//                                         Phone Number <span className="text-[#e51721]">*</span>
//                                     </label>
//                                     <input
//                                         type="tel"
//                                         id="phone"
//                                         name="phone"
//                                         placeholder="Enter your phone"
//                                         className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f87f85]  transition-all ${
//                                             formik.touched.phone && formik.errors.phone
//                                                 ? 'border-[#e51721]'
//                                                 : 'border-gray-200 focus:border-[#e51721]'
//                                         }`}
//                                         {...formik.getFieldProps('phone')}
//                                     />
//                                     {formik.touched.phone && formik.errors.phone && (
//                                         <p className="text-[#e51721] text-sm mt-1">{formik.errors.phone}</p>
//                                     )}
//                                 </div>
//                                 <div>
//                                 <label htmlFor="message" className="block text-[#231f1e] font-medium mb-2">
//                                     Message <span className="text-[#e51721]">*</span>
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     rows="6"
//                                     placeholder="Write your message here..."
//                                     className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#f87f85]  transition-all resize-none ${
//                                         formik.touched.message && formik.errors.message
//                                             ? 'border-[#e51721]'
//                                             : 'border-gray-200 focus:border-[#e51721]'
//                                     }`}
//                                     {...formik.getFieldProps('message')}
//                                 />
//                                 {formik.touched.message && formik.errors.message && (
//                                     <p className="text-[#e51721] text-sm mt-1">{formik.errors.message}</p>
//                                 )}
//                             </div>
//                             </div>



//                             {/* Submit Button */}
//                             <div className="text-center">
//                                 <Button 
//                                     type="submit" 
//                                     variant="success"
//                                     className="px-12 py-3 text-lg"
//                                 >
//                                     Send Message
//                                 </Button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;  


"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../UI/Button";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9+\-\s()]*$/, "Invalid phone number")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      alert("Thank you for contacting us! We’ll get back to you soon.");
      resetForm();
    },
  });

  return (
    <section className="relative bg-gradient-to-b from-[#fff] via-[#fff5f5] to-[#ffffff] py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Let’s <span className="text-[#e51721]">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Have a question, project idea, or just want to say hi?  
            Drop your message below — we’d love to hear from you.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Shape */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#e51721]/10 rounded-full blur-2xl"></div>

          {/* Info Row */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#e51721]/10 text-[#e51721] p-4 rounded-full mb-3">
                <FaEnvelope size={20} />
              </div>
              <p className="text-sm text-gray-500">Email Us</p>
              <p className="font-medium text-gray-800">info@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e51721]/10 text-[#e51721] p-4 rounded-full mb-3">
                <FaPhoneAlt size={20} />
              </div>
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="font-medium text-gray-800">+880 1234-567890</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#e51721]/10 text-[#e51721] p-4 rounded-full mb-3">
                <FaMapMarkerAlt size={20} />
              </div>
              <p className="text-sm text-gray-500">Visit Us</p>
              <p className="font-medium text-gray-800">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Full Name <span className="text-[#e51721]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 border shadow-lg rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    formik.touched.name && formik.errors.name
                      ? "border-[#e51721] ring-[#e51721]/30"
                      : "border-gray-300 focus:border-[#e51721] focus:ring-[#e51721]/20"
                  }`}
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-[#e51721] text-sm mt-1">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address <span className="text-[#e51721]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 border shadow-lg  rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    formik.touched.email && formik.errors.email
                      ? "border-[#e51721] ring-[#e51721]/30"
                      : "border-gray-300 focus:border-[#e51721] focus:ring-[#e51721]/20"
                  }`}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-[#e51721] text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Phone Number <span className="text-[#e51721]"></span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className={`w-full px-4 py-3 border shadow-lg  rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-[#e51721] ring-[#e51721]/30"
                    : "border-gray-300 focus:border-[#e51721] focus:ring-[#e51721]/20"
                }`}
                {...formik.getFieldProps("phone")}
              />
              {/* {formik.touched.phone && formik.errors.phone && (
                <p className="text-[#e51721] text-sm mt-1">
                  {formik.errors.phone}
                </p>
              )} */}
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Message <span className="text-[#e51721]">*</span>
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className={`w-full px-4 py-3 border rounded-lg shadow-lg  focus:outline-none focus:ring-2 resize-none transition-all ${
                  formik.touched.message && formik.errors.message
                    ? "border-[#e51721] ring-[#e51721]/30"
                    : "border-gray-300 focus:border-[#e51721] focus:ring-[#e51721]/20"
                }`}
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-[#e51721] text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              {/* <Button
                type="submit"
                className="px-10 py-3 bg-[#e51721] hover:bg-[#c7131c] text-white text-lg rounded-full shadow-lg transition-all duration-200"
              >
                Send Message
              </Button> */}
              <Button variant="success">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
