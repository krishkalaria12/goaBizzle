import React from "react";

const FAQItem = ({ question, answer, imageUrl }) => {
  return (
    <div className="flex flex-col justify-center px-4 py-4 mt-3 font-medium bg-white rounded-xl border border-solid border-stone-200 text-neutral-900 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto">{question}</div>
        <img
          loading="lazy"
          src={imageUrl}
          className="self-start w-5 aspect-square"
          alt="FAQ Image"
        />
      </div>
      <div className="mt-2 mb-2.5 text-stone-500 max-md:max-w-full">{answer}</div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is property management?",
      answer:
        "Property management is the oversight and operation of real estate on behalf of the owner. This service typically includes tenant management, rent collection, property maintenance, and financial reporting. By hiring a property manager, owners can benefit from professional support and a hands-off approach to their investment.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b57b920ca6b6e44989c18b135cfea13944f4c8d9c3dfd6fb613d2ea82cfef6e8?",
    },
    {
      question: "Do I need an attorney when buying a home?",
      answer:
        "It's highly recommended to have an attorney when buying a home. A real estate attorney can review contracts, negotiate terms, ensure legal compliance, and protect your interests throughout the home buying process.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/750be8fb1a1772fad4ecdc202f7eb8c584cfed8568f4c20fcb3f7107065eb5ff?",
    },
    {
      question: "How do I get pre-approved for a mortgage?",
      answer:
        "To get pre-approved for a mortgage, you'll need to submit an application to a lender. They will review your credit history, income, assets, and debts to determine the amount you can borrow. Being pre-approved gives you a clearer picture of your budget and increases your credibility as a buyer when making offers on homes.",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bc45a74f443d1b8d8f308ce51502152ae5bf4b530f264e114920f296bbcb245?",
    },
  ];

  return (
    <div className="self-start mt-5 ml-44 text-2xl font-bold tracking-tight whitespace-nowrap text-neutral-900 max-md:ml-2.5">
      Frequently Asked Questions
      <div className="flex flex-col p-4 mt-3 w-full text-sm leading-5 max-w-[960px] max-md:max-w-full">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            imageUrl={faq.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
