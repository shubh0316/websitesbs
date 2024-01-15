import React from "react";
import seo1 from "@/assets/seo1.png";
import seo2 from "@/assets/seo2.png";
import seo3 from "@/assets/seo3.png";
import seo4 from "@/assets/seo4.png";
import seo5 from "@/assets/seo5.png";
import Image from "next/image";

const Description = () => {
  return (
    <div className="overflow-x-auto">
      <div className= "p-8 md:p-10 text-left space-y-4 font-sans overflow-x-hidden">
        <div className="font-bold text-2xl md:text-4xl">
          SOCIAL MEDIA OPTIMIZATION SERVICES SMO
        </div>

        <div className="bg-slate-50 rounded-2xl">
          <div className="flex flex-col md:flex-row p-10 space-x-0 md:space-x-6">
            <div className=" md:w-20 md:flex-shrink-0">
              <Image src={seo1} alt="" width={80} height={20} />
            </div>
            <div className="md:flex-grow">
              <p className="font-bold text-slate-600 text-2xl font-sans">
                Search Engine Optimization (SEO)
              </p>
              <p className="text-xl text-slate-700 font-sans">
                As a leading SEO agency, we specialize in elevating your online
                visibility to new heights. Our comprehensive SEO services in
                India ensure that your target audience effortlessly finds what
                they're searching for using relevant keywords.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-10 space-x-0 md:space-x-6">
            <div className="md:w-20 md:flex-shrink-0">
              <Image src={seo2} alt="" width={80} height={0} />
            </div>
            <div className="md:flex-grow">
              <p className="font-bold text-slate-600 text-2xl font-sans">
                Social Media Optimization (SMO)
              </p>
              <p className="text-xl text-slate-700 font-sans">
                As a top social media services company, we specialize in
                unleashing the viral potential of your campaigns. With a deep
                understanding of the pivotal role social media marketing plays
                in today's digital ecosystem, we provide comprehensive social
                media marketing packages that deliver exceptional results.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-10 space-x-4 md:space-x-4">
            <div className="md:w-20 md:flex-shrink-0">
              <Image src={seo3} alt="" width={80} height={0} />
            </div>
            <div className="md:flex-grow">
              <p className="font-bold text-slate-600 text-2xl font-sans">
                Performance Marketing
              </p>
              <p className="text-xl text-slate-700 font-sans">
                As a top social media services company, we specialize in
                unleashing the viral potential of your campaigns. With a deep
                understanding of the pivotal role social media marketing plays
                in today's digital ecosystem, we provide comprehensive social
                media marketing packages that deliver exceptional results.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-10 space-x-4 md:space-x-4">
            <div className="md:w-20 md:flex-shrink-0">
              <Image src={seo4} alt="" width={80} height={0} />
            </div>
            <div className="md:flex-grow">
              <p className="font-bold text-slate-600 text-2xl font-sans">
                Lead Generation
              </p>
              <p className="text-xl text-slate-700 font-sans">
                We are one of the leading online lead generation companies in
                India. Leverage our 17+ years of experience to reach your
                target audience & get more leads for your business.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-10 space-x-4 md:space-x-4">
            <div className="md:w-20 md:flex-shrink-0">
              <Image src={seo5} alt="" width={80} height={0} />
            </div>
            <div className="md:flex-grow">
              <p className="font-bold text-slate-600 text-2xl font-sans">
                Design & Posting
              </p>
              <p className="text-xl text-slate-700 font-sans">
                Some of our designers are world class with certificates from top
                schools, we will ensure that all our designs and video editing
                are done as per the client requirements and objectives of the
                business. We use canva and all the latest tools to ensure
                smooth process and outflow of work.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-x-2 font-sans">
          <p className="font-bold text-slate-600 text-2xl font-sans">
            Some SMO techniques we follow:-
          </p>
          <p className="text-xl text-slate-700 font-sans">
            Social Profile Listing, Blogging, Social Bookmarking, Designing
            shareable graphical content, Posting engaging content, Social Media
            Marketing, Photo & Video Sharing, Managing pages and accounts, Guest
            Posting, SMO Plan in Noida, social media profile management,
            personal social media profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
