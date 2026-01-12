// "use client";
// import React from "react";

// const Gallery = () => {
//   return (
//     <div className="bg-[#fcf7f4]">
//       <section className="lg:py-16 py-10 container-sk arrow_no_margin ">
//         <p className=" lg:text-4xl md:text-3xl text-2xl font-semibold lg:mt-8 mt-5 text-center">
//           আমাদের <span className="text-red">সেবাসমূহ</span>
//         </p>
//         <p className="lg:w-1/2 w-full  mx-auto text-center text-gray-500  lg:mt-5 mt-3 tracking-wide lg:text-xl md:text-xl text-lg">
//           যেখানে প্রতিটি আয়োজন মানেই স্বাদের উৎসব, আর প্রতিটি পদ তৈরি হয় যত্ন আর
//           ভালোবাসায়
//         </p>

//         <div className="mt-10 lg:mt-10">
//           <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-y-8"></div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;


"use client";
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "ফ্রাইড চিকেন",
      category: "মেইন কোর্স",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80"
    },
    {
      id: 2,
      title: "বিরিয়ানি",
      category: "স্পেশাল আইটেম",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
    },
    {
      id: 3,
      title: "ক্যাটারিং সেটআপ",
      category: "ইভেন্ট সার্ভিস",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
    },
    {
      id: 4,
      title: "সুস্বাদু স্ন্যাকস",
      category: "স্টার্টার",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
    },
    
    {
      id: 5,
      title: "সুস্বাদু স্ন্যাকস",
      category: "স্টার্টার",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
    },
    {
      id: 6,
      title: "ডেজার্ট কালেকশন",
      category: "মিষ্টি",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80"
    },
    {
      id: 7,
      title: "পার্টি প্ল্যাটার",
      category: "পার্টি প্যাকেজ",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
    },
    {
      id: 8,
      title: "ক্যাটারিং সেটআপ",
      category: "ইভেন্ট সার্ভিস",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
    },
     {
      id: 9,
      title: "বিরিয়ানি",
      category: "স্পেশাল আইটেম",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80"
    },
    {
      id: 10,
      title: "ফ্রাইড চিকেন",
      category: "মেইন কোর্স",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80"
    },
    {
      id: 11,
      title: "সুস্বাদু স্ন্যাকস",
      category: "স্টার্টার",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80"
    },
    {
      id: 12,
      title: "ক্যাটারিং সেটআপ",
      category: "ইভেন্ট সার্ভিস",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#fcf7f4]">
      <section className="lg:py-16 py-10 px-4 max-w-7xl mx-auto">
        <p className="lg:text-4xl md:text-3xl text-2xl font-semibold lg:mt-8 mt-5 text-center">
          আমাদের <span className="text-red-600">গ্যালারি</span>
        </p>
        <p className="lg:w-1/2 w-full mx-auto text-center text-gray-500 lg:mt-5 mt-3 tracking-wide lg:text-xl md:text-xl text-lg">
          যেখানে প্রতিটি আয়োজন মানেই স্বাদের উৎসব, আর প্রতিটি পদ তৈরি হয় যত্ন আর ভালোবাসায়
        </p>

        <div className="mt-10 lg:mt-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium text-orange-300 mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>

    </div>
  );
};

export default Gallery;