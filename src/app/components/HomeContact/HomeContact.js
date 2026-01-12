// import React from 'react';

// const HomeContact = () => {
//     return (
//         <div className=''>
//             <div className='lg:py-16 py-8 container-sk'>
//                 <div className='flex lg:flex-row flex-col'>
//                     <div className='lg:w-1/2 w-full'>
                
//                     </div>
//                     <div className='lg:w-1/2 w-full'>

//                     </div>

//                 </div>

//             </div>
            
//         </div>
//     );
// };

// export default HomeContact; 


"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HomeContact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(2, 'Name must be at least 2 characters'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .required('Message is required')
                .min(10, 'Message must be at least 10 characters')
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log('Form submitted:', values);
            alert('Message sent successfully!');
            resetForm();
            setSubmitting(false);
        }
    });

    return (
        <div className="bg-[#fcf7f4]">
            <div className="lg:py-16 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get in touch</h2>
                
                <div className="flex lg:flex-row flex-col gap-8">
                    {/* Left Side - Image */}
                    <div className="lg:w-1/2 w-full flex items-center justify-center">
                        <div className="w-full max-w-lg">
                            <img 
                                src="/images/2467639.jpg" 
                                alt="Contact Us" 
                                className="w-full h-auto rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                    
                    {/* Right Side - Form */}
                    <div className="lg:w-1/2 w-full">
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            {/* Name and Email Row */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Name Field */}
                                <div className="flex-1">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Name*
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            formik.touched.name && formik.errors.name
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                        }`}
                                        {...formik.getFieldProps('name')}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
                                    )}
                                </div>
                                
                                {/* Email Field */}
                                <div className="flex-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                        Your Email*
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                            formik.touched.email && formik.errors.email
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                        }`}
                                        {...formik.getFieldProps('email')}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
                                    )}
                                </div>
                            </div>
                            
                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                                    Write Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Write Message"
                                        className={`w-full px-4 py-3 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                                            formik.touched.message && formik.errors.message
                                                ? 'border-red-500'
                                                : 'border-gray-300'
                                        }`}
                                        {...formik.getFieldProps('message')}
                                    />
                                    <button
                                        type="button"
                                        className="absolute bottom-4 right-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-2 transition-colors"
                                        aria-label="WhatsApp"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    </button>
                                </div>
                                {formik.touched.message && formik.errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{formik.errors.message}</p>
                                )}
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Send
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;