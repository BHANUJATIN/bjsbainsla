"use client";

import { motion } from "framer-motion";

const tools = [
  // Automation platforms
  { name: "Clay",               color: "#00A67E" },
  { name: "Make.com",           color: "#C084FC" },
  { name: "n8n",                color: "#F06022" },
  { name: "Airtable",           color: "#18BFFF" },
  { name: "Zapier",             color: "#FF4A00" },
  // Outreach
  { name: "Smartlead",          color: "#A78BFA" },
  { name: "Instantly",          color: "#60A5FA" },
  { name: "HeyReach",           color: "#38BDF8" },
  { name: "Lemlist",            color: "#FF6B6B" },
  // Prospecting & data
  { name: "Apollo",             color: "#818CF8" },
  { name: "LinkedIn Sales Nav", color: "#0A66C2" },
  { name: "Hunter.io",          color: "#FB923C" },
  { name: "Apify",              color: "#00B27A" },
  { name: "Phantombuster",      color: "#7C3AED" },
  { name: "RapidAPI",           color: "#6EE7B7" },
  // CRMs
  { name: "HubSpot",            color: "#FF7A59" },
  { name: "Salesforce",         color: "#00A1E0" },
  { name: "Pipedrive",          color: "#4CAF50" },
  { name: "Close CRM",          color: "#FBBF24" },
  // AI
  { name: "Claude",             color: "#D4956A" },
  { name: "OpenAI",             color: "#74AA9C" },
  // Dev & custom
  { name: "Node.js",            color: "#68A063" },
  { name: "Python",             color: "#3B82F6" },
  { name: "Custom APIs",        color: "#A78BFA" },
];

const clients = [
  { label: "Recruitment Agencies",     icon: "🎯", accent: "#6EE7B7" },
  { label: "Fintech Firms",            icon: "🏦", accent: "#60A5FA" },
  { label: "Medical & Healthcare",     icon: "🏥", accent: "#F472B6" },
  { label: "Non-Profit Organizations", icon: "🌱", accent: "#34D399" },
  { label: "Manufacturing",            icon: "🏭", accent: "#FBBF24" },
  { label: "Law & Legal",              icon: "⚖️", accent: "#A78BFA" },
  { label: "E-commerce",               icon: "🛒", accent: "#FB923C" },
];

export default function SocialProof() {
  return (
    <section style={{ borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)", padding:"60px 0" }}>
      <div className="container-xl">

        {/* ─── Worked With ─── */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.55 }}
          style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:20, marginBottom:48 }}
        >
          <p style={{ fontSize:11, fontWeight:600, color:"var(--text-faint)",
            textTransform:"uppercase", letterSpacing:"0.12em", whiteSpace:"nowrap" }}>
            Worked With
          </p>
          <div style={{ width:1, height:18, background:"var(--border)", flexShrink:0 }} />
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {clients.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity:0, y:8 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.3, delay: i * 0.05 }}
                whileHover={{ y:-2, borderColor:`${c.accent}55`, background:`${c.accent}0D` }}
                style={{ display:"inline-flex", alignItems:"center", gap:8,
                  padding:"7px 14px", borderRadius:100,
                  border:`1px solid ${c.accent}30`,
                  background:`${c.accent}08`,
                  cursor:"default", transition:"all 0.2s" }}
              >
                <span style={{ fontSize:14 }}>{c.icon}</span>
                <span style={{ fontSize:13, color: c.accent, fontWeight:500 }}>{c.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Tools ─── */}
        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          style={{ fontSize:11, fontWeight:600, color:"var(--text-faint)",
            textTransform:"uppercase", letterSpacing:"0.12em",
            textAlign:"center", marginBottom:24 }}
        >
          Tools I Work With
        </motion.p>

        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:8 }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.3, delay: i * 0.03 }}
              whileHover={{ y:-2, borderColor:`${tool.color}45`, background:`${tool.color}0A` }}
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"7px 14px",
                borderRadius:100, border:"1px solid var(--border)", background:"var(--bg-card)",
                cursor:"default", transition:"all 0.2s",
              }}
            >
              <div style={{ width:6, height:6, borderRadius:"50%",
                background: tool.color, flexShrink:0,
                boxShadow:`0 0 5px ${tool.color}70` }} />
              <span style={{ fontSize:13, fontWeight:500, color:"var(--text-secondary)",
                letterSpacing:"-0.01em" }}>
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
