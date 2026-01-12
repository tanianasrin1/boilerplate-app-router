// "use client"

// import React, { useState, useEffect, useRef } from 'react';

// const Experience = () => {
//     const [venues, setVenues] = useState(0);
//     const [items, setItems] = useState(0);
//     const [years, setYears] = useState(0);
//     const [capacity, setCapacity] = useState(0);
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 if (entries[0].isIntersecting && !hasAnimated) {
//                     setHasAnimated(true);
//                     animateCounters();
//                 }
//             },
//             { threshold: 0.3 }
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, [hasAnimated]);

//     const animateCounters = () => {
//         const duration = 2000;
//         const frameRate = 1000 / 60;
//         const totalFrames = duration / frameRate;

//         let frame = 0;
//         const counter = setInterval(() => {
//             frame++;
//             const progress = frame / totalFrames;
//             const easeOutQuad = 1 - Math.pow(1 - progress, 3);

//             setVenues(Math.floor(easeOutQuad * 100));
//             setItems(Math.floor(easeOutQuad * 250));
//             setYears(Math.floor(easeOutQuad * 30));
//             setCapacity(Math.floor(easeOutQuad * 5000));

//             if (frame >= totalFrames) {
//                 clearInterval(counter);
//                 setVenues(100);
//                 setItems(250);
//                 setYears(30);
//                 setCapacity(5000);
//             }
//         }, frameRate);
//     };

//     const formatNumber = (num) => {
//         return num.toLocaleString('en-US');
//     };

//     return (
//         <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50">
//             <div className='lg:py-16 py-8 container-sk' ref={sectionRef}>
//                 <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto'>
//                     <div className='text-center space-y-2'>
//                         <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
//                             {formatNumber(venues)}
//                             <span className='text-4xl'>+</span>
//                         </h3>
//                         <p className='text-base text-black tracking-wide'>Venues</p>
//                     </div>

//                     <div className='text-center space-y-2'>
//                         <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
//                             {formatNumber(items)}
//                             <span className='text-4xl'>+</span>
//                         </h3>
//                         <p className='text-base text-black tracking-wide'>Item</p>
//                     </div>

//                     <div className='text-center space-y-2'>
//                         <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
//                             {formatNumber(years)}
//                             <span className='text-4xl'>+</span>
//                         </h3>
//                         <p className='text-base text-black tracking-wide'>Years</p>
//                     </div>

//                     <div className='text-center space-y-2'>
//                         <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
//                             {formatNumber(capacity)}
//                             <span className='text-4xl block mt-1'>+</span>
//                         </h3>
//                         <p className='text-base text-black tracking-wide'>Capacity</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Experience;  

"use client"
import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
    const [venues, setVenues] = useState(0);
    const [items, setItems] = useState(0);
    const [years, setYears] = useState(0);
    const [capacity, setCapacity] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = duration / frameRate;

        let frame = 0;
        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);

            setVenues(Math.floor(easeOutQuad * 100));
            setItems(Math.floor(easeOutQuad * 250));
            setYears(Math.floor(easeOutQuad * 30));
            setCapacity(Math.floor(easeOutQuad * 50000));

            if (frame >= totalFrames) {
                clearInterval(counter);
                setVenues(100);
                setItems(250);
                setYears(30);
                setCapacity(50000);
            }
        }, frameRate);
    };

    const formatNumber = (num) => {
        return num.toLocaleString('en-US');
    };

    return (
        <div className="bg-white">
            <div className='lg:py-16 py-8 container-sk' ref={sectionRef}>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto'>
                    <div className='text-center space-y-2'>
                        <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
                            {formatNumber(venues)}
                            <span className='text-4xl'>+</span>
                        </h3>
                        <p className='text-base text-black  tracking-wide'>Venues</p>
                    </div>

                    <div className='text-center space-y-2'>
                        <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
                            {formatNumber(items)}
                            <span className='text-4xl'>+</span>
                        </h3>
                        <p className='text-base text-black  tracking-wide'>Item</p>
                    </div>

                    <div className='text-center space-y-2'>
                        <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
                            {formatNumber(years)}
                            <span className='text-4xl'>+</span>
                        </h3>
                        <p className='text-base text-black  tracking-wide'>Years</p>
                    </div>

                    <div className='text-center space-y-2'>
                        <h3 className='text-5xl lg:text-6xl font-light text-gray-700'>
                            {formatNumber(capacity)}
                            <span className='text-4xl'>+</span>
                        </h3>
                        <p className='text-base text-black  tracking-wide'>Capacity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;