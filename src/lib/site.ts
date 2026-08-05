export const BOOKING_URL = "#booking";
export const INSTAGRAM_URL = "https://www.instagram.com/lsnlagree/";


export const STUDIO = {
  name: "LSN Lagree",
  locality: "Santacruz, Mumbai",
  tagline: "India's first Lagree studio.",
};

export type NavChild = { label: string; to: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "The Method",
    to: "/the-method",
    children: [
      { label: "The Lagree Method", to: "/the-method" },
      { label: "Sebastian Lagree", to: "/the-method/sebastian-lagree" },
      { label: "The Micro Pro", to: "/the-method/the-micro-pro" },
      { label: "What to Expect", to: "/classes/first-class" },
    ],
  },
  {
    label: "Classes",
    to: "/classes",
    children: [
      { label: "Class Formats", to: "/classes" },
      { label: "Schedule", to: "/classes/schedule" },
      { label: "Pricing and Packages", to: "/classes/pricing" },
      { label: "Your First Class", to: "/classes/first-class" },
    ],
  },
  {
    label: "Studio",
    to: "/studio",
    children: [
      { label: "About LSN", to: "/studio" },
      { label: "The Founders", to: "/studio/founders" },
      { label: "The Space", to: "/studio/the-space" },
      { label: "Careers", to: "/studio/careers" },
    ],
  },
  { label: "Franchise", to: "/franchise" },
  {
    label: "Community",
    to: "/community",
    children: [
      { label: "Journal", to: "/community/journal" },
      { label: "Events", to: "/community/events" },
      { label: "Newsletter", to: "/community/newsletter" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const CLASS_FORMATS = [
  {
    name: "LSN Full Body",
    duration: "50 minutes",
    level: "All levels",
    description:
      "The complete method. Legs, core, back, arms and glutes in one continuous sequence, with no section of the body left out and no moment without tension. If you take one class a week, take this one.",
  },
  {
    name: "LSN Core",
    duration: "50 minutes",
    level: "All levels",
    description:
      "Built around the centre. Deep abdominal work, obliques and the stabilisers that hold your posture together, layered with full-body sequences so the intensity never drops.",
  },
  {
    name: "LSN Lower",
    duration: "50 minutes",
    level: "All levels",
    description:
      "Glutes, hamstrings, quads and calves, worked through slow eccentric loading. Expect shaking. Expect to feel it for two days.",
  },
  {
    name: "LSN Upper and Core",
    duration: "50 minutes",
    level: "Intermediate",
    description:
      "Shoulders, back, chest and arms driven through the cable and carriage system, with the core holding you steady the entire time.",
  },
  {
    name: "LSN Foundations",
    duration: "50 minutes",
    level: "Beginner — first four classes",
    description:
      "The entry point. Slower pace, more instruction, and time spent on the machine itself — springs, positions, transitions and safety. Everything you need before you step into a full class.",
  },
  {
    name: "LSN Private",
    duration: "50 minutes",
    level: "All levels",
    description:
      "One machine, one coach, one focus. For anyone working around an injury, preparing for something specific, or who simply wants the method taught at their own pace.",
  },
];

export const FOUNDERS = [
  {
    name: "Arpan Kripalani",
    title: "Co-Founder and Master Trainer",
    initials: "AK",
    bio: [
      "Arpan is the reason LSN can call itself a Lagree studio. Certified in the method and among the first in the country qualified to teach it, he leads the studio floor, writes the class programming and trains every coach who steps onto it.",
      "His coaching style is precise rather than loud. He will find the two degrees your hip is off before he adds a single spring, and he will not let a repetition count if the tempo is wrong. What he builds in people is not fitness for its own sake — it is control.",
      "Arpan holds the standard at LSN. Every class you take here runs through him.",
    ],
  },
  {
    name: "Tarana Dodani",
    title: "Co-Founder and Investor",
    initials: "TD",
    bio: [
      "Tarana backed LSN before there was a floor to stand on. Her belief was simple: that India was ready for a training method built on precision rather than volume, and that being first would only matter if the execution was flawless.",
      "She brings the commercial architecture to the brand — the model, the numbers, and the discipline of building something that can be repeated in ten cities without losing what makes it work in one.",
    ],
  },
  {
    name: "Sasha Dcunha",
    title: "Co-Founder and Marketing",
    initials: "SD",
    bio: [
      "Sasha built the brand around the method. Founder of a Mumbai creative agency and a decade into building brands across fitness, wellness and sport, she shapes how LSN looks, sounds and is understood — from the room itself to every word on this page.",
      "Her conviction is that Lagree does not need to be sold loudly. It needs to be explained properly, once, to the right people. The rest takes care of itself on the machine.",
    ],
  },
  {
    name: "Malvika Raaj",
    title: "Brand Ambassador",
    initials: "MR",
    bio: [
      "Malvika is the face of LSN Lagree, and a member of the room before she was ever the face of it. An actor and a long-standing advocate for training that is consistent rather than extreme, she represents what the method offers people who want strength without the wear that usually comes with it.",
      "She takes class here. That is the part that matters.",
    ],
  },
];

export const PRINCIPLES = [
  {
    n: "01",
    title: "Effective time under tension",
    body: "The muscle stays loaded from the first rep to the last. No lockout, no pause, no release. Tension is held for extended periods, which is what forces adaptation.",
  },
  {
    n: "02",
    title: "Slow, controlled tempo",
    body: "Every repetition is performed slowly and deliberately. Momentum is removed entirely, so the muscle has nowhere to hide and no help to lean on.",
  },
  {
    n: "03",
    title: "Constant resistance",
    body: "The spring system loads the muscle through the full range of movement, in both directions. You work as hard on the way back as you did on the way out.",
  },
  {
    n: "04",
    title: "Instability and counterbalance",
    body: "The moving carriage forces your core and stabilisers to work continuously, even during a movement that appears to target the arms or legs.",
  },
  {
    n: "05",
    title: "Low impact, high intensity",
    body: "No jumping, no running, no loaded compression through the spine or knees. The intensity is extreme. The impact is close to zero.",
  },
  {
    n: "06",
    title: "Progression, not repetition",
    body: "Spring load, range and tempo can be adjusted to the individual, in the moment. A beginner and an athlete can train side by side in the same class, at the same time, and both be at their limit.",
  },
];

export const FAQS = [
  {
    q: "What is Lagree?",
    a: "Lagree is a strength training method performed on a patented machine with a moving carriage and spring-based resistance. Movements are slow and continuous, keeping the muscle under constant tension for the full fifty minutes. It is high intensity with almost no impact on the joints.",
  },
  {
    q: "I have never trained on a machine like this. Can I still join?",
    a: "Yes. Most people in the room started with no experience at all. We recommend beginning with LSN Foundations, where the pace is slower and the machine is taught properly before anything else.",
  },
  { q: "How long is a class?", a: "Fifty minutes. Arrive fifteen minutes early for your first class." },
  { q: "How many people are in a class?", a: "Five. We have five machines and we never take more." },
  {
    q: "What should I wear?",
    a: "Fitted activewear you can move in, and grip socks, which are compulsory on the machine. You can bring your own pair or buy them at the studio.",
  },
  {
    q: "Will I be sore?",
    a: "Very likely, especially after your first few classes, and often more on the second day than the first. It settles as your body adapts.",
  },
  {
    q: "How often should I take class?",
    a: "Two to three times a week is where most people see consistent change. The method rewards frequency more than duration.",
  },
  {
    q: "Is it safe for my joints?",
    a: "Lagree is low impact by design. There is no jumping, no running and no loaded compression through the spine. If you are managing an injury or a medical condition, speak to your doctor first and tell your coach before class begins.",
  },
  {
    q: "Can I take class if I am pregnant or postnatal?",
    a: "Please consult your doctor first. If you are cleared to train, tell us in advance and we will guide you to the right format, usually a private session to begin with.",
  },
  {
    q: "Do I need to be fit before I start?",
    a: "No. The spring load and range are adjusted to you, in the moment. A first-timer and an athlete can train in the same class and both reach their limit.",
  },
  {
    q: "How do I book?",
    a: "All bookings are made through our app. Download it, create your account, choose your class and pay directly in the app.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Classes can be cancelled or rescheduled up to [X] hours before the start time in the app. Late cancellations and no-shows are charged in full, as the spot cannot be given to anyone else.",
  },
  {
    q: "Do you offer private sessions?",
    a: "Yes. One to one sessions are available with our certified trainers and can be booked through the app or by contacting the studio.",
  },
  {
    q: "Do you offer corporate or group bookings?",
    a: "Yes. Get in touch through the contact form and we will build something around your group.",
  },
  {
    q: "Where are you located?",
    a: "Santacruz, Mumbai. Full address and directions are on the Contact page.",
  },
  {
    q: "Are you opening more studios?",
    a: "Yes. Franchise partnerships are open across India — see the Franchise page.",
  },
];

export const JOURNAL_POSTS = [
  {
    slug: "what-actually-happens-in-fifty-minutes",
    title: "What Actually Happens In Fifty Minutes On The Machine",
    category: "The Method",
    readTime: "6 min read",
    excerpt:
      "A minute-by-minute account of a full body class, from the first spring setting to the last count, and why the shaking starts when it does.",
  },
  {
    slug: "why-slow-is-harder",
    title: "Why Slow Is Harder Than Fast",
    category: "The Method",
    readTime: "5 min read",
    excerpt:
      "Momentum is the most generous training partner you will ever have. Take it away and the same movement becomes something else entirely.",
  },
  {
    slug: "low-impact-high-intensity",
    title: "Low Impact, High Intensity: Training Hard Without Wrecking Your Joints",
    category: "Training",
    readTime: "7 min read",
    excerpt:
      "Intensity and impact are not the same thing. Understanding the difference is the fastest way to train hard for another twenty years.",
  },
];
