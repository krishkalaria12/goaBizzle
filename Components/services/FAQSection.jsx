import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQSection = () => {
  
  return (
    <>
      <div className="self-start mt-5 ml-44 text-2xl font-bold tracking-tight whitespace-nowrap text-neutral-900 max-md:ml-2.5">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col p-4 mt-3 w-full text-sm leading-5 text-black  max-w-[960px] max-md:max-w-full">
        <Accordion defaultExpandedKeys={["1"]} variant="splitted">
          <AccordionItem
            className="shadow-none"
            key="1"
            aria-label="Accordion 1"
            title="What is property management?"
          >
            Property management is the oversight and operation of real estate on
            behalf of the owner. This service typically includes tenant
            management, rent collection, property maintenance, and financial
            reporting. By hiring a property manager, owners can benefit from
            professional support and a hands-off approach to their investment.
          </AccordionItem>
          <AccordionItem
            className="shadow-none"
            key="2"
            aria-label="Accordion 2"
            title="Do I need an attorney when buying a home?"
          >
            It&apos;s highly recommended to have an attorney when buying a home. A
            real estate attorney can review contracts, negotiate terms, ensure
            legal compliance, and protect your interests throughout the home
            buying process.
          </AccordionItem>
          <AccordionItem
            className="shadow-none"
            key="3"
            aria-label="Accordion 3"
            title="How do I get pre-approved for a mortgage?"
          >
            To get pre-approved for a mortgage, you&apos;ll need to submit an
            application to a lender. They will review your credit history,
            income, assets, and debts to determine the amount you can borrow.
            Being pre-approved gives you a clearer picture of your budget and
            increases your credibility as a buyer when making offers on homes.
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default FAQSection;
