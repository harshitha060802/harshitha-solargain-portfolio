import React from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Database,
  GraduationCap,
  Github,
  Linkedin,
  MapPin,
  Mail,
  FileText,
  PanelsTopLeft,
  ShieldCheck,
  SunMedium,
  Workflow,
  Zap,
} from "lucide-react";

const projects = [
  {
    title: "GreenGrid Energy Monitor",
    tags: ["Energy analytics", "Google Apps Script", "Dashboard automation"],
    description:
      "Real-time energy monitoring with KPI cards, dynamic alerts, performance charts, AI-style operational insights, search, PDF export, and auto-refreshing workflows.",
    solarGain:
      "Directly relevant to Solar Gain because it proves I can build solar-adjacent energy dashboards that turn operations data into fast decisions for project, sales, and leadership teams.",
    link: "https://script.google.com/macros/s/AKfycbyocILS1_2ER9TX_efNiSkN5FKlD-GF7j0zlEmOcOYcbPa6-RxKWP83GmTWHVZ_uKoj/exec",
    linkLabel: "Live dashboard",
    icon: Zap,
    impact: "Energy visibility",
  },
  {
    title: "ReNew Communities Reporting Tool",
    tags: ["AWS Lambda", "API Gateway", "Smartsheet"],
    description:
      "A serverless reporting tool with property dropdowns, task search, progress tracking, CSV/PDF export, and dashboard embedding for 50+ construction properties.",
    solarGain:
      "Solar Gain needs internal tools that help teams move quickly before deadlines. This project is the same pattern: field/project data in, clean self-service reporting out.",
    link: "https://8g7sq4sfne.execute-api.us-east-1.amazonaws.com/generate-report",
    linkLabel: "View tool",
    icon: Cloud,
    impact: "Field operations",
  },
  {
    title: "Banner Health Migration Dashboard",
    tags: ["Power BI", "Leadership visibility", "Readiness tracking"],
    description:
      "A leadership dashboard tracking 468 applications, 1.5PB provisioned storage, 29.72K GB memory, survey status, ownership, disposition strategy, and bottlenecks.",
    solarGain:
      "Solar projects also need readiness visibility: owners, blockers, status, handoffs, capacity, and risk. I can build the command center that makes that visible.",
    icon: BarChart3,
    impact: "Executive clarity",
  },
  {
    title: "Enterprise RAG Evaluation Platform",
    tags: ["RAG", "OpenAI", "Streamlit"],
    description:
      "Production-style RAG with PDF/Markdown ingestion, semantic + BM25 retrieval, reranking, cited answers, Streamlit UI, trace logging, and CI retrieval evaluation.",
    solarGain:
      "Solar Gain has technical docs, proposals, maintenance notes, policies, and customer/project records. This shows I can build AI tools that answer from trusted sources with citations.",
    link: "https://enterprise-rag-evaluation-platform.streamlit.app/",
    linkLabel: "Streamlit app",
    secondaryLink: "https://github.com/harshitha060802/enterprise-rag-evaluation-platform",
    secondaryLabel: "GitHub",
    icon: Bot,
    impact: "Knowledge retrieval",
  },
  {
    title: "FORESE Website",
    tags: ["Responsive web", "Public site", "Content structure"],
    description:
      "A public-facing club website project focused on clean navigation, responsive layouts, content hierarchy, and polished presentation for community audiences.",
    solarGain:
      "Solar Gain's customer experience depends on clarity. This supports the web/UI side of building tools that feel organized, trustworthy, and easy to use.",
    link: "https://forese.co.in/",
    linkLabel: "Visit site",
    icon: PanelsTopLeft,
    impact: "Clear UX",
  },
  {
    title: "Tableau Analytics Portfolio",
    tags: ["Tableau", "Risk analytics", "Business storytelling"],
    description:
      "Dashboards across business risk, HR analytics, portfolio exposure, performance tracking, and decision support using strong visual storytelling.",
    solarGain:
      "Solar Gain makes decisions from project, finance, sales, incentive, and operations data. My analytics work shows I can convert numbers into action.",
    link: "https://public.tableau.com/app/profile/harshitha.jayakumar/vizzes",
    linkLabel: "Tableau profile",
    icon: Database,
    impact: "Decision support",
  },
];

const fitCards = [
  {
    icon: Workflow,
    title: "Workflow-first engineering",
    copy: "I start by understanding how people actually work, then build tools around the real handoff, deadline, and reporting pain.",
  },
  {
    icon: Cloud,
    title: "Solo ownership ready",
    copy: "I have built and deployed serverless tools, dashboards, automations, and documentation without needing a large engineering team around me.",
  },
  {
    icon: SunMedium,
    title: "Energy-domain motivation",
    copy: "Green building design and renewable energy systems are already part of my academic path, and GreenGrid shows that interest in working software.",
  },
  {
    icon: ShieldCheck,
    title: "Self-service by design",
    copy: "My goal is to build tools the Solar Gain team can trust, understand, and use independently after handoff.",
  },
];

const skills = {
  "Build the tool": ["React", "JavaScript", "Node.js", "HTML", "CSS", "Python", "Git", "Docker"],
  "Automate the workflow": ["AWS Lambda", "API Gateway", "S3", "RDS", "Google Apps Script", "Smartsheet", "Bash", "JIRA"],
  "Make data useful": ["SQL", "Power BI", "Tableau", "Snowflake", "PostgreSQL", "Oracle", "SSIS", "ETL/ELT"],
};

const experience = [
  {
    company: "Banner Health",
    title: "Business Intelligence Developer",
    duration: "Jan 2025 - Aug 2025",
    bullets: [
      "Built a Power BI cloud migration readiness dashboard for 468 applications with KPI drilldowns, ownership filters, and leadership visibility.",
      "Developed Python and SQL analysis pipelines for healthcare planning, chronic disease prevalence analysis, and operational reporting.",
      "Automated ERP-CRM reconciliation with PostgreSQL CTEs and complex joins, saving an estimated $20K annually in manual effort.",
    ],
  },
  {
    company: "ReNew Communities",
    title: "Technical Solutions Engineer",
    duration: "May 2025 - Aug 2025",
    bullets: [
      "Deployed AWS Lambda and API Gateway tools that automated volunteer and project data workflows into Smartsheet.",
      "Built a web reporting tool with property selection, task search, CSV/PDF export, and dashboard embedding for 50+ properties.",
      "Migrated Selenium automation to Docker-based AWS Lambda execution and maintained production/dev deployment separation.",
    ],
  },
  {
    company: "AllReal",
    title: "Software Engineer",
    duration: "Mar 2022 - Apr 2024",
    bullets: [
      "Built a full-stack JavaScript and Node.js application used by institutional partners as the primary company interface.",
      "Created Python budgeting and forecasting tools for product launches using regression-based cost projection logic.",
      "Migrated 30K+ clinical records into Snowflake and built Tableau dashboards that helped secure $35K in partnerships.",
    ],
  },
];

const education = [
  {
    school: "University of Arizona",
    degree: "M.S. in Management Information Systems",
    meta: "Tucson, AZ / GPA 3.9 / Dec 2025",
  },
  {
    school: "Sri Venkateswara College of Engineering",
    degree: "B.E. in Computer Science and Engineering",
    meta: "India / GPA 3.6 / Jul 2024",
  },
];

const timeline = [
  ["Input", "Spreadsheets, APIs, forms, docs, project trackers, dashboards"],
  ["Logic", "Automation, validation, calculations, alerts, filters, exports"],
  ["Output", "A tool Solar Gain teams can use daily without chasing manual updates"],
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#13231f] pt-[62px] text-[#162019] selection:bg-[#f2b33d] selection:text-[#13231f]">
      <AnimatedBackdrop />
      <Header />
      <main>
        <Hero />
        <RobertNote />
        <DayNightSection />
        <WhyFit />
        <Systems />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,#f4ba4c_0%,rgba(244,186,76,0.38)_16%,transparent_34%),linear-gradient(135deg,#071a17_0%,#123a32_37%,#a9651f_100%)]" />
      <div className="solar-grid absolute inset-0 opacity-40" />
      <div className="solar-rays absolute right-[-10rem] top-[-12rem] h-[42rem] w-[42rem] rounded-full opacity-40" />
      <div className="energy-orbit absolute right-[8%] top-20 h-72 w-72 rounded-full border border-[#fff4d6]/20" />
      <div className="float-orbit absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[#ffd166]/35 blur-3xl" />
      <div className="float-orbit-slow absolute bottom-10 left-[-4rem] h-80 w-80 rounded-full bg-[#7fd8be]/25 blur-3xl" />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = [
    ["About Me", "#home"],
    ["Why Me", "#why-me"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#work"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f6e7bf]/25 bg-[#10201d]/92 text-[#fff4d6] shadow-[0_12px_40px_rgba(7,26,23,0.28)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[62px] max-w-7xl items-center justify-between gap-3 px-4 py-2.5 md:px-8">
        <a className="grid h-9 w-9 place-items-center rounded-full bg-[#f2b33d] text-sm font-black text-[#13231f] shadow-[0_0_30px_rgba(242,179,61,0.45)]" href="#home" aria-label="Harshitha Jayakumar home">
          HJ
        </a>
        <nav className="hidden items-center gap-4 text-xs font-bold text-[#fff4d6]/75 lg:flex xl:text-sm" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} className="transition hover:text-[#f2b33d]" href={href}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="hidden rounded-full border border-[#fff4d6]/25 bg-[#fff4d6] px-3.5 py-2 text-xs font-extrabold text-[#13231f] transition hover:-translate-y-0.5 hover:bg-[#f2b33d] sm:inline-flex xl:text-sm" href="mailto:harshithajaya18@gmail.com">
            Email
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-[#fff4d6]/25 bg-[#fff4d6]/10 text-lg text-[#fff4d6] transition hover:bg-[#f2b33d] hover:text-[#13231f] lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? "☀" : "☼"}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="mx-4 mb-4 grid gap-2 rounded-md border border-[#fff4d6]/20 bg-[#13231f]/95 p-3 text-sm font-bold text-[#fff4d6]/85 shadow-2xl md:mx-8 lg:hidden" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a key={href} className="rounded-md px-3 py-3 transition hover:bg-[#f2b33d] hover:text-[#13231f]" href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a className="rounded-md bg-[#fff4d6] px-3 py-3 text-[#13231f]" href="mailto:harshithajaya18@gmail.com" onClick={() => setIsOpen(false)}>
            Email
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[calc(100svh-62px)] max-w-7xl items-center px-4 py-4 md:px-8 lg:py-5">
      <div className="panel-card solar-frame motion-card grid w-full overflow-hidden xl:grid-cols-[270px_minmax(0,1fr)_270px] 2xl:grid-cols-[300px_minmax(0,1fr)_285px]">
        <div className="relative min-h-[280px] bg-[#13231f] md:min-h-[340px] xl:h-[min(500px,calc(100svh-110px))] xl:min-h-0">
            <img
              src="/harshitha-profile.jpeg"
              alt="Harshitha Jayakumar"
              className="h-full min-h-[280px] w-full object-cover object-[center_38%] md:min-h-[340px] xl:min-h-0"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#13231f]/92 to-transparent p-3.5 text-[#fff4d6]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f2b33d]">Tucson, AZ</p>
              <h1 className="mt-1.5 text-2xl font-black leading-tight">Harshitha Jayakumar</h1>
              <p className="mt-1 font-semibold text-[#fff4d6]/85">Software Engineer</p>
            </div>
        </div>
        <div className="relative grid content-center gap-3 overflow-hidden p-4 md:p-5">
          <div className="circuit-lines absolute inset-0 opacity-50" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6c59d] bg-[#fff8e3] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#5f4a1b]">
              <span className="h-2 w-2 rounded-full bg-[#f2b33d] shadow-[0_0_14px_rgba(242,179,61,0.9)]" />
              Solar Gain ready
            </span>
          </div>
          <div className="relative">
            <p className="eyebrow-dark">About Me</p>
            <h2 className="text-[clamp(1.75rem,3vw,3rem)] font-black leading-none text-[#13231f]">Professional Summary</h2>
            <p className="mt-3 max-w-4xl text-[0.94rem] leading-6 text-[#47564f] 2xl:text-base 2xl:leading-7">
              Software engineer with experience building internal tools, dashboards, cloud automations, and data pipelines for healthcare, construction, MedTech, and energy analytics teams. I specialize in turning messy operations data into self-service systems that non-technical users can trust. For Solar Gain, I bring full-stack ownership, workflow thinking, and a genuine interest in renewable energy.
            </p>
          </div>
          <div className="relative grid gap-2.5 md:grid-cols-2 xl:grid-cols-4">
            <InfoTile icon={MapPin} title="Location" copy="Tucson, Arizona" />
            <InfoTile icon={BriefcaseBusiness} title="Role Focus" copy="Internal tools, automation, and operations visibility" />
            {education.map((item) => (
              <InfoTile key={item.degree} icon={GraduationCap} title={item.degree} copy={item.school} />
            ))}
          </div>
        </div>
        <div className="border-t border-[#d6c59d] bg-[#fff8e3]/70 p-3 xl:border-l xl:border-t-0">
          <SolarCommandCard />
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about" className="section-cream">
      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="panel-card motion-card overflow-hidden">
          <div className="relative h-full min-h-[520px]">
            <img
              src="/harshitha-profile.jpeg"
              alt="Harshitha Jayakumar"
              className="h-full min-h-[520px] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#13231f]/92 to-transparent p-6 text-[#fff4d6]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f2b33d]">Tucson, AZ</p>
              <h2 className="mt-2 text-3xl font-black">Harshitha Jayakumar</h2>
              <p className="mt-1 font-semibold text-[#fff4d6]/80">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="panel-card motion-card p-6">
            <p className="eyebrow-dark">About Me</p>
            <h2 className="section-title text-[#13231f]">Professional Summary</h2>
            <p className="mt-5 text-lg leading-8 text-[#47564f]">
              Software engineer with experience building internal tools, dashboards, cloud automations, and data pipelines for healthcare, construction, MedTech, and energy analytics teams. I specialize in turning messy operations data into self-service systems that non-technical users can trust. For Solar Gain, I bring full-stack ownership, workflow thinking, and a genuine interest in renewable energy.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <InfoTile icon={MapPin} title="Location" copy="Tucson, Arizona" />
            <InfoTile icon={BriefcaseBusiness} title="Role Focus" copy="Software engineering for internal tools, automation, and operations visibility" />
            {education.map((item) => (
              <InfoTile key={item.degree} icon={GraduationCap} title={item.degree} copy={item.school} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon: Icon, title, copy }) {
  return (
    <article className="rounded-md border border-[#d6c59d] bg-[#fff8e3]/90 p-2.5">
      <Icon className="h-4 w-4 text-[#d98221]" />
      <h3 className="mt-2 text-[0.82rem] font-black leading-5 text-[#13231f]">{title}</h3>
      <p className="mt-1 text-[0.75rem] leading-5 text-[#47564f]">{copy}</p>
    </article>
  );
}

function SolarCommandCard() {
  return (
    <aside className="solar-frame relative h-full overflow-hidden rounded-md border border-[#d6c59d] bg-[#fffaf0] p-3" aria-label="Solar Gain operating system preview">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f2b33d] via-[#7fd8be] to-[#f2b33d]" />
      <div className="circuit-lines absolute inset-0 opacity-35" />
      <div className="relative mb-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#2d6558]">Solar Gain readiness</p>
          <h2 className="mt-1 text-lg font-black leading-tight text-[#13231f]">Solar Ops Platform View</h2>
        </div>
        <span className="rounded-full bg-[#f2b33d]/25 px-2.5 py-1 text-[0.68rem] font-black text-[#5c3d00]">Future build</span>
      </div>
      <div className="solar-scene relative h-28 overflow-hidden rounded-md border border-[#d6c59d] bg-[#fff8e3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_24%,rgba(242,179,61,0.32),transparent_18rem)]" />
        <SunMedium className="sun-spin absolute right-5 top-4 h-9 w-9 text-[#d98221]" strokeWidth={1.7} />
        <div className="panel-row absolute bottom-6 left-[8%] right-[8%] grid grid-cols-5 gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} className="h-6 -skew-x-12 border border-[#123d5a]/35 bg-[#3fa7d6]/25" />
          ))}
        </div>
        <div className="data-line absolute left-5 right-5 top-16 h-1 rounded-full bg-[#2d6558]/20">
          <span className="scan-dot absolute -top-1 h-2.5 w-2.5 rounded-full bg-[#f2b33d]" />
        </div>
      </div>
      <div className="relative mt-2.5 grid grid-cols-2 gap-2">
        <Metric value="95%" label="manual work cut" />
        <Metric value="16+" label="dashboards & tools built" />
        <Metric value="50+" label="sites tracked live" />
        <Metric value="$55K+" label="savings & revenue impact" />
      </div>
    </aside>
  );
}

function Metric({ value, label }) {
  return (
    <article className="rounded-md border border-[#d6c59d] bg-[#fff8e3] p-2.5 text-[#13231f]">
      <strong className="block text-xl font-black leading-none">{value}</strong>
      <span className="mt-1 block text-[0.68rem] font-semibold leading-4 text-[#47564f]">{label}</span>
    </article>
  );
}

function SolarFitBar() {
  return (
    <div id="fit" className="relative mb-10 overflow-hidden rounded-md border border-[#d6c59d] bg-[#fff8e3] px-5 py-8 shadow-[0_20px_60px_rgba(11,31,27,0.12)] md:px-7">
      <div className="sun-sweep absolute inset-y-0 left-[-20%] w-1/3 bg-gradient-to-r from-transparent via-[#f2b33d]/25 to-transparent" />
      <div className="relative grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <h2 className="text-[clamp(2rem,4vw,4.2rem)] font-black leading-none text-[#13231f]">
          Every project below is translated into Solar Gain value.
        </h2>
        <p className="text-lg leading-8 text-[#47564f]">
          The domain does not have to be solar for the engineering pattern to matter. My work keeps repeating the same useful shape: collect messy operational data, automate the painful step, show progress clearly, and document it so the team can run without dependency.
        </p>
      </div>
    </div>
  );
}

function RobertNote() {
  return (
    <section id="why-me" className="scroll-mt-24 bg-[#13231f] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <article className="panel-card solar-frame motion-card relative overflow-hidden p-6 md:p-7">
          <div className="card-sheen absolute inset-0 opacity-0 transition duration-500" />
          <div className="relative grid gap-5 lg:grid-cols-[220px_0.72fr_1.28fr] lg:items-center">
            <figure className="overflow-hidden rounded-md border border-[#d6c59d] bg-[#13231f]">
              <img
                src="/robert-solar-gain-team.jpg"
                alt="Robert from Solar Gain"
                className="h-64 w-full object-cover grayscale transition duration-500 hover:grayscale-0 lg:h-72"
              />
              <figcaption className="bg-[#13231f] px-4 py-3 text-xs font-bold leading-5 text-[#fff4d6]/80">
                Software? Optional. Solar impact? Very much not optional.
              </figcaption>
            </figure>
            <div>
              <p className="eyebrow-dark">The useful part</p>
              <h2 className="text-[clamp(1.8rem,3.4vw,3.2rem)] font-black leading-none text-[#13231f]">
                If Robert does not want to live in spreadsheets, I can make sure he does not have to.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-[#47564f] md:text-lg">
              <p>
                The interview made the opportunity very clear: broken tools, scattered spreadsheets, dashboards that need trust, and existing systems that need someone to understand, stabilize, and improve them.
              </p>
              <p>
                That is exactly where I fit best. I can sit between the business workflow and the technical mess, translate what the team actually needs, and build tools that let Solar Gain focus on solar work instead of software frustration.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function DayNightSection() {
  return (
    <section className="px-4 py-10 md:px-8">
      <div className="day-night-scene mx-auto max-w-7xl overflow-hidden rounded-md border border-[#d6c59d] p-6 shadow-[0_30px_90px_rgba(11,31,27,0.22)] md:p-8">
        <div className="stars" />
        <div className="sun-body" />
        <div className="moon-body" />
        <div className="horizon-grid" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f2b33d]">Day to night reliability</p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-black leading-none text-[#fff4d6]">
            Solar operations do not stop when the dashboard gets annoying.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#fff4d6]/80">
            This is the reliability I want to build: tools that stay clear from morning install planning to evening follow-up, so teams are not stuck decoding spreadsheets at the worst possible moment.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyFit() {
  return (
    <section className="section-dark">
      <SectionHeading light eyebrow="Why Solar Gain Should Care" title="The role needs builder energy, not just coding ability." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {fitCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className={`solar-info-card solar-info-card-${index + 1} motion-card p-5`}>
              <Icon className="relative h-8 w-8 text-[#d98221]" />
              <h3 className="mt-8 text-xl font-black text-[#13231f]">{card.title}</h3>
              <p className="mt-3 leading-7 text-[#47564f]">{card.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section-cream solar-section">
      <SolarFitBar />
      <SectionHeading eyebrow="Proof, Reframed For Solar Gain" title="Not random projects. Transferable operating systems." />
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <article className="panel-card solar-frame motion-card group relative overflow-hidden p-5" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="absolute right-[-5rem] top-[-5rem] h-40 w-40 rounded-full bg-[#f2b33d]/20 blur-2xl transition duration-500 group-hover:scale-125" />
      <div className="card-sheen absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-[#d6c59d] bg-[#fff8e3] px-3 py-1 text-xs font-extrabold text-[#5f4a1b]">
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#2d6558]">{project.impact}</p>
          <h3 className="mt-2 text-3xl font-black leading-tight text-[#13231f]">{project.title}</h3>
        </div>
        <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[#13231f] text-[#f2b33d] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="relative mt-5 leading-7 text-[#47564f]">{project.description}</p>
      <div className="relative mt-5 rounded-md border border-[#d6c59d] bg-[#fff8e3] p-4">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#2d6558]">Solar Gain translation</p>
        <p className="mt-2 leading-7 text-[#26362f]">{project.solarGain}</p>
      </div>
      <div className="relative mt-5 flex flex-wrap gap-4 text-sm font-black text-[#13231f]">
        {project.link && <ExternalLink href={project.link}>{project.linkLabel}</ExternalLink>}
        {project.secondaryLink && <ExternalLink href={project.secondaryLink}>{project.secondaryLabel}</ExternalLink>}
      </div>
    </article>
  );
}

function Systems() {
  return (
    <section id="systems" className="section-dark">
      <SectionHeading light eyebrow="The Build Pattern" title="How I would turn Solar Gain workflow into software." />
      <div className="grid gap-4 lg:grid-cols-3">
        {timeline.map(([label, copy], index) => (
          <article key={label} className="panel-card solar-frame motion-card relative min-h-64 overflow-hidden p-5">
            <span className="text-[4.5rem] font-black leading-none text-[#f2b33d]/25">0{index + 1}</span>
            <h3 className="mt-3 text-2xl font-black text-[#13231f]">{label}</h3>
            <p className="mt-4 leading-7 text-[#47564f]">{copy}</p>
            <div className="progress-line absolute bottom-0 left-0 h-1 bg-[#f2b33d]" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-cream solar-section">
      <SectionHeading eyebrow="Technical Toolkit" title="Grouped by what Solar Gain would need me to do." />
      <div className="grid gap-4 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <article key={group} className="panel-card motion-card p-5">
            <h3 className="text-2xl font-black text-[#13231f]">{group}</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="rounded-full border border-[#d6c59d] bg-[#fff8e3] px-3 py-1 text-xs font-extrabold text-[#5f4a1b]">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-dark">
      <SectionHeading light eyebrow="Experience" title="Operational software work across healthcare, construction, and MedTech." />
      <div className="grid gap-4">
        {experience.map((role) => (
          <article key={`${role.company}-${role.title}`} className="panel-card motion-card grid gap-5 p-5 lg:grid-cols-[0.38fr_1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#2d6558]">{role.duration}</p>
              <h3 className="mt-3 text-2xl font-black text-[#13231f]">{role.company}</h3>
              <p className="mt-1 font-bold text-[#47564f]">{role.title}</p>
            </div>
            <ul className="grid gap-3 text-[#47564f]">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#f2b33d]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section-dark">
      <SectionHeading light eyebrow="Education" title="Computer science foundation with business intelligence depth." />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.degree} className="panel-card motion-card p-6">
            <GraduationCap className="h-8 w-8 text-[#d98221]" />
            <h3 className="mt-8 text-2xl font-black text-[#13231f]">{item.degree}</h3>
            <p className="mt-2 text-lg font-bold text-[#47564f]">{item.school}</p>
            <p className="mt-4 leading-7 text-[#47564f]">{item.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-y border-[#f6e7bf]/25 bg-[#fff4d6] px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow-dark">Contact</p>
          <h2 className="section-title text-[#13231f]">Ready to build tools your team can rely on.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#47564f]">
            Tucson, Arizona / Software Engineer / Internal tools, workflow automation, analytics dashboards, and AI-enabled reporting.
          </p>
      </div>
      <div className="flex flex-wrap gap-3 lg:justify-end">
        <a className="button-dark" href="/Harshitha_Jayakumar_Resume.pdf" target="_blank" rel="noreferrer"><FileText className="h-4 w-4" /> Resume</a>
        <a className="button-dark" href="mailto:harshithajaya18@gmail.com"><Mail className="h-4 w-4" /> Email me</a>
        <a className="button-outline" href="https://github.com/harshitha060802" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
          <a className="button-outline" href="https://www.linkedin.com/in/harshithajayakumar/" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[#fff4d6]/70 md:px-8 lg:flex-row lg:justify-between">
      <p>&copy; {new Date().getFullYear()} Harshitha Jayakumar. Built as a Solar Gain-focused software engineering portfolio.</p>
      <a className="font-bold transition hover:text-[#f2b33d]" href="#home">Back to top</a>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="mb-10 max-w-5xl">
      <p className={light ? "eyebrow-light" : "eyebrow-dark"}>{eyebrow}</p>
      <h2 className={light ? "section-title-light" : "section-title text-[#13231f]"}>{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="inline-flex items-center gap-1 transition hover:text-[#d98221]" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default App;
