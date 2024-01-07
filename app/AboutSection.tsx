import React from 'react';

function AboutSection() {
    return (
        <div className="bg-slate-200 py-20">  
        <div className="grid grid-cols-2 md:gap-10 p-20 bg-white">
            <div className="md:col-span-1 ">
                <div className="text-2xl font-bold">
                    About Us
                </div>
            </div>
            <div className="md:col-span-1 col-span-2 leading-tight tracking-wider text-md font-sans">
            MLM Consultant Asia is a leading India based Software Company focused on delivering the best and most cost-effective solutions to our clients. Mini InfoTech provide variety of software services, Software Development Services, Web Development Services, Web Designing Services, MLM Software and website, Hosting services and much more. We have served our clients with Comprehensive Web Solutions - right From Strategic Planning and Online Marketing Decisions to the actual Designing, Development and Implementation with testing of the Projects, and our Support Team is always there for the Maintenance and Enhancement of the Project.
            </div>
        </div>
        </div>
    );
}

export default AboutSection;