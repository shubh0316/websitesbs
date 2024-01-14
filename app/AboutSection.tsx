"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = ["/about-1.png", "/about-2.png", "/about-3.png"].map(
    (url) => ({ url })
);

const SectionAboutUs = () => {
    return (
        <>
            <div className="overflow-hidden">  
            <div
                id="about"
                className="flex flex-col-reverse md:flex-row justify-center items-center md:items-center lg:items-start md:gap-8 gap-5 md:mb-10 mb-24 mt-24 md:mt-20"
            >

                <div className="absolute"></div>
                <div className="h-fit w-fit rounded-2xl overflow-hidden">
                    <motion.div
                        className="object-cover h-[28rem] w-[25rem] mt-4  rounded-md overflow-hidden bg-center"
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        initial={{ x: "-100%", opacity: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <SimpleImageSlider
                            width="120%"
                            height="140%"
                            images={sliderImages}
                            showBullets={false}
                            showNavs={false}
                            slideDuration={2}
                            autoPlay={true}
                            autoPlayDelay={1}
                        />
                    </motion.div>
                </div>

                <div className="flex flex-col md:items-start items-center justify-between gap-4 px-5 w-full md:w-1/2">
                <h3 className="font-bold block text-center   text-2xl">
                About Us
            </h3>
                    <div className="overflow-hidden">
                        <motion.h1
                            whileInView={{ y: 0 }}
                            initial={{ y: "100%" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-gray-500  md:text-left text-center text-lg"
                        >
                            <Balancer>
                                MLM Consultant Asia is a leading Direct Selling and Networking Marketing Consultant firm in Asia. Our work spans across 10 major markets in Asia, our primary area of consulting include corporate setup and software services focused on delivering the best and most cost-effective solutions to our clients.
                            </Balancer>
                        </motion.h1>
                    </div>
                    <p className="text-gray-500 md:text-left text-center  text-lg ">
                        MLM Consultant Asia also provides variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
                    </p>
                    <p className="text-gray-500 md:text-left text-center  text-lg ">
                        MLM Consultant Asia also conducts leaders trainings and Events for owners and leaders Across Asia. Contact us for more detail on how we can help you and server you better in this region.
                    </p>
                </div>
            </div>
            </div>
        </>
    );
};

export default SectionAboutUs;