import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead, Numbered } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { Field, SelectField, TextArea, FormShell } from "@/components/FormKit";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Lagree Franchise Opportunities in India | LSN Lagree" },
      {
        name: "description",
        content:
          "Partner with India's first Lagree studio. Franchise opportunities for LSN Lagree across Indian cities, with training and brand support.",
      },
      { property: "og:title", content: "Lagree Franchise Opportunities in India | LSN Lagree" },
      {
        property: "og:description",
        content: "Bring the Lagree Method to your city with the studio that brought it to India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FranchisePage,
});

const STEPS = [
  { n: "01", title: "Enquiry", body: "You tell us the city, the space and the intent. We read every enquiry ourselves." },
  { n: "02", title: "Conversation", body: "A working session on the model, the numbers and what the method demands of an operator." },
  { n: "03", title: "Site and design", body: "We help identify the space and build the room to LSN specification." },
  { n: "04", title: "Training", body: "Your trainers are certified in the method and coached by our Master Trainer." },
  { n: "05", title: "Open", body: "Launch support, programming and brand systems, then an ongoing standard we hold you to." },
];

function FranchisePage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise"
        title="Bring Lagree to your city"
        lede="We opened the first Lagree studio in India. We are now looking for partners to open the next ones."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">Why partner with LSN</h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 lg:col-span-8">
            <p className="lede">
              A defined method, a small footprint, a high-value membership and a brand built to be
              understood the moment someone walks in.
            </p>
            <p className="text-[0.98rem] leading-relaxed text-muted-foreground">
              Five machines fit into a compact space. Classes are fifty minutes, which means a full
              day of sessions in a modest room. The method is proprietary, protected and difficult
              to imitate — which is precisely what makes it defensible in a crowded market.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHead eyebrow="Process" title="How a partnership works." />
        <div className="mt-12">
          {STEPS.map((s) => (
            <Numbered key={s.n} index={s.n} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <h2 className="display-md">Enquire</h2>
            <p className="lede mt-6">Serious enquiries only. We are selective, deliberately.</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8">
            <FormShell submitLabel="Send Enquiry" confirmation="Thank you. We will respond personally.">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="City" name="city" required />
              <SelectField
                label="Investment capacity"
                name="capacity"
                options={["Under [₹X]", "[₹X] to [₹Y]", "Above [₹Y]", "Prefer to discuss"]}
              />
              <SelectField
                label="Do you have a space identified"
                name="space"
                options={["Yes", "No", "In discussion"]}
              />
              <TextArea label="Tell us about your background" name="message" className="sm:col-span-2" />
            </FormShell>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
