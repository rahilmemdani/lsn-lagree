import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { Field, SelectField, TextArea, FormShell } from "@/components/FormKit";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact and Location | LSN Lagree Santacruz, Mumbai" },
      {
        name: "description",
        content:
          "Visit LSN Lagree in Santacruz, Mumbai. Studio address, hours, phone, WhatsApp and enquiry form for India's first Lagree studio.",
      },
      { property: "og:title", content: "Contact and Location | LSN Lagree Santacruz, Mumbai" },
      {
        property: "og:description",
        content: "Studio address, hours and how to reach us in Santacruz, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and find us"
        lede="Santacruz, Mumbai. Five machines, behind an unmarked door."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-2xl">Studio</h2>
            <address className="mt-6 space-y-4 text-[0.95rem] not-italic leading-relaxed text-muted-foreground">
              <p>[Full studio address], Santacruz, Mumbai [PIN code]</p>
              <p>[Phone number]</p>
              <p>[Email]</p>
              <p>Mon–Fri [hours]</p>
              <p>Sat–Sun [hours]</p>
              <p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-clay"
                >
                  Open in Google Maps
                </a>
              </p>
            </address>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <SectionHead eyebrow="Enquiries" title="Send us a note." />
            <div className="mt-10">
              <FormShell submitLabel="Send Message" confirmation="Thank you. We will reply shortly.">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <SelectField
                  label="Reason"
                  name="reason"
                  options={[
                    "First class",
                    "Private session",
                    "Corporate or group booking",
                    "Press",
                    "Something else",
                  ]}
                />
                <TextArea label="Message" name="message" className="sm:col-span-2" />
              </FormShell>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
