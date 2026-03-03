"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import ProblemSolution from "@/components/recruitment/ProblemSolution";
import Pipeline from "@/components/recruitment/Pipeline";
import Benefits from "@/components/recruitment/Benefits";
import Contact from "@/components/Contact";

export default function RecruitmentPage() {
  return (
    <>
      {/* Hero — CSS animations so it's always visible */}
      <section className="grid-bg"
        style={{ paddingTop: 128, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 60% 50% at 50% 0%, rgba(110,231,183,0.07) 0%, transparent 70%)" }} />

        <div className="container-xl" style={{ position:"relative", zIndex:1 }}>
          <div className="anim-fade-up delay-100" style={{ maxWidth: 700 }}>

            <div style={{ display:"inline-flex", alignItems:"center", gap:12, marginBottom:24 }}>
              <div style={{ width:40, height:40, borderRadius:12, background:"rgba(110,231,183,0.1)",
                border:"1px solid rgba(110,231,183,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Briefcase size={18} style={{ color:"#6EE7B7" }} />
              </div>
              <span style={{ fontSize:11, fontWeight:600, color:"#6EE7B7", textTransform:"uppercase", letterSpacing:"0.12em" }}>
                Recruitment Automation
              </span>
            </div>

            <h1 style={{ fontSize:"clamp(2.2rem, 6vw, 4rem)", fontWeight:700, color:"#F5F5F7",
              letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:20 }}>
              Automated Job Discovery
              <br />
              <span className="gradient-text">for Recruitment Firms</span>
            </h1>

            <p style={{ fontSize:"clamp(1rem, 2vw, 1.15rem)", color:"#A1A1AA", lineHeight:1.75, marginBottom:36 }}>
              Identify hiring companies before your competitors.
              <br />
              Fully automated job discovery, classification, and lead delivery.
            </p>

            <div style={{ display:"flex", flexWrap:"wrap", gap:14 }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" }); }}
                whileHover={{ y:-3, boxShadow:"0 16px 32px rgba(110,231,183,0.25)" }}
                style={{ display:"inline-flex", alignItems:"center", gap:8,
                  padding:"13px 26px", background:"#6EE7B7", color:"#0E0E10",
                  fontWeight:600, fontSize:15, borderRadius:12, textDecoration:"none",
                  cursor:"pointer" }}
              >
                Build a Job Discovery System
                <ArrowRight size={15} />
              </motion.a>
              <motion.a
                href="#pipeline"
                onClick={(e) => { e.preventDefault(); document.getElementById("pipeline")?.scrollIntoView({ behavior:"smooth" }); }}
                whileHover={{ y:-3, borderColor:"rgba(110,231,183,0.4)" }}
                style={{ display:"inline-flex", alignItems:"center", gap:8,
                  padding:"13px 26px", border:"1px solid #2A2A2E", color:"#F5F5F7",
                  fontWeight:500, fontSize:15, borderRadius:12, textDecoration:"none",
                  cursor:"pointer", transition:"border-color 0.2s" }}
              >
                See How It Works
              </motion.a>
            </div>

          </div>
        </div>
      </section>

      <ProblemSolution />

      <div id="pipeline">
        <Pipeline />
      </div>

      <Benefits />

      {/* Final CTA */}
      <section style={{ padding:"96px 0", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none",
          background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(110,231,183,0.06) 0%, transparent 70%)" }} />

        <div className="container-xl" style={{ textAlign:"center", position:"relative", zIndex:1 }}>
          <motion.div
            initial={{ opacity:0, y:28 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7 }}
          >
            <div style={{ width:48, height:1, margin:"0 auto 32px",
              background:"linear-gradient(90deg, transparent, #6EE7B7, transparent)" }} />

            <h2 style={{ fontSize:"clamp(1.8rem, 5vw, 2.8rem)", fontWeight:700, color:"#F5F5F7",
              letterSpacing:"-0.03em", marginBottom:16, lineHeight:1.2 }}>
              Ready to stop{" "}
              <span className="gradient-text">manual job hunting?</span>
            </h2>

            <p style={{ fontSize:16, color:"#A1A1AA", maxWidth:440, margin:"0 auto 40px", lineHeight:1.7 }}>
              Let's build a custom job discovery pipeline that delivers qualified
              hiring companies to your desk every morning.
            </p>

            <motion.a
              href="https://calendly.com/bjsbainsla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y:-4, boxShadow:"0 20px 40px rgba(110,231,183,0.3)" }}
              style={{ display:"inline-flex", alignItems:"center", gap:8,
                padding:"15px 32px", background:"#6EE7B7", color:"#0E0E10",
                fontWeight:600, fontSize:15, borderRadius:12, textDecoration:"none" }}
            >
              Build a Job Discovery System
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  );
}
