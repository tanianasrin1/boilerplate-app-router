"use client"
import Image from 'next/image';
import React from 'react';
import Button from '../UI/Button';

const News = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/photo.jpg",
      category: "গল্প",
      date: "ফেব্রুয়ারি ২৬, ২০২৪",
      title: "বিয়ের অনুষ্ঠানের জন্য ফুড বার আইডিয়া"
    },
    {
      id: 2,
      image: "/images/sbUT.jpg",
      category: "রেসিপি",
      date: "মার্চ ১৫, ২০২৪",
      title: "ঐতিহ্যবাহী বাংলা খাবারের নতুন আয়োজন"
    },
    {
      id: 3,
      image: "/images/photo.jpg",
      category: "টিপস",
      date: "এপ্রিল ০৮, ২০২৪",
      title: "কর্পোরেট ইভেন্টের জন্য সেরা মেনু পরিকল্পনা"
    }
  ];

  return (
    <div className="bg-[#fcf7f4]">
      <section className="lg:py-16 py-8 container-sk px-4">
        <p className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:mt-8 mt-5 text-center">
          আমাদের <span className="text-red-600">ব্লগ</span>
        </p>
        <p className="lg:w-1/2 w-full mx-auto text-center text-gray-500 lg:mt-5 mt-3 tracking-wide lg:text-xl md:text-xl text-lg">
          প্রতিটি খাবার তৈরি হয় যত্ন ও ভালোবাসায়। আমাদের অভিজ্ঞ শেফ টিম আপনার
          জন্য প্রস্তুত করবে দেশি-বিদেশি সব ধরনের মুখরোচক খাবার
        </p>

        <div className="mt-10 lg:mt-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={370}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blog.date}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <button className="mt-4 text-red-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    আরও পড়ুন
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            সব ব্লগ দেখুন
          </button> */}

                <Button variant="success">সব ব্লগ দেখুন</Button>
        </div>
      </section>
    </div>
  );
};

export default News;