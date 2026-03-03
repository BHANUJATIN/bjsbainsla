"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { SiN8N, SiMake, SiAirtable } from "react-icons/si";
import { Code2 } from "lucide-react";

/* ─── Custom letter-badge logos for tools not in icon libraries ─── */
function Badge({ letters, bg, color }) {
  return (
    <div style={{
      width: 34, height: 34, borderRadius: 9, flexShrink: 0,
      background: bg, display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <span style={{ color, fontSize: letters.length > 2 ? 9 : 11, fontWeight: 800, letterSpacing: "-0.02em" }}>
        {letters}
      </span>
    </div>
  );
}

const tools = [
  {
    name: "Clay",
    logo: <Badge letters="C" bg="rgba(0,166,126,0.18)" color="#00A67E" />,
    color: "#00A67E",
  },
  {
    name: "Smartlead",
    logo: <Badge letters="SL" bg="rgba(124,58,237,0.18)" color="#A78BFA" />,
    color: "#A78BFA",
  },
  {
    name: "HeyReach",
    logo: <Badge letters="HR" bg="rgba(14,165,233,0.18)" color="#38BDF8" />,
    color: "#38BDF8",
  },
  {
    name: "Instantly",
    logo: <Badge letters="I" bg="rgba(59,130,246,0.18)" color="#60A5FA" />,
    color: "#60A5FA",
  },
  {
    name: "Apollo",
    logo: <Badge letters="A" bg="rgba(99,102,241,0.18)" color="#818CF8" />,
    color: "#818CF8",
  },
  {
    name: "LinkedIn Sales Nav",
    logo: (
      <div style={{ width:34, height:34, borderRadius:9, background:"rgba(10,102,194,0.18)",
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <FaLinkedin size={16} style={{ color:"#0A66C2" }} />
      </div>
    ),
    color: "#0A66C2",
  },
  {
    name: "Make",
    logo: (
      <div style={{ width:34, height:34, borderRadius:9, background:"rgba(147,51,234,0.18)",
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <SiMake size={15} style={{ color:"#C084FC" }} />
      </div>
    ),
    color: "#C084FC",
  },
  {
    name: "n8n",
    logo: (
      <div style={{ width:34, height:34, borderRadius:9, background:"rgba(240,96,34,0.18)",
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <SiN8N size={15} style={{ color:"#F06022" }} />
      </div>
    ),
    color: "#F06022",
  },
  {
    name: "Airtable",
    logo: (
      <div style={{ width:34, height:34, borderRadius:9, background:"rgba(24,191,255,0.18)",
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <SiAirtable size={15} style={{ color:"#18BFFF" }} />
      </div>
    ),
    color: "#18BFFF",
  },
  {
    name: "Apify",
    logo: <Badge letters="AP" bg="rgba(0,178,122,0.18)" color="#00B27A" />,
    color: "#00B27A",
  },
  {
    name: "Custom APIs",
    logo: (
      <div style={{ width:34, height:34, borderRadius:9, background:"rgba(110,231,183,0.12)",
        display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Code2 size={15} style={{ color:"#6EE7B7" }} />
      </div>
    ),
    color: "#6EE7B7",
  },
];

const clients = [
  { label: "Fintech Firms",            icon: "🏦" },
  { label: "Recruitment Agencies",     icon: "🎯" },
  { label: "Non-Profit Organizations", icon: "🌱" },
];

export default function SocialProof() {
  return (
    <section style={{ borderTop:"1px solid #2A2A2E", borderBottom:"1px solid #2A2A2E", padding:"60px 0" }}>
      <div className="container-xl">

        {/* ── Worked With row ── */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.55 }}
          style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:20, marginBottom:48 }}
        >
          <p style={{ fontSize:11, fontWeight:600, color:"#52525B",
            textTransform:"uppercase", letterSpacing:"0.12em", whiteSpace:"nowrap" }}>
            Worked With
          </p>
          <div style={{ width:1, height:18, background:"#2A2A2E", flexShrink:0 }} />
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {clients.map(c => (
              <div key={c.label}
                style={{ display:"inline-flex", alignItems:"center", gap:8,
                  padding:"7px 14px", borderRadius:100, border:"1px solid #2A2A2E",
                  background:"#18181B", fontSize:13, color:"#A1A1AA" }}>
                <span style={{ fontSize:14 }}>{c.icon}</span>
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Tools heading ── */}
        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}
          style={{ fontSize:11, fontWeight:600, color:"#52525B",
            textTransform:"uppercase", letterSpacing:"0.12em",
            textAlign:"center", marginBottom:24 }}
        >
          Tools I Work With
        </motion.p>

        {/* ── Tool logos grid ── */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:10 }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.35, delay: i * 0.04 }}
              whileHover={{ y:-3, borderColor:`${tool.color}40`, background:"#1F1F23" }}
              style={{
                display:"inline-flex", alignItems:"center", gap:10,
                padding:"8px 14px 8px 8px",
                borderRadius:12, border:"1px solid #2A2A2E", background:"#18181B",
                cursor:"default", transition:"all 0.22s",
              }}
            >
              {tool.logo}
              <span style={{ fontSize:13, fontWeight:500, color:"#A1A1AA",
                letterSpacing:"-0.01em", lineHeight:1 }}>
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
