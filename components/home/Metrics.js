"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 12, suffix: "+", label: "Client GTM Systems Built", sub: "Across recruitment, fintech & SaaS" },
  { value: 30, suffix: "+", label: "Clay Tables Deployed",     sub: "End-to-end, production-ready" },
  { value: 7,  suffix: "+",  label: "Industries Served",        sub: "Fintech, Recruitment, Nonprofit" },
  { value: 1000, suffix: "s", label: "Leads Processed Weekly", sub: "Through automated pipelines" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1400;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      position: "relative", overflow: "hidden" }}>

      {/* Glow */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none",
        background:"radial-gradient(ellipse 70% 50% at 50% 50%, rgba(110,231,183,0.04) 0%, transparent 70%)" }} />

      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: "#6EE7B7", textTransform: "uppercase",
            letterSpacing: "0.12em", marginBottom: 14 }}>
            Track Record
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700,
            color: "var(--text-primary)", letterSpacing: "-0.025em" }}>
            Execution Experience
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ borderColor: "rgba(110,231,183,0.25)" }}
              style={{ textAlign: "center", padding: "28px 20px", borderRadius: 16,
                border: "1px solid var(--border)", background: "var(--bg-card)", transition: "border-color 0.3s" }}
            >
              <div className="gradient-text"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 700,
                  lineHeight: 1, marginBottom: 10 }}>
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                {m.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
