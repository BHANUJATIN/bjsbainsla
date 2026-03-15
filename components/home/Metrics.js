"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 12,   suffix: "+",  label: "Client systems built" },
  { value: 30,   suffix: "+",  label: "Clay tables deployed" },
  { value: 7,    suffix: "+",  label: "Industries served" },
  { value: 1000, suffix: "s",  label: "Leads processed weekly" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1200;
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
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container-xl">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "center" }}
          className="metrics-grid">

          {/* Left - label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700,
              color: "var(--text-primary)", letterSpacing: "-0.04em", lineHeight: 1.15,
              marginBottom: 16 }}>
              Built for results,<br />not just delivery.
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Every system I build is production-grade, documented, and built to run without manual oversight.
            </p>
          </motion.div>

          {/* Right - 2x2 numbers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
            border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                style={{
                  padding: "32px 28px",
                  background: "var(--bg-card)",
                  borderRight: (i % 2 === 0) ? "1px solid var(--border)" : "none",
                  borderBottom: (i < 2) ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="gradient-text"
                  style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700,
                    lineHeight: 1, marginBottom: 8, letterSpacing: "-0.05em" }}>
                  <Counter value={m.value} suffix={m.suffix} />
                </div>
                <div style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.4 }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .metrics-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
