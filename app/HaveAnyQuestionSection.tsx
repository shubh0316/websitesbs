"use client"
import React from 'react';
import plus from "@/assets/svg/plus.svg";
import minus from "@/assets/svg/minus.svg";
import Image from 'next/image';
import { useState } from "react";

function HaveAnyQuestionSection() {
  const faqsData = [
    {
      question: "What is LC's Fleet Management System (FMS)?",
      answer: "LC's Fleet Management System (FMS) is an advanced software solution designed to transform fleet management processes, emphasizing safety and compliance. This comprehensive platform integrates collision reports, inspection reports, and conviction reports, enabling fleet owners and managers to proactively mitigate risks, streamline operations, and uphold Canadian safety regulations.",
      isOpen: false,
    },
    {
      question: "How does the FMS dashboard benefit fleet managers?",
      answer: "The FMS dashboard serves as a centralized hub of information, providing real-time visibility and actionable insights to fleet managers. This feature-rich dashboard offers a comprehensive overview of fleet operations, including safety ratings and violation rates. It empowers managers to make informed decisions, engage in proactive management, and maintain compliance with regulatory requirements.",
      isOpen: false,
    },
    {
      question: "What sets LC's FMS apart from traditional fleet management systems?",
      answer: "LC's FMS goes beyond conventional fleet management by offering a specialized feature to efficiently handle collision conviction and inspection data. This powerful capability enables fleet managers to monitor, analyze, and mitigate risks associated with collisions and inspections. The system ensures enhanced safety, regulatory compliance, and operational excellence through data-driven insights.",
      isOpen: false,
    },
    {
      question: "How does the FMS help in managing drivers and vehicles?",
      answer: "LC's FMS offers a dedicated mechanic's dashboard that allows for flexible scheduling adjustments and real-time pre-trip inspections monitoring. Drivers can promptly request repairs, with immediate access to mechanics and emergency backup support. The system simplifies safety renewals, compliance tracking, work order management, and inventory tracking, contributing to smoother operations and regulatory adherence.",
      isOpen: false,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleArrowClick = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-slate-200 text-center'>
      <div className="flex flex-col py-10">
        <div className="text-2xl font-extrabold">
          HAVE ANY QUESTIONS?
        </div>
        <div className="text-lG font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid gap-4 text-2xl items-center text-bold md:ml-10 ">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`grid gap-4 text-lg col-span-2 text-balance bg-white rounded-xl bg-white-300 px-8 md:px-8 md:py-[3%] md:items-end shadow-xl ${openIndex === index ? "mb-3" : "mb-2"
                }`}
            >
              <div
                className="flex justify-between md:gap-40 cursor-pointer"
                onClick={() => handleArrowClick(index)}
              >
                <span className="text-bold font-lc">{faq.question}</span>
                <div className="p-2 rounded-xl">
                  {faq.isOpen ? (
                    <Image className="h-10 rotate-45" src={minus} alt="minus" />
                  ) : (
                    <Image className="h-8" src={plus} alt="plus" />
                  )}
                </div>
              </div>
              {openIndex === index && (
                <div className="flex font-normal text-[#5C5C5C] max-w-2xl duration-300 overflow-hidden">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HaveAnyQuestionSection;
