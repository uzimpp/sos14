import ScrambleText from "@/components/effects/ScrambleText";
import FAQItem from "@/components/faq/FaqItem";
import faqSections from "@/constant/faq";

export default function FAQs() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex flex-col justify-self-center justify-center">
      <div className="flex flex-col my-(--space-xl) gap-(--space-s)">
        <ScrambleText className="text-6 text-white no_line_height font-bold text-center flex mx-auto">
          FAQ&apos;s
        </ScrambleText>
        <div className="max-w-[calc(5.5*var(--space-4xl))] flex mx-auto">
          <p className="text-0 text-center text-white/60">
            Frequently asked questions about SKE, SOS, and Programming
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-[calc(5.5*var(--space-4xl))] w-full mx-auto gap-(--space-2xl)">
        {Object.entries(faqSections).map(([section, faqs]) => (
          <section key={section} id={section.replace(" ", "")} className="">
            <small className="opacity-20 font-bold border-b-[1.618px] border-white pb-(--space-2xs) block">
              {section}
            </small>
            <div className="">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
