import { Element } from "react-scroll";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "agroadries-md",
    title: "AgroAdries.md",
    year: 2024,
    summary:
      "Modern portal for AGROADRIES SRL: informative content, dynamic menus, strong SEO and accessibility, fully responsive.",
    image: "agroweb.png",
    stack: ["HTML", "CSS", "JavaScript", "SEO", "Responsive"],
    links: { repo: "", demo: "https://agroadries.md/" },
    highlights: [
      "Clean architecture, fast load times",
      "Schema.org + Open Graph metadata",
      "Accessible UI (ARIA attributes)",
    ],
  },
  {
    id: "remont-md",
    title: "Remont.md",
    year: 2024,
    summary:
      "Renovation services platform: high performance, workflow automations, and smooth UX for both users and admins.",
    image: "6862bb5001edce4bc55c5b00.png",
    stack: ["Python", "SQL", "MariaDB", "JavaScript", "CodeIgniter 3", "PHP"],
    links: { repo: "", demo: "https://remont.md/" },
    highlights: [
      "DB optimizations + query caching",
      "Automated forms and order management",
      "Streamlined content administration",
    ],
  },
  {
    id: "bus-stations-report",
    title: "Bus Stations Report (Excel Export)",
    year: 2024,
    summary:
      "Python script/service exporting daily station reports to Excel with correct layout and totals.",
    image: "/1.png",
    stack: ["Python", "Pandas", "XLSX", "Automations"],
    links: { repo: "https://github.com/Artiom010/Export-data-from-db/tree/main", demo: "" },
    highlights: [
      "XLSX formatting as requested",
      "Daily and period aggregations",
      "Scheduled automatic runs",
    ],
  },

  {
    id: "doricons-md",
    title: "Doricons.md",
    year: 2025,
    summary:
      "Web app for fencing solutions: Laravel backend, Tailwind UI, product management, and live validation.",
    image: "screen dori.jpg",
    stack: ["Laravel", "Tailwind CSS", "JavaScript", "Python", "PostgreSQL", "React"],
    links: { repo: "", demo: "https://doricons.ct.ws/" },
    highlights: [
      "Dynamic forms with real-time validation",
      "Products & media CRUD",
      "Integrations with external services",
    ],
  },
  {
    id: "neweurofences",
    title: "NewEuroFences.com",
    year: 2025,
    summary:
      "Full redesign + custom CMS. Monorepo with TurboRepo, React, PostgreSQL, multilingual support and SEO.",
    image: "yPbwiFXPEfCP4wJCrBEABQ.png",
    stack: ["React.js", "TurboRepo", "PostgreSQL", "SEO", "HTML", "CSS", "JavaScript", "UX"],
    links: { repo: "", demo: "https://us.gmdfences.com/" },
    highlights: [
      "Custom dashboard and content versioning",
      "i18n and media management",
      "Improved performance and SEO",
    ],
  },
  {
    id: "agrosmart-mobile",
    title: "AgroSmart (Mobile)",
    year: 2025,
    summary:
      "Cross-platform mobile app for agriculture (Flutter frontend). Real-time analytics, automations, and remote control.",
    image: "agrosmart.png",
    stack: ["Flutter", "Dart", "Mobile", "IoT"],
    links: { repo: "https://github.com/Artiom010/AgroSmart", demo: "" },
    highlights: ["Responsive UI + state management", "Charts and notifications", "Ready for IoT sensors"],
  },
  {
    id: "erp-apex",
    title: "ERP (Oracle APEX)",
    year: 2025,
    summary:
      "ERP in APEX: Gantt modules, XML PPF import/export, autosave, correct UTC display, and drag & drop editing.",
    image: "/2.png",
    stack: ["Oracle APEX", "PL/SQL", "Oracle DB", "XML", "Gantt"],
    links: { repo: "https://github.com/Artiom010/Erp-Apex", demo: "" },
    highlights: [
      "Duration calculated from start/end",
      "5-minute autosave (XML)",
      "Import/Export with versioned backups",
    ],
  },
  {
    id: "fx-una",
    title: "Exchange Rates Collector (UNA)",
    year: 2025,
    summary:
      "Python service that collects PRB rates and performs conversions for the UNA app; endpoint + DB insert.",
    image: "/3.png",
    stack: ["Python", "Requests", "FastAPI", "Oracle", "Scheduler"],
    links: { repo: "https://github.com/Artiom010/Exchange-with-BNM", demo: "" },
    highlights: ["Automatic currency conversion", "Direct DB inserts", "Daily scheduled job"],
  },
  {
    id: "docx-import-una",
    title: "DOC/DOCX Import → UNA",
    year: 2025,
    summary:
      "Python tool that imports Word (DOC/DOCX), parses it, and converts it automatically to the format required by UNA.",
    image: "/4.png",
    stack: ["Python", "python-docx", "Pandas", "XLSX", "Oracle"],
    links: { repo: "https://github.com/Unisim-Soft-Com/ImportXMLintoUna", demo: "" },
    highlights: ["Field mapping + validations", "Intermediate XLS generation", "User/dev video guides"],
  },
  {
    id: "tg-ticket-bot",
    title: "Telegram Ticket Bot (Bus)",
    year: 2025,
    summary:
      "Telegram bot for searching, reserving, and paying for tickets. MAIB and QIWI (QR) integrations + fuzzy station matching.",
    image: "/5.png",
    stack: ["Python", "Aiogram", "PostgreSQL", "Payments", "QR", "Fuzzy"],
    links: { repo: "", demo: "" },
    highlights: ["Progress bar for searches", "Payments retry + webhooks", "Text + button destination validation"],
    },
   {
  id: "copy-bitrix",
  title: "Bitrix to CRM UNA25",
  year: 2025,
  summary:
    "A complete migration from Bitrix to UNA CRM 25 built on Oracle APEX, redesigned with extended features, improved performance, and a more intuitive user experience tailored for complex business processes.",
  image: "/9.png",
  stack: ["Payments", "REST API", "Webhooks", "Security", "QR"],
  links: { repo: "", demo: "" },
  highlights: [
    "Idempotent sums formatting",
    "Signature verification",
    "Clear confirmation UX"
  ],
},
  {
    id: "otrs-bot",
    title: "OTRS Bot – Live Ticket Creation",
    year: 2025,
    summary:
      "Bot for OTRS that creates tickets live in the app; Oracle triggers + Telegram integration.",
    image: "/6.png",
    stack: ["Python", "Oracle", "Triggers", "Telegram Bot", "OTRS"],
    links: { repo: "https://github.com/Artiom010/BotTG", demo: "" },
    highlights: ["Ticket creation + attachments", "Automatic notifications/reports", "Sync with OTRS Oracle DB"],
  },
  {
    id: "ocr-oracle",
    title: "Invoice OCR → Oracle Importer",
    year: 2025,
    summary:
      "Python app extracting invoice data (Tesseract + regex) and inserting into Oracle via cx_Oracle.",
    image: "/7.png",
    stack: ["Python", "Tesseract", "Regex", "Oracle", "Tkinter"],
    links: { repo: "", demo: "" },
    highlights: ["Configurable field mapping", "CSV/XLSX export + error log", "Batch processing + progress bar"],
  },
  {
    id: "pmr-rates",
    title: "PMR FX Scraper + Dashboard",
    year: 2025,
    summary:
      "Python service scraping PRB exchange rates and exposing them in a FastAPI dashboard.",
    image: "/8.png",
    stack: ["Python", "FastAPI", "SQLite", "Cron", "Tailwind"],
    links: { repo: "https://github.com/Artiom010/Exchange-with-BNM", demo: "" },
    highlights: ["JSON endpoint for UNA", "30-day historical chart", "Telegram alerts on threshold"],
  },
  {
    id: "gantt-xml",
    title: "Gantt XML Exporter + Autosave",
    year: 2025,
    summary:
      "XML PPF generator from Oracle tables with autosave/restore and Gantt-style visualization.",
    image: "/9.png",
    stack: ["Python", "Oracle", "XML", "APEX", "Scheduler"],
    links: { repo: "", demo: "" },
    highlights: ["Duration from start/end", "Drag & drop + UTC-safe", "Import/Export and backups"],
  },
];
function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function ProjectsShowcase() {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [year, setYear] = useState<number | "all">("all");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const years = useMemo(() => {
    const set = new Set<number>();
    projects.forEach((p) => set.add(p.year));
    return ["all" as const, ...Array.from(set).sort((a, b) => b - a)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));

      const matchTags =
        selectedTags.length === 0 ||
        selectedTags.every((t) => p.stack.includes(t));

      const matchYear = year === "all" || p.year === year;

      return matchQ && matchTags && matchYear;
    });
  }, [query, selectedTags, year]);

  const active = useMemo(
    () => projects.find((p) => p.id === activeId) || null,
    [activeId]
  );

  const toggleTag = (t: string) => {
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  return (
    <Element name="projects" className="py-20 flex flex-col items-center">
      <button className="bg-[#232b3e] text-sm px-3 py-1 rounded-full mb-2 text-gray-300">
        All Projects
      </button>
      <h3 className="mb-6 text-white text-lg">Interactive project selection:</h3>

      {/* Controls */}
      <div className="w-full max-w-6xl mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, tech, description…"
          className="bg-[#1b2233] text-gray-200 rounded-xl px-4 py-3 outline-none ring-1 ring-[#2a3550] focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          {years.map((y) => (
            <button
              key={String(y)}
              onClick={() => setYear(y)}
              className={classNames(
                "px-3 py-2 rounded-full text-sm whitespace-nowrap ring-1 ring-[#2a3550]",
                y === year
                  ? "bg-blue-600 text-white"
                  : "bg-[#232b3e] text-gray-300 hover:bg-[#2a3550]"
              )}
            >
              {y === "all" ? "All years" : y}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => toggleTag(t)}
              className={classNames(
                "px-3 py-2 rounded-full text-xs ring-1 ring-[#2a3550]",
                selectedTags.includes(t)
                  ? "bg-emerald-600 text-white"
                  : "bg-[#232b3e] text-gray-300 hover:bg-[#2a3550]"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        <AnimatePresence>
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#232b3e] rounded-2xl p-5 shadow-sm ring-1 ring-[#2a3550] hover:ring-blue-600/40 hover:shadow-md cursor-pointer"
              onClick={() => setActiveId(p.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={p.image}
                  alt="preview"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold leading-tight">
                    {p.title}
                  </h4>
                  <div className="text-xs text-gray-400">{p.year}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {p.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-1 rounded-full bg-[#1b2233] text-gray-300 ring-1 ring-[#2a3550]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <div className="absolute inset-0 bg-black/60" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl bg-[#0f1628] rounded-2xl ring-1 ring-[#2a3550] p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={active.image}
                  alt="preview"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-white text-lg font-semibold">
                    {active.title}
                  </h4>
                  <div className="text-xs text-gray-400">{active.year}</div>
                </div>
                <button
                  aria-label="Close"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setActiveId(null)}
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-4">{active.summary}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2 py-1 rounded-full bg-[#1b2233] text-gray-300 ring-1 ring-[#2a3550]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside text-gray-200 space-y-1 mb-6">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="flex gap-3">
                {active.links.demo && active.links.demo !== "" && (
                  <a
                    href={active.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-500"
                  >
                    Live demo
                  </a>
                )}
                {active.links.repo && active.links.repo !== "" && (
                  <a
                    href={active.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#232b3e] ring-1 ring-[#2a3550] text-gray-200 text-sm hover:bg-[#2a3550]"
                  >
                    Repository
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Element>
  );
}
