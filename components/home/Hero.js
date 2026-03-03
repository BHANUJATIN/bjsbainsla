"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

function NodeCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const LABELS = ["Jobs", "Companies", "Contacts", "Enrichment", "Outbound", "LinkedIn", "Clay", "APIs", "CRM"];
    const A = "#6EE7B7";
    const B = "#60A5FA";

    const nodes = LABELS.map((label, i) => {
      const angle = (i / LABELS.length) * Math.PI * 2;
      const r = Math.min(canvas.width, canvas.height) * 0.28;
      return {
        label,
        x: canvas.width / 2 + Math.cos(angle) * r + (Math.random() - 0.5) * 50,
        y: canvas.height / 2 + Math.sin(angle) * r + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 4 + Math.random() * 2,
        color: Math.random() > 0.5 ? A : B,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    const packets = [];
    let frame = 0;

    const getEdges = () => {
      const e = [];
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx*dx+dy*dy) < 250) e.push([i, j]);
        }
      return e;
    };

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 50 || n.x > canvas.width - 50) n.vx *= -1;
        if (n.y < 50 || n.y > canvas.height - 50) n.vy *= -1;
        n.pulse += 0.02;
      });

      const edges = getEdges();

      edges.forEach(([i, j]) => {
        const a = nodes[i], b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const alpha = Math.max(0, 1 - Math.sqrt(dx*dx+dy*dy)/250) * 0.18;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(110,231,183,${alpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i,1); continue; }
        const fx = nodes[p.a].x, fy = nodes[p.a].y;
        const tx = nodes[p.b].x, ty = nodes[p.b].y;
        const x = fx + (tx-fx)*p.t, y = fy + (ty-fy)*p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI*2);
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 8; ctx.shadowColor = p.c;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      nodes.forEach(n => {
        const pulse = Math.sin(n.pulse)*0.3+0.7;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r+5, 0, Math.PI*2);
        ctx.fillStyle = n.color+"18"; ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
        ctx.fillStyle = n.color;
        ctx.shadowBlur = 12*pulse; ctx.shadowColor = n.color;
        ctx.fill(); ctx.shadowBlur = 0;
        ctx.font = "10px Inter,sans-serif";
        ctx.fillStyle = "rgba(245,245,247,0.45)";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y+n.r+13);
      });

      if (frame % 55 === 0 && packets.length < 8 && edges.length > 0) {
        const e = edges[Math.floor(Math.random()*edges.length)];
        packets.push({ a:e[0], b:e[1], t:0, speed:0.004+Math.random()*0.004, c:Math.random()>0.5?A:B });
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }} />;
}

export default function Hero() {
  return (
    <section
      className="relative grid-bg"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* Canvas */}
      <NodeCanvas />

      {/* Vignette - theme-aware, keeps text readable */}
      <div className="absolute inset-0 pointer-events-none hero-vignette" />

      {/* Glow orbs */}
      <div className="absolute pointer-events-none"
        style={{ top:"30%", left:"20%", width:420, height:420, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)", filter:"blur(60px)" }} />
      <div className="absolute pointer-events-none"
        style={{ bottom:"25%", right:"15%", width:360, height:360, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)", filter:"blur(60px)" }} />

      {/* Content - CSS animations = visible even before JS hydrates */}
      <div
        className="relative"
        style={{ zIndex: 10, width:"100%", maxWidth:900, margin:"0 auto", padding:"120px 24px 80px", textAlign:"center" }}
      >
        {/* Status badge */}
        <div
          className="anim-fade-in delay-100 badge-glow"
          style={{ display:"inline-flex", alignItems:"center", gap:8,
            padding:"8px 16px", borderRadius:100,
            border:"1px solid var(--border)", background:"var(--bg-card)",
            backdropFilter:"blur(12px)", fontSize:12, color:"var(--text-secondary)", marginBottom:32 }}
        >
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#6EE7B7",
            display:"inline-block", animation:"pulse 2s infinite" }} />
          Available for new projects
          <Zap size={11} style={{ color:"#6EE7B7" }} />
        </div>

        {/* Headline */}
        <h1
          className="anim-fade-up delay-200"
          style={{ fontSize:"clamp(2.4rem, 6vw, 4.5rem)", fontWeight:700,
            lineHeight:1.08, letterSpacing:"-0.03em", color:"var(--text-primary)", marginBottom:24 }}
        >
          GTM Automation
          <br />
          <span className="gradient-text">&amp; Outbound Infrastructure</span>
        </h1>

        {/* Sub */}
        <p
          className="anim-fade-up delay-300"
          style={{ fontSize:"clamp(1rem, 2vw, 1.2rem)", color:"var(--text-secondary)",
            maxWidth:580, margin:"0 auto 40px", lineHeight:1.7 }}
        >
          Automated outbound and data pipelines across recruitment, fintech, medical,
          non-profit, manufacturing, legal, and e-commerce — from lead discovery to outreach infrastructure, fully automated.
        </p>

        {/* CTAs */}
        <div
          className="anim-fade-up delay-400"
          style={{ display:"flex", flexWrap:"wrap", gap:16, alignItems:"center", justifyContent:"center" }}
        >
          <motion.a
            href="https://calendly.com/bjsbainsla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, boxShadow:"0 20px 40px rgba(110,231,183,0.25)" }}
            style={{ display:"inline-flex", alignItems:"center", gap:8,
              padding:"14px 28px", background:"#6EE7B7", color:"var(--bg-page)",
              fontWeight:600, fontSize:15, borderRadius:12, textDecoration:"none",
              transition:"background 0.2s" }}
          >
            Book a Call
            <ArrowRight size={15} />
          </motion.a>

          <motion.button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior:"smooth" })}
            whileHover={{ y: -3, borderColor:"rgba(110,231,183,0.5)" }}
            style={{ display:"inline-flex", alignItems:"center", gap:8,
              padding:"14px 28px", background:"transparent", color:"var(--text-primary)",
              fontWeight:500, fontSize:15, borderRadius:12, border:"1px solid var(--border)",
              cursor:"pointer", transition:"border-color 0.2s" }}
          >
            See My Systems
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute"
        style={{ bottom:32, left:"50%", transform:"translateX(-50%)", zIndex:10 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.2, duration:0.8 }}
      >
        <motion.div
          animate={{ y:[0,8,0] }}
          transition={{ duration:2, repeat:Infinity, ease:"easeInOut" }}
          style={{ width:22, height:36, border:"1px solid var(--border)", borderRadius:11,
            display:"flex", alignItems:"flex-start", justifyContent:"center", paddingTop:6 }}
        >
          <div style={{ width:4, height:8, background:"#6EE7B7", borderRadius:2 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
