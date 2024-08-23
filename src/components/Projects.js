import React, { useState } from "react";
import Image1 from "../assets/pikaso_texttoimage_Robot-precision-Agriculture-using-machine-learning (1).jpeg";
import Image2 from "../assets/pikaso_texttoimage_A-helmet-which-helps-the-blind-people-to-interact-.jpeg";
import Image3 from "../assets/pikaso_texttoimage_published-paper-in-journal-in-the-domain-of-machie (4).jpeg";

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { image: Image1, text: "Precision Agriculture", description: "Our precision agriculture project utilizes machine learning algorithms to assess soil fertility levels. By analyzing soil data from multiple sources, including soil samples and satellite imagery, our system provides accurate insights to help farmers make informed decisions on crop selection and resource management. This innovative approach optimizes crop yield while promoting sustainable farming practices." },
        { image: Image2, text: "SightSync", description: "Sightsync is an innovative helmet designed to assist visually impaired individuals in navigating and interacting with their environment. Using cutting-edge machine learning models (LLMs), Sightsync interprets real-time surroundings and provides auditory cues or haptic feedback to the user, enabling them to navigate safely and independently. By leveraging advanced technology, Sightsync enhances the mobility and quality of life for the visually impaired, empowering them to engage with the world around them with confidence." },
        { image: Image3, text: "Optimizing Machine Learning Models: A Comprehensive Evaluation for Superior Predictive Performance ", description: "Our paper, 'Optimizing Machine Learning Models for Diabetes Diagnosis,' showcases the effectiveness of Random Forest in achieving an impressive accuracy of 81.168% in diabetes prediction. Our findings offer valuable insights for healthcare practitioners and data scientists, enhancing predictive modeling for diabetes and improving patient care." }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <section id="Projects" className="bg-black py-[110px]">
            <h1 className="text-white text-5xl flex items-center">
                <span className="flex-2 px-20 border-b-4 w-[250px] border-[#0077cc] inline-block">Projects</span>
            </h1>

            <div className="py-8 container mx-auto relative">
                <div className="h-[80vh] overflow-hidden">
                    <img src={slides[currentSlide].image} alt={slides[currentSlide].text} className="object-cover h-full w-full rounded-3xl" />
                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col">
                        <h2 className="text-4xl font-bold text-white w-full text-center mb-4">{slides[currentSlide].text}</h2>
                        <p className="text-white text-center px-20">{slides[currentSlide].description}</p>
                    </div>
                </div>
                <div className="absolute px-5 flex h-full w-full top-0 left-0">
                    <div className="my-auto w-full flex justify-between">
                        <button onClick={prevSlide} className="bg-white text-center p-3 rounded-full bg-opacity-80 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="bg-white p-3 rounded-full bg-opacity-80 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
