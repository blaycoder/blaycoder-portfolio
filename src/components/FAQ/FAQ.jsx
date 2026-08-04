import { useState } from "react";
import { faq } from "../../portfolio";
import SectionShell from "../brutal/SectionShell";
import BrutalCard from "../brutal/BrutalCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <BrutalCard className="mb-4 last:mb-0">
      <Collapsible open={open} onOpenChange={setOpen}>
        <h3 className="text-left text-lg font-extrabold text-black">
          {item.question}
        </h3>
        <CollapsibleTrigger className="mt-3 inline-flex min-h-11 items-center text-sm font-bold text-black underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-black">
          {open ? "Got it" : "Reveal answer"}
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden pt-3">
          <p className="text-left text-sm leading-relaxed text-black/90">
            {item.answer}
          </p>
        </CollapsibleContent>
      </Collapsible>
    </BrutalCard>
  );
};

const FAQ = () => {
  if (!faq?.length) return null;

  return (
    <SectionShell id="faq" bgClass="bg-brutal-red">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-black md:mb-12 md:text-4xl">
        FAQ
      </h2>
      <div>
        {faq.map((item) => (
          <FAQItem key={item.question} item={item} />
        ))}
      </div>
    </SectionShell>
  );
};

export default FAQ;
