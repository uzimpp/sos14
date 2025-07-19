import ScrambleText from "@/components/effects/ScrambleText";
import FAQItem from "@/components/faq/FaqItem";
import faqSections from "@/constants/FAQs";

export default function FAQs() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] mx-auto w-full flex flex-col justify-self-center justify-center">
      <div className="flex flex-col mt-(--space-l-xl) gap-(--space-s) items-center">
        <h3>
          <ScrambleText className="text-white no_line_height font-medium text-center flex mx-auto glow glow-pink">
            FAQs
          </ScrambleText>
        </h3>
        <div className="max-w-[calc(5.5*var(--space-4xl))] flex justify-center">
          <p className="text-0 text-center text-white/60">
            Frequently asked questions about SKE, SOS, and Programming
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-[calc(5.5*var(--space-4xl))] w-full mx-auto">
        {Object.entries(faqSections).map(([section, faqs]) => (
          <section key={section} id={section.replace(" ", "")} className="">
            <small className="font-semibold border-b-[1.618px] border-white/20 pb-(--space-2xs) block">
              <span className="text-white/60">{section}</span>
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
