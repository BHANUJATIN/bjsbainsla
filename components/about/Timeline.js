"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Zap } from "lucide-react";

const typeIcons = {
  education: GraduationCap,
  work:      Briefcase,
  freelance: Zap,
};

const entries = [
  {
    id: "btech",
    type: "education",
    period: "2020 - 2024",
    typeLabel: "Education",
    accent: "#60A5FA",
    title: "Bachelor of Technology in Computer Science and Engineering",
    org: "Indian Institute of Information Technology and Management, Gwalior",
    paragraphs: [
      "Graduated with a B.Tech in Computer Science with a strong foundation in core computer science concepts and software engineering principles.",
      "Relevant coursework included Data Structures and Algorithms (C++), Computer Networks, Object-Oriented Programming, Database Management Systems, and Operating Systems.",
      "Developed several technical projects, including real-time machine learning systems and full-stack web applications - building the engineering mindset that later became essential for automation systems and scalable GTM infrastructure.",
    ],
    tags: ["C++", "Data Structures", "Computer Networks", "DBMS", "Operating Systems"],
  },
  {
    id: "wcfy",
    type: "work",
    period: "Mar 2023 - Jun 2023",
    typeLabel: "Internship",
    accent: "#6EE7B7",
    title: "Frontend Developer Intern",
    org: "We Code For You · Remote",
    paragraphs: [
      "Built reusable frontend components and improved the user experience of multiple web applications.",
      "Integrated the Instamojo payment API into an Express.js backend to enable payment processing functionality across several platforms.",
      "Designed and developed the admin panel for a sports tournament management platform, focusing on usability, performance, and clean interface structure.",
    ],
    tags: ["React", "Redux", "Node.js", "Firebase"],
  },
  {
    id: "kryptonics",
    type: "work",
    period: "Dec 2023 - Feb 2024",
    typeLabel: "Internship",
    accent: "#6EE7B7",
    title: "Frontend Developer Intern",
    org: "Kryptonics · Remote",
    paragraphs: [
      "Built reusable UI components based on product requirements, developed a landing page, and implemented a dashboard interface used by internal users.",
      "Deepened understanding of modern frontend architecture and component-based design systems.",
    ],
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "claygency",
    type: "work",
    period: "Aug 2024 - Present",
    typeLabel: "Full-time",
    accent: "#FBBF24",
    title: "Senior Developer · Automation Engineer",
    org: "The Claygency · Remote",
    paragraphs: [
      "Transitioned from traditional software development into the GTM automation ecosystem - building systems that power outbound campaigns and lead generation pipelines for clients in recruitment, healthcare, SaaS, and technology.",
      "Engineered 30+ Clay tables and designed 12+ complete client workflows covering list building, enrichment pipelines, research automation, and personalized outbound preparation.",
      "Built reusable automation architectures that standardized data schemas and workflow components, enabling teams to deploy outbound pipelines faster across different clients.",
      "Built a custom API integration inside Clay workflows that enabled automated synchronization of data across multiple tools. Maintained parts of the company's Node.js SaaS backend for reliable integrations.",
      "Designed advanced AI prompting strategies within Clay automations to improve data enrichment, research tasks, and personalization for outbound campaigns.",
    ],
    tags: ["Clay", "Make.com", "n8n", "Airtable", "Smartlead", "HeyReach", "Instantly", "Node.js"],
  },
  {
    id: "freelance",
    type: "freelance",
    period: "2025 - Present",
    typeLabel: "Freelance",
    accent: "#A78BFA",
    title: "GTM Automation & Systems Development",
    org: "Independent · Remote",
    paragraphs: [
      "Working with clients across recruitment, fintech, medical, non-profit, manufacturing, law & legal, and e-commerce sectors to design and implement outbound automation systems, lead generation pipelines, and data workflows.",
      "Built custom automation pipelines that analyze historical outreach data and help design more effective outbound strategies, using scrapers, APIs, and AI-assisted analysis to detect patterns in campaign performance.",
      "Developed systems that detect company engagement signals on LinkedIn, helping teams identify potential prospects showing signs of activity or hiring needs.",
      "Built a daily lead distribution system that automatically assigns qualified prospects to team members - ensuring sales teams consistently receive new leads without manual research.",
      "For recruitment firms, built end-to-end automated pipelines that collect job postings from LinkedIn, Indeed, Xing, and company career pages - classifying roles with AI, identifying hiring companies, and surfacing relevant decision-makers.",
      "Developed custom engineering solutions including Node.js applications, data processing scripts, and API integrations that extend the capabilities of automation platforms.",
    ],
    tags: ["Clay", "Make.com", "n8n", "Airtable", "Node.js", "Python", "Apify", "RapidAPI", "Smartlead", "Instantly", "LinkedIn Sales Navigator"],
  },
];

export default function Timeline() {
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)",
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
            Journey
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.04em" }}>
            Education &amp; Experience
          </h2>
        </motion.div>

        <div>
          {entries.map((entry, i) => {
            const Icon = typeIcons[entry.type];
            const isLast = i === entries.length - 1;
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.04 }}
                style={{ display: "flex", gap: 24, alignItems: "flex-start",
                  marginBottom: isLast ? 0 : 16 }}
              >
                {/* Left: dot + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                  flexShrink: 0, paddingTop: 24 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%",
                    background: entry.accent, flexShrink: 0, zIndex: 1 }} />
                  {!isLast && (
                    <div style={{ width: 1, flex: 1, minHeight: 28, background: "var(--border)",
                      marginTop: 8, marginBottom: -8 }} />
                  )}
                </div>

                {/* Right: card */}
                <motion.div
                  whileHover={{ borderColor: `rgba(255,255,255,0.1)` }}
                  style={{ flex: 1, padding: "24px 28px", borderRadius: 12,
                    border: "1px solid var(--border)", background: "var(--bg-card)",
                    transition: "border-color 0.2s", marginBottom: isLast ? 0 : 4 }}
                >
                  {/* Label + period row */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
                    gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: entry.accent,
                      textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {entry.typeLabel}
                    </span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%",
                      background: "var(--border)", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--text-muted)",
                      letterSpacing: "-0.01em" }}>
                      {entry.period}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)",
                    letterSpacing: "-0.025em", lineHeight: 1.35, marginBottom: 6 }}>
                    {entry.title}
                  </h3>

                  <p style={{ fontSize: 13, color: entry.accent, fontWeight: 500,
                    marginBottom: 20, letterSpacing: "-0.01em" }}>
                    {entry.org}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                    {entry.paragraphs.map((para, j) => (
                      <p key={j} style={{ fontSize: 15, color: "var(--text-secondary)",
                        lineHeight: 1.75 }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {entry.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, color: "var(--text-muted)",
                        padding: "4px 11px", borderRadius: 100,
                        border: "1px solid var(--border)", background: "var(--bg-card-hover)",
                        letterSpacing: "-0.005em" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
