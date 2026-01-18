"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Digital Labour Chowk?",
    answer:
      "Digital Labour Chowk is an online platform that connects daily wage workers with contractors and employers. It helps workers find nearby job opportunities and enables contractors to hire skilled and reliable labour quickly through a digital system.",
  },
  {
    question: "Why should you choose Digital Labour Chowk?",
    answer:
      "Digital Labour Chowk simplifies hiring and job searching by offering transparency, faster access to work, and verified users. Workers can find jobs based on their skills and wages, while contractors save time by hiring digitally.",
  },
  {
    question: "How can I find a job on Digital Labour Chowk?",
    answer:
      "Download the Digital Labour Rojgar App, register using your basic details such as name, mobile number, skills, and expected daily wage. You can then browse job listings and apply for suitable jobs posted by contractors.",
  },
  {
    question: "How do workers receive payment for their services?",
    answer:
      "Payment terms are agreed upon between the worker and contractor before the job begins. Payments are usually made daily or per task, either in cash or through digital payment methods.",
  },
  {
    question: "What steps are taken to ensure the safety of workers on the platform?",
    answer:
      "The platform ensures safety by registering verified users, allowing only registered contractors to post jobs, enabling transparent communication, and providing support for reporting issues.",
  },
  {
    question: "Is there any cost for workers to use Digital Labour Chowk?",
    answer:
      "No. Digital Labour Chowk is completely free for workers. There are no registration fees or charges for applying to jobs.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_DATA.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-zinc-900"
          >
            <button
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-gray-900 transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-gray-100 dark:hover:bg-zinc-800"
            >
              <span>{faq.question}</span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="px-4 pb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
