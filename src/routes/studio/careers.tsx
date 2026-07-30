import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { Field, SelectField, TextArea, FormShell } from "@/components/FormKit";

export const Route = createFileRoute("/studio/careers")({
  head: () => ({
    meta: [
      { title: "Careers at LSN Lagree | Train to Teach Lagree in India" },
      {
        name: "description",
        content:
          "Join India's first Lagree studio. Trainer, front of house and management roles at LSN Lagree in Santacruz, Mumbai.",
      },
      { property: "og:title", content: "Careers at LSN Lagree | Train to Teach Lagree in India" },
      {
        property: "og:description",
        content: "We train our coaches in the method properly. Apply to join the floor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  ["Lagree Trainer", "Certification supported for the right person. Movement background essential."],
  ["Front of House", "The first face of the studio. Warm, organised and completely unflappable."],
  ["Studio Manager", "Owns the floor, the schedule and the standard of every class that runs."],
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio"
        title="Careers"
        lede="We are building the team that will teach this method across the country."
      />

      <Section>
        <SectionHead eyebrow="Open roles" title="Where we need people." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {ROLES.map(([t, b], i) => (
            <Reveal key={t} delay={i * 90} className="bg-background p-8 md:p-10">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-muted-foreground">{b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">Apply</h2>
            <p className="lede mt-6">
              Tell us who you are and what you have trained in. We read every application.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <FormShell submitLabel="Send Application" confirmation="Thank you. We will be in touch.">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <SelectField
                label="Role"
                name="role"
                options={["Lagree Trainer", "Front of House", "Studio Manager", "Something else"]}
              />
              <Field label="Link to CV or portfolio" name="link" className="sm:col-span-2" />
              <TextArea label="Why LSN" name="message" className="sm:col-span-2" />
            </FormShell>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
