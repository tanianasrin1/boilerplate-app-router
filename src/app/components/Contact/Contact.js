"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Button from '../UI/Button';

const Contact = () => {
    // Formik setup with validation
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 3 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            phone: Yup.string()
                .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
                .min(10, 'Phone number must be at least 10 digits')
                .required('Phone is required'),
           
            message: Yup.string()
                .min(10, 'Message must be at least 10 characters')
                .required('Message is required')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log('Form submitted:', values);
            alert('Thank you for contacting us! We will get back to you soon.');
            resetForm();
        }
    });



    return (
        <div className="bg-gradient-to-br from-white via-[#e51721]/5 to-white py-16 lg:py-20">
            <div className="container-sk">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#231f1e] mb-4">
                        Get In <span className="text-[#e51721]">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                        We  love to hear from you! Whether you have questions, feedback, or just want to say hello.
                    </p>
                </div>

            

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-[#231f1e] mb-2 text-center">
                            Send Us a <span className="text-[#e51721]">Message</span>
                        </h3>
                        <p className="text-gray-600 text-center mb-8">
                            Fill out the form below and we will get back to you as soon as possible
                        </p>

                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {/* Name & Email */}
                            <div className=" gap-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-[#231f1e] font-medium mb-2">
                                        Full Name <span className="text-[#e51721]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e51721]/50 transition-all ${
                                            formik.touched.name && formik.errors.name
                                                ? 'border-[#e51721]'
                                                : 'border-gray-200 focus:border-[#e51721]'
                                        }`}
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="text-[#e51721] text-sm mt-1">{formik.errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-[#231f1e] font-medium mb-2">
                                        Email Address <span className="text-[#e51721]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e51721]/50 transition-all ${
                                            formik.touched.email && formik.errors.email
                                                ? 'border-[#e51721]'
                                                : 'border-gray-200 focus:border-[#e51721]'
                                        }`}
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-[#e51721] text-sm mt-1">{formik.errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone & Subject */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-[#231f1e] font-medium mb-2">
                                        Phone Number <span className="text-[#e51721]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone"
                                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e51721]/50 transition-all ${
                                            formik.touched.phone && formik.errors.phone
                                                ? 'border-[#e51721]'
                                                : 'border-gray-200 focus:border-[#e51721]'
                                        }`}
                                        {...formik.getFieldProps('phone')}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <p className="text-[#e51721] text-sm mt-1">{formik.errors.phone}</p>
                                    )}
                                </div>

                                {/* Subject */}
                               
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-[#231f1e] font-medium mb-2">
                                    Message <span className="text-[#e51721]">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Write your message here..."
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e51721]/50 transition-all resize-none ${
                                        formik.touched.message && formik.errors.message
                                            ? 'border-[#e51721]'
                                            : 'border-gray-200 focus:border-[#e51721]'
                                    }`}
                                    {...formik.getFieldProps('message')}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <p className="text-[#e51721] text-sm mt-1">{formik.errors.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <Button 
                                    type="submit" 
                                    variant="success"
                                    className="px-12 py-3 text-lg"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;