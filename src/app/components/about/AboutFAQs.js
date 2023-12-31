"use client";

import React from "react";

const faqs = [
  {
    id: 1,
    question: "What services does Empuls3 offer?",
    answer:
      "We specialize in a range of digital services including custom software development, UI/UX design, web and mobile app development, and more.",
  },
  {
    id: 2,
    question: "How does Empuls3 ensure project success?",
    answer:
      "We follow a rigorous process that includes thorough planning, regular communication, and quality assurance to ensure each project meets our high standards.",
  },
  {
    id: 3,
    question: "Can Empuls3 help with both web and mobile app development?",
    answer:
      "Absolutely! We have expertise in developing both web and mobile applications, ensuring a seamless experience across all platforms.",
  },
  {
    id: 4,
    question: "What industries does Empuls3 cater to?",
    answer:
      "Our services span various industries, including healthcare, finance, education, retail, and more, offering tailored solutions for each sector.",
  },
  {
    id: 5,
    question: "How does Empuls3 approach a new project?",
    answer:
      "We start with a detailed consultation to understand your needs, followed by strategic planning, design, development, and deployment.",
  },
  {
    id: 6,
    question: "What is Empuls3's experience with emerging technologies?",
    answer:
      "We are well-versed in emerging technologies like AI, blockchain, and IoT, integrating them into solutions as per client requirements.",
  },
  {
    id: 7,
    question: "Does Empuls3 provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance services to ensure your project remains up-to-date and runs smoothly post-launch.",
  },
  {
    id: 8,
    question: "How does Empuls3 handle project communication and updates?",
    answer:
      "We maintain open lines of communication through regular updates, meetings, and reports, ensuring clients are always informed.",
  },
  {
    id: 9,
    question: "Can Empuls3 assist with digital marketing and SEO?",
    answer:
      "Yes, we offer digital marketing and SEO services to enhance your online presence and drive targeted traffic to your site.",
  },
  {
    id: 10,
    question: "How can I start a project with Empuls3?",
    answer:
      "Simply contact us through our website or give us a call. We'll discuss your needs and how we can help bring your project to life.",
  },
];

function AboutFAQs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default AboutFAQs;
