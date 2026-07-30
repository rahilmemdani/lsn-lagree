import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/ui-kit";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Lagree FAQ | LSN Lagree Santacruz, Mumbai" },
      {
        name: "description",
        content:
          "Answers on Lagree classes, class size, grip socks, soreness, injuries, pregnancy, booking and cancellation at LSN Lagree in Mumbai.",
      },
      { property: "og:title", content: "Lagree FAQ | LSN Lagree Santacruz, Mumbai" },
      {
        property: "og:description",
        content: "Everything people ask before their first class at India's first Lagree studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked"
        lede="If your question is not here, message us on WhatsApp and a human will answer."
      />
      <Section>
        <div className="max-w-4xl">
          <Accordion items={FAQS} />
        </div>
      </Section>
      <CtaBand title="Still deciding? Take one class." />
    </>
  );
}
