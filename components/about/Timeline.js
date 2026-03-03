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
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#A78BFA", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Journey
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
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
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.04 }}
                style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: isLast ? 0 : 20 }}
              >
                {/* Left: dot + connecting line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                  flexShrink: 0, paddingTop: 22 }}>
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    style={{ width: 12, height: 12, borderRadius: "50%",
                      background: entry.accent, boxShadow: `0 0 10px ${entry.accent}55`,
                      border: `2px solid ${entry.accent}35`, flexShrink: 0, zIndex: 1 }}
                  />
                  {!isLast && (
                    <div style={{ width: 2, flex: 1, minHeight: 28, background: "var(--border)",
                      marginTop: 8, marginBottom: -8 }} />
                  )}
                </div>

                {/* Right: entry card */}
                <motion.div
                  whileHover={{ borderColor: `${entry.accent}35` }}
                  style={{ flex: 1, padding: "20px 24px", borderRadius: 16,
                    border: "1px solid var(--border)", background: "var(--bg-card)",
                    transition: "border-color 0.25s", marginBottom: isLast ? 0 : 8 }}
                >
                  {/* Type badge + period */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center",
                    gap: 10, marginBottom: 14 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "4px 10px", borderRadius: 100,
                      background: `${entry.accent}12`, border: `1px solid ${entry.accent}28` }}>
                      <Icon size={11} style={{ color: entry.accent }} />
                      <span style={{ fontSize: 10, fontWeight: 700, color: entry.accent,
                        textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        {entry.typeLabel}
                      </span>
                    </div>
                    <span style={{ fontSize: 12, color: "var(--text-faint)", fontWeight: 500,
                      letterSpacing: "0.02em" }}>
                      {entry.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)",
                    letterSpacing: "-0.02em", lineHeight: 1.35, marginBottom: 6 }}>
                    {entry.title}
                  </h3>

                  {/* Organisation */}
                  <p style={{ fontSize: 13, color: entry.accent, fontWeight: 500,
                    marginBottom: 16, opacity: 0.8 }}>
                    {entry.org}
                  </p>

                  {/* Description */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                    {entry.paragraphs.map((para, j) => (
                      <p key={j} style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {entry.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 11, color: "var(--text-muted)",
                        padding: "3px 10px", borderRadius: 100,
                        border: "1px solid var(--border)", background: "var(--bg-card-hover)",
                        letterSpacing: "0.02em" }}>
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
