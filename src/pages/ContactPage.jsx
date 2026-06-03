import Header from "../components/Header";
import styles from "./ContactPage.module.css";
import { useState } from "react";

const CONTACTS = [
  {
    id: "email",
    num: "01",
    label: "Email",
    value: "architects.sot@gmail.com",
    action: "Copy address",
    copyText: "architects.sot@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
  },
  {
    id: "phone",
    num: "02",
    label: "Phone",
    value: "+91 77 3 666 0851",
    action: "Copy number",
    copyText: "+91 77 3 666 0851",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    id: "web",
    num: "03",
    label: "Website",
    value: "www.sketchonthoughts.com",
    action: "Visit →",
    href: "https://www.sketchonthoughts.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleAction = (c) => {
    if (c.href) {
      window.open(c.href, "_blank");
    } else {
      navigator.clipboard.writeText(c.copyText).then(() => {
        setCopied(c.id);
        setTimeout(() => setCopied(null), 2200);
      });
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* ── INTRO ── */}
      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Get in touch
          </span>
          <h1 className={styles.heading}>
            Let's build<br />
            <em>something<br />together.</em>
          </h1>
        </div>

        <div className={styles.introRight}>
          <p className={styles.subtext}>
            Choosing SoT means working with a firm that values creativity,
            sustainability, and client satisfaction. We deliver architectural
            solutions that meet today's demands and adapt for the future.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>08+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Typologies</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>Kerala</span>
              <span className={styles.statLabel}>Region</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ROWS ── */}
      <section className={styles.contactSection}>
        <p className={styles.contactEyebrow}>Reach us through</p>

        <div className={styles.contactList}>
          {CONTACTS.map((c) => (
            <div
              key={c.id}
              className={`${styles.contactRow} ${hovered === c.id ? styles.rowHovered : ""}`}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleAction(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleAction(c)}
            >
              <span className={styles.rowNum}>{c.num}</span>

              <div className={styles.rowIcon}>{c.icon}</div>

              <div className={styles.rowBody}>
                <span className={styles.rowLabel}>{c.label}</span>
                <span className={styles.rowValue}>{c.value}</span>
              </div>

              <span
                className={`${styles.rowAction} ${copied === c.id ? styles.rowActionCopied : ""}`}
              >
                {copied === c.id ? "✓ Copied" : c.action}
              </span>

              <div className={styles.rowArrow}>→</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quoteMark}>"</div>
          <blockquote className={styles.quote}>
            Architecture that breathes,<br />
            <em>adapts, and inspires.</em>
          </blockquote>
          <div className={styles.quoteDivider} />
          <p className={styles.quoteLocation}>Sketch on Thoughts — Tirur, Malappuram, Kerala</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerBrand}>Sketch on Thoughts</span>
          <span className={styles.footerTag}>Architecture & Design Studio</span>
        </div>
        <div className={styles.footerRight}>
          <a href="mailto:architects.sot@gmail.com" className={styles.footerLink}>
            architects.sot@gmail.com
          </a>
          <a href="https://www.sketchonthoughts.com" className={styles.footerLink} target="_blank" rel="noreferrer">
            www.sketchonthoughts.com
          </a>
        </div>
      </footer>
    </div>
  );
}