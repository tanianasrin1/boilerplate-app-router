// "use client"
// import React from 'react';
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import "react-photo-view/dist/react-photo-view.css";

// const WhatWeDo = () => {
//     const galleryImages = [
//         {
//             id: 1,
//             src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
//             title: "Team Collaboration"
//         },
//         {
//             id: 2,
//             src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
//             title: "Strategic Planning"
//         },
//         {
//             id: 3,
//             src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
//             title: "Creative Workspace"
//         },
//         {
//             id: 4,
//             src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
//             title: "Innovation & Growth"
//         },
//         {
//             id: 5,
//             src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
//             title: "Business Meeting"
//         },
//         {
//             id: 6,
//             src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
//             title: "Team Success"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
//             <div className="container-sk">
//                 <div className="text-center mb-12">
//                     <h1 className="text-5xl font-bold text-slate-800 mb-4">What We Do</h1>
//                     <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//                         Explore our work through these moments captured in our journey
//                     </p>
//                 </div>

//                 <PhotoProvider>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {galleryImages.map((image) => (
//                             <PhotoView key={image.id} src={image.src}>
//                                 <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
//                                     <div className="relative aspect-square">
//                                         <img
//                                             src={image.src}
//                                             alt={image.title}
//                                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                                         />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                             <div className="absolute bottom-0 left-0 right-0 p-4">
//                                                 <h3 className="text-white text-lg font-semibold">
//                                                     {image.title}
//                                                 </h3>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </PhotoView>
//                         ))}
//                     </div>
//                 </PhotoProvider>
//             </div>
//         </div>
//     );
// };

// export default WhatWeDo;  


"use client"
import React from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const WhatWeDo = () => {
    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
            title: "টিম সহযোগিতা"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
            title: "কৌশলগত পরিকল্পনা"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
            title: "সৃজনশীল কর্মক্ষেত্র"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
            title: "উদ্ভাবন ও উন্নয়ন"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
            title: "ব্যবসায়িক সভা"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
            title: "টিম সাফল্য"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
            <div className="container-sk">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">আমরা যা করি</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        আমাদের যাত্রায় ধারণ করা এই মুহূর্তগুলোর মাধ্যমে আমাদের কাজ অন্বেষণ করুন
                    </p>
                </div>

                <PhotoProvider>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                            <PhotoView key={image.id} src={image.src}>
                                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <div className="relative aspect-square">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 className="text-white text-lg font-semibold">
                                                    {image.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default WhatWeDo;