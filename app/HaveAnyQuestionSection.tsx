"use client"
import React from 'react';
import plus from "@/assets/svg/plus.svg";
import minus from "@/assets/svg/minus.svg";
import Image from 'next/image';
import { useState } from "react";

function HaveAnyQuestionSection() {
  const faqsData = [
    {
      question: "How long are you contracts?",
      answer: "You have the option to pay per month, every half a year or every year, across all of our packages. You can change your billing cycle at any time.",
      isOpen: false,
    },
    {
      question: "Is it easy to upgrade or downgrade my package?",
      answer: "You have the option to pay per month, every half a year or every year, across all of our packages. You can change your billing cycle at any time.",
      isOpen: false,
    },
    {
      question: "Do I need web hosting in addition to my MLM Consultant Asia account?",
      answer: "You have the option to pay per month, every half a year or every year, across all of our packages. You can change your billing cycle at any time.",
      isOpen: false,
    },
    {
      question: "Are there any hidden costs with MLM Consultant Asia?",
      answer: "You have the option to pay per month, every half a year or every year, across all of our packages. You can change your billing cycle at any time.",
      isOpen: false,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleArrowClick = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-slate-100 text-center'>
      <div className="flex flex-col py-10">
        <div className="text-2xl font-extrabold">
          HAVE ANY QUESTIONS?
        </div>
        <div className="text-lG font-normal leading-tight">
          We are providing the following best services.
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="grid gap-4 text-2xl items-center text-bold md:ml-10 mb-10">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`grid gap-4 text-lg col-span-2 font-sans text-balance bg-white rounded-xl bg-white-300 px-8 md:px-8 md:py-[3%] md:items-end shadow-xl ${openIndex === index ? "mb-3" : "mb-2"
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
                <div className="flex font-normal text-[#5C5C5C] max-w-xl text-left duration-300 overflow-hidden">
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
