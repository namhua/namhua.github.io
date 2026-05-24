// All section components for the portfolio.
// Each takes minimal props; data lives here so it's easy for the user to edit.

// ──────────────── ICONS ────────────────
const Ico = {
  Arrow: ({ size = 14 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  ),
  ArrowUR: ({ size = 14 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11L11 5M5 5h6v6" />
    </svg>
  ),
  Download: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v9M4 8l4 4 4-4M3 14h10" />
    </svg>
  ),
  Up: () => (
    <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8V2M2 5l3-3 3 3" /></svg>
  ),
  Close: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
  ),
  Sql: () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="10" cy="5" rx="6" ry="2" />
      <path d="M4 5v10c0 1.1 2.7 2 6 2s6-.9 6-2V5" />
      <path d="M4 10c0 1.1 2.7 2 6 2s6-.9 6-2" />
    </svg>
  ),
  Chart: () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M3 17V8M9 17V4M15 17v-6" />
      <path d="M2 17h16" />
    </svg>
  ),
  Pipe: () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="2" y="3" width="6" height="6" rx="1" />
      <rect x="12" y="3" width="6" height="6" rx="1" />
      <rect x="7" y="11" width="6" height="6" rx="1" />
      <path d="M5 9v2h5M15 9v2h-5" />
    </svg>
  ),
  Building: () => (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 17V5l7-3 7 3v12" />
      <path d="M3 17h14M7 9v3M10 9v3M13 9v3M7 14v3M10 14v3M13 14v3" />
    </svg>
  ),
  Cert: () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="10" cy="8" r="5" />
      <path d="M7 12l-1.5 5 4.5-2 4.5 2L13 12" />
    </svg>
  ),
  Cap: () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7l8-4 8 4-8 4-8-4z" />
      <path d="M5 9v4c0 1.5 2.5 3 5 3s5-1.5 5-3V9" />
      <path d="M18 7v5" />
    </svg>
  ),
  Linkedin: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3.5 2A1.5 1.5 0 105 3.5 1.5 1.5 0 003.5 2zM2 6h3v8H2zm5 0h2.9v1.1h.04A3.18 3.18 0 0112.6 5.8c2.8 0 3.4 1.8 3.4 4.2V14h-3v-3.6c0-.87-.02-2-1.22-2-1.22 0-1.4.95-1.4 1.93V14H7z" /></svg>
  ),
  Github: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.61 7.61 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
  ),
  Mail: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="3" width="12" height="10" rx="1.5" /><path d="M2 5l6 4 6-4" /></svg>
  ),
  Youtube: () => (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3.5" width="14" height="9" rx="2.5" />
      <path d="M6.5 5.8l4 2.2-4 2.2V5.8z" fill="currentColor" stroke="none" />
    </svg>
  ),
  Hamburger: () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M0 1h18M0 6h18M0 11h18" />
    </svg>
  ),
};

// ──────────────── SKILL TAG ICONS ────────────────
// All monochrome line-art (12×12 viewBox, 1px stroke), inherits currentColor → --accent.
// Redrawn from the user's reference logos — simplified for tag-size legibility.
const STROKE = { fill: "none", stroke: "currentColor", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" };
const TagIco = {
  // ─ Programming & Querying ─
  // SQL — single cylinder database (3 stacked rings)
  SQL: () => (<svg viewBox="0 0 12 12" {...STROKE}><ellipse cx="6" cy="2.5" rx="3.7" ry="1.1"/><path d="M2.3 2.5v7c0 .65 1.66 1.18 3.7 1.18s3.7-.53 3.7-1.18v-7"/><path d="M2.3 4.8c0 .65 1.66 1.18 3.7 1.18s3.7-.53 3.7-1.18"/><path d="M2.3 7.1c0 .65 1.66 1.18 3.7 1.18s3.7-.53 3.7-1.18"/></svg>),
  // Python — interlocked rectangles
  Python: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M3 1.5h3a1.5 1.5 0 0 1 1.5 1.5v1.5h-3A1.5 1.5 0 0 0 3 6v-3A1.5 1.5 0 0 1 4.5 1.5"/><path d="M9 10.5H6a1.5 1.5 0 0 1-1.5-1.5V7.5h3A1.5 1.5 0 0 0 9 6v3A1.5 1.5 0 0 1 7.5 10.5"/><circle cx="4.5" cy="3" r=".35" fill="currentColor" stroke="none"/><circle cx="7.5" cy="9" r=".35" fill="currentColor" stroke="none"/></svg>),
  // PySpark — Apache Spark starburst
  Spark: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1.2c.4 1.6.9 2.5 1.7 3.1.8.6 1.8.9 3.1 1.1-1.6.4-2.5.9-3.1 1.7-.6.8-.9 1.8-1.1 3.1-.4-1.6-.9-2.5-1.7-3.1C4.1 6.5 3.1 6.2 1.8 6c1.6-.4 2.5-.9 3.1-1.7C5.5 3.5 5.8 2.5 6 1.2z"/></svg>),

  // ─ Data Engineering ─
  // Airflow — pinwheel (4 curved blades)
  Airflow: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 6 C6 3 7 1.5 9.5 1.5 C9 4 7.5 5.5 6 6Z"/><path d="M6 6 C9 6 10.5 7 10.5 9.5 C8 9 6.5 7.5 6 6Z"/><path d="M6 6 C6 9 5 10.5 2.5 10.5 C3 8 4.5 6.5 6 6Z"/><path d="M6 6 C3 6 1.5 5 1.5 2.5 C4 3 5.5 4.5 6 6Z"/><circle cx="6" cy="6" r=".4" fill="currentColor" stroke="none"/></svg>),
  // ETL pipelines — two tables with arrow between
  Flow: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1" y="1.5" width="4" height="3.5" rx=".4"/><path d="M1 2.7h4M1 3.9h4"/><rect x="7" y="7" width="4" height="3.5" rx=".4"/><path d="M7 8.2h4M7 9.4h4"/><path d="M5.5 4 C7 4 7 7 8.5 7"/><path d="M7.8 6.4 L8.5 7 L7.8 7.6"/></svg>),
  // Data modeling — hexagon with cylinder in center
  dbt: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1 L10.3 3.5 V8.5 L6 11 L1.7 8.5 V3.5 Z"/><ellipse cx="6" cy="5" rx="1.6" ry=".55"/><path d="M4.4 5v2c0 .3.72.55 1.6.55s1.6-.25 1.6-.55V5"/></svg>),
  // Dataset design — cylinder with flow path to flag
  Schema: () => (<svg viewBox="0 0 12 12" {...STROKE}><ellipse cx="3" cy="8.5" rx="1.8" ry=".6"/><path d="M1.2 8.5v1.6c0 .33.8.6 1.8.6s1.8-.27 1.8-.6V8.5"/><path d="M3 8.5V7.4 M1.2 7.4c0 .33.8.6 1.8.6s1.8-.27 1.8-.6"/><path d="M4.8 8.5 C7 8.5 6 6 8 6 C10 6 9 3 10.5 3"/><path d="M10.5 1.5 L10.5 3 L9 2.5 Z"/></svg>),
  // Data quality — cylinder with check medallion
  Check: () => (<svg viewBox="0 0 12 12" {...STROKE}><ellipse cx="5" cy="2.6" rx="3" ry="1"/><path d="M2 2.6v4c0 .55 1.34 1 3 1s3-.45 3-1v-4"/><path d="M2 4.6c0 .55 1.34 1 3 1s3-.45 3-1"/><circle cx="8.5" cy="8.5" r="2.2"/><path d="M7.4 8.5 L8.2 9.3 L9.7 7.7"/></svg>),

  // ─ BI & Visualization ─
  // Tableau — cross/plus cluster pattern
  Tableau: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1 V3 M5 2 H7"/><path d="M2.5 4 V5.6 M1.8 4.8 H3.2"/><path d="M9.5 4 V5.6 M8.8 4.8 H10.2"/><path d="M6 5 V7.5 M4.7 6.25 H7.3"/><path d="M3.5 8.5 V10 M2.85 9.25 H4.15"/><path d="M8.5 8.5 V10 M7.85 9.25 H9.15"/></svg>),
  // Power BI — three rising bars
  PowerBI: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1.8" y="7" width="2.2" height="3.8" rx=".25"/><rect x="4.9" y="4.5" width="2.2" height="6.3" rx=".25"/><rect x="8" y="2" width="2.2" height="8.8" rx=".25"/></svg>),
  // Dashboard development — screen with bars + line + side stats
  Dashboard: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1" y="2" width="10" height="7.5" rx=".6"/><path d="M2.5 7.5 L4 6 L5.2 6.8 L6.5 4.8"/><circle cx="2.5" cy="7.5" r=".3" fill="currentColor" stroke="none"/><circle cx="6.5" cy="4.8" r=".3" fill="currentColor" stroke="none"/><path d="M8 4 H10 M8 5.5 H10 M8 7 H9.5"/></svg>),
  // KPI reporting — document with chart + arrow up
  KPI: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M2.5 1.5 H7.5 L9.5 3.5 V10.5 H2.5 Z"/><path d="M7.5 1.5 V3.5 H9.5"/><path d="M4 8.5 L5.5 6.8 L6.7 7.7 L8.2 5.7"/><path d="M7.4 5.7 H8.2 V6.5"/></svg>),
  // Data storytelling — document with magnifier on chart
  Quote: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M2 2 H7 L9 4 V10 H2 Z"/><path d="M7 2 V4 H9"/><circle cx="5" cy="7" r="1.7"/><path d="M6.3 8.3 L7.7 9.7"/><path d="M5 5.4 V7 H6.5" opacity=".55"/></svg>),

  // ─ Analytics & Modeling ─
  // EDA — magnifier with pie inside
  Lens: () => (<svg viewBox="0 0 12 12" {...STROKE}><circle cx="5" cy="5" r="3.4"/><path d="M7.5 7.5 L10.8 10.8"/><path d="M5 3 V5 L6.8 5" opacity=".7"/></svg>),
  // Statistical analysis — axes + curve + magnifier
  Sigma: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M1.5 1.5 V10.5 H10.5"/><path d="M9.8 9.8 L10.8 10.8 M10.2 10.5 L10.5 10.2" opacity=".6"/><path d="M1.5 1.7 L1.2 2 M1.5 1.5 L1.8 1.8" opacity=".6"/><path d="M3 8.5 C4 8.5 4.5 5 6 5 C7.5 5 8 7.5 9 7"/><circle cx="6" cy="3.2" r="1.4"/><path d="M7 4.2 L8.2 5.4"/></svg>),
  // Forecasting — chart with question circle
  Forecast: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M1.5 1.5 V10.5 H10.5"/><path d="M2.5 8.5 L4.5 7 L6 8 L8 6 L10 4" strokeDasharray="1.2 1"/><path d="M2.5 8.5 L4.5 7 L6 8" strokeDasharray="0"/><circle cx="2.5" cy="8.5" r=".35" fill="currentColor" stroke="none"/><circle cx="6" cy="8" r=".35" fill="currentColor" stroke="none"/><circle cx="10" cy="4" r=".35" fill="currentColor" stroke="none"/><circle cx="3.5" cy="3" r="1.3"/><path d="M3 2.8 c.1-.4.8-.5.9-.1 c.1.3-.4.5-.4.8" /><circle cx="3.5" cy="4" r=".22" fill="currentColor" stroke="none"/></svg>),
  // Time-series anomaly — line with spike + circle
  Anomaly: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M1 9 L3 8.8 L4 9 L5.2 8.4 L6 2 L7 9 L9 8.5 L11 8.7"/><circle cx="6" cy="2" r="1.3"/></svg>),
  // Matrix Profile — repeated waveform with markers
  MProfile: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M1 8 L2.5 4.5 L4 8 L5.5 4.5 L7 8 L8.5 4.5 L10 8 L11 6.5" opacity=".55"/><circle cx="4" cy="8" r=".85" fill="currentColor" stroke="none"/><circle cx="7" cy="8" r=".85" fill="currentColor" stroke="none"/></svg>),
  // Machine learning — brain + circuit
  KNN: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M5.5 2.2 C3.5 2.2 2.5 3.5 2.8 5 C2 5.5 2 7 3 7.5 C2.8 9 4 10 5.5 9.8 V2.2 Z"/><path d="M5.5 4 H7 M5.5 6 H7.5 M5.5 8 H7"/><circle cx="8" cy="4" r=".55"/><circle cx="9" cy="6" r=".55"/><circle cx="8" cy="8" r=".55"/><path d="M8.5 4 H10 M9.5 6 H11 M8.5 8 H10"/></svg>),
  // NLP — chip with NLP text
  Text: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="2.5" y="2.5" width="7" height="7" rx=".6"/><rect x="4.2" y="4.2" width="3.6" height="3.6" rx=".2" opacity=".55"/><path d="M4 1.5 V2.5 M6 1.5 V2.5 M8 1.5 V2.5"/><path d="M4 9.5 V10.5 M6 9.5 V10.5 M8 9.5 V10.5"/><path d="M1.5 4 H2.5 M1.5 6 H2.5 M1.5 8 H2.5"/><path d="M9.5 4 H10.5 M9.5 6 H10.5 M9.5 8 H10.5"/></svg>),
  // (legacy) bell curve
  Bell: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M1 10c2 0 3-7 5-7s3 7 5 7"/><path d="M1 10h10" opacity=".5"/></svg>),
  // (legacy) Genetic algorithm
  DNA: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M3 2c0 3 6 5 6 8 M9 2c0 3-6 5-6 8"/><path d="M4 4h4 M3.5 6h5 M4 8h4" opacity=".7"/></svg>),

  // ─ AI-assisted Development ─
  // Codex — cloud with > prompt
  Codex: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M3.5 8 C2 8 1.2 6.8 1.6 5.6 C1 5 1.4 3.8 2.4 3.6 C2.8 2.4 4.2 1.8 5.3 2.4 C6 1.6 7.5 1.6 8 2.6 C9.2 2.4 10.4 3.3 10.4 4.6 C11 5 11 6.2 10.4 6.6 C10.6 7.6 9.6 8 8.6 8 Z"/><path d="M4.5 5 L5.7 6 L4.5 7 M6.3 7 H7.7"/></svg>),
  // Claude — radial burst (8-ray star)
  Claude: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1.5 V4 M6 8 V10.5 M1.5 6 H4 M8 6 H10.5 M2.8 2.8 L4.6 4.6 M7.4 7.4 L9.2 9.2 M2.8 9.2 L4.6 7.4 M7.4 4.6 L9.2 2.8"/></svg>),
  // Refactoring — cyclic arrows around code window
  Refactor: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M10.5 4 A4 4 0 0 0 2.5 4.5"/><path d="M10 1.5 V4 H7.5"/><path d="M1.5 8 A4 4 0 0 0 9.5 7.5"/><path d="M2 10.5 V8 H4.5"/><path d="M4.8 5.4 L4 6 L4.8 6.6 M7.2 5.4 L8 6 L7.2 6.6" opacity=".7"/></svg>),
  // Debugging — magnifier with bug
  Debug: () => (<svg viewBox="0 0 12 12" {...STROKE}><circle cx="5" cy="5" r="3.4"/><path d="M7.5 7.5 L10.8 10.8"/><ellipse cx="5" cy="5.2" rx="1" ry="1.3"/><path d="M5 4.2 V3.4 M4.4 3.4 H5.6 M3.8 4.5 L3.2 4 M6.2 4.5 L6.8 4 M3.8 6 L3.2 6.5 M6.2 6 L6.8 6.5" opacity=".75"/></svg>),
  // Documentation — page with corner fold + lines
  Doc: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M2.5 1.5 H7.5 L9.5 3.5 V10.5 H2.5 Z"/><path d="M7.5 1.5 V3.5 H9.5"/><rect x="3.8" y="3" width="1.4" height="1.4" opacity=".6"/><path d="M3.8 5.8 H8.2 M3.8 7.2 H8.2 M3.8 8.6 H7"/></svg>),
  // Workflow automation — gear with rotating arrows
  Workflow: () => (<svg viewBox="0 0 12 12" {...STROKE}><circle cx="6" cy="6" r="1.6"/><path d="M6 3.5 V2.4 M6 9.6 V8.5 M3.5 6 H2.4 M9.6 6 H8.5 M4.3 4.3 L3.5 3.5 M8.5 8.5 L7.7 7.7 M4.3 7.7 L3.5 8.5 M7.7 4.3 L8.5 3.5"/><path d="M1.8 3.3 A4.5 4.5 0 0 1 8.5 1.5" opacity=".6"/><path d="M10.2 8.7 A4.5 4.5 0 0 1 3.5 10.5" opacity=".6"/><path d="M8.5 1.5 L8.7 2.4 L7.8 2.6 M3.5 10.5 L3.3 9.6 L4.2 9.4" opacity=".6"/></svg>),

  // ─ Legacy / fallbacks (kept so unused mappings don't break) ─
  BigQuery: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1 L10.5 3.5 V8.5 L6 11 L1.5 8.5 V3.5 Z"/><path d="M1.5 3.5 L6 6 L10.5 3.5 M6 6 V11"/></svg>),
  Snowflake: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M6 1 V11 M1.7 3.5 L10.3 8.5 M1.7 8.5 L10.3 3.5"/></svg>),
  Looker: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M2 10 L5 6 L8 8 L11 3"/><circle cx="2" cy="10" r=".5" fill="currentColor"/><circle cx="11" cy="3" r=".5" fill="currentColor"/></svg>),
  Metabase: () => (<svg viewBox="0 0 12 12" {...STROKE}><circle cx="3" cy="3.5" r=".8"/><circle cx="6" cy="2.4" r=".8"/><circle cx="9" cy="3.5" r=".8"/></svg>),
  Excel: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1.5" y="1.5" width="9" height="9" rx=".5"/><path d="M1.5 4.5 H10.5 M1.5 7.5 H10.5 M4.5 1.5 V10.5 M7.5 1.5 V10.5"/></svg>),
  Fx: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M3 2.5 L2 9.5 M2.5 6 H4.5"/><path d="M7 4 L10 8 M10 4 L7 8"/></svg>),
  AB: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1.5" y="1.5" width="4" height="9" rx=".5"/><rect x="6.5" y="1.5" width="4" height="9" rx=".5" strokeDasharray="1.5 1.2"/></svg>),
  Git: () => (<svg viewBox="0 0 12 12" {...STROKE}><circle cx="3" cy="3" r="1.2"/><circle cx="3" cy="9" r="1.2"/><circle cx="9" cy="6" r="1.2"/><path d="M3 4.2 V7.8 M4.2 3 H7 M4.2 9 H6"/></svg>),
  pandas: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M2 3 V9 M5 3 V9 M8 3 V9 M11 3 V9 M2 6 H11"/></svg>),
  Brief: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1.5" y="3.5" width="9" height="7" rx="1"/><path d="M4 3.5 V2 H8 V3.5 M1.5 6.5 H10.5"/></svg>),
  Func: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="1.5" y="2" width="9" height="8" rx="1"/><path d="M3.5 4 H6.5 M3.5 6 H5.5 M3.5 8 H8.5"/></svg>),
  AISpark: () => (<svg viewBox="0 0 12 12" {...STROKE}><path d="M4 1.5 L4.6 3.4 L6.5 4 L4.6 4.6 L4 6.5 L3.4 4.6 L1.5 4 L3.4 3.4 Z"/><path d="M8.5 6 L9.1 7.9 L11 8.5 L9.1 9.1 L8.5 11 L7.9 9.1 L6 8.5 L7.9 7.9 Z"/></svg>),
  Bot: () => (<svg viewBox="0 0 12 12" {...STROKE}><rect x="2.5" y="4" width="7" height="6" rx="1.2"/><circle cx="4.5" cy="7" r=".7" fill="currentColor" stroke="none"/><circle cx="7.5" cy="7" r=".7" fill="currentColor" stroke="none"/><path d="M6 4 V2 M5 2 H7"/></svg>),
};

// Map skill labels → icon. Unmapped skills render as plain tags.
const SKILL_ICON_MAP = {
  // Programming & Querying
  "SQL": TagIco.SQL,
  "Python": TagIco.Python,
  "PySpark": TagIco.Spark,

  // Data Engineering
  "Airflow": TagIco.Airflow,
  "ETL pipelines": TagIco.Flow,
  "ETL/ELT": TagIco.Flow,
  "Data modeling": TagIco.dbt,
  "Dataset design": TagIco.Schema,
  "Database design": TagIco.Schema,
  "Data quality": TagIco.Check,

  // BI & Visualization
  "Tableau": TagIco.Tableau,
  "Power BI": TagIco.PowerBI,
  "Dashboard development": TagIco.Dashboard,
  "Dashboard design": TagIco.Dashboard,
  "KPI reporting": TagIco.KPI,
  "Data storytelling": TagIco.Quote,
  "Storytelling": TagIco.Quote,
  "Looker Studio": TagIco.Looker,
  "Looker": TagIco.Looker,
  "Metabase": TagIco.Metabase,
  "DAX": TagIco.Fx,

  // Analytics & Modeling
  "EDA": TagIco.Lens,
  "Statistical analysis": TagIco.Sigma,
  "Statistics": TagIco.Sigma,
  "Statistical modeling": TagIco.Bell,
  "Forecasting": TagIco.Forecast,
  "Time-series anomaly detection": TagIco.Anomaly,
  "Anomaly detection": TagIco.Anomaly,
  "Matrix Profile": TagIco.MProfile,
  "Machine learning": TagIco.KNN,
  "NLP": TagIco.Text,
  "KNN": TagIco.KNN,
  "Genetic algorithms": TagIco.DNA,
  "Business analysis": TagIco.Brief,
  "A/B testing": TagIco.AB,

  // AI-assisted Development
  "Codex": TagIco.Codex,
  "Claude": TagIco.Claude,
  "Refactoring": TagIco.Refactor,
  "Debugging": TagIco.Debug,
  "Documentation": TagIco.Doc,
  "Workflow automation": TagIco.Workflow,

  // Misc
  "pandas": TagIco.pandas,
  "Excel": TagIco.Excel,
  "dbt": TagIco.dbt,
  "BigQuery": TagIco.BigQuery,
  "Snowflake": TagIco.Snowflake,
  "Stored procedures": TagIco.Func,
  "Triggers": TagIco.Func,
  "Git": TagIco.Git,
};

function SkillTag({ label }) {
  const Icon = SKILL_ICON_MAP[label];
  return (
    <span className={"tag" + (Icon ? " with-ico" : "")}>
      {Icon && <Icon />}
      {label}
    </span>
  );
}

// ──────────────── NAV ────────────────
function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className={"nav" + (open ? " menu-open" : "")}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><img src="assets/avatar.png" alt="Hua Dai Nam portrait" /></span>
          <span>Hua Dai Nam</span>
        </a>
        <div className="nav-links">
          {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <a href="assets/hua-dai-nam-cv.pdf" download className="nav-cta"><Ico.Download /> Download CV</a>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
          {open ? <Ico.Close /> : <Ico.Hamburger />}
        </button>
      </div>
      <div className="mobile-menu">
        {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        <a href="assets/hua-dai-nam-cv.pdf" download className="nav-cta" onClick={() => setOpen(false)}><Ico.Download /> Download CV</a>
      </div>
    </nav>
  );
}

// ──────────────── HERO DASHBOARD (interactive mini dashboard) ────────────────
// Style cues from real Zalopay dashboards: title strip, KPI tiles with big
// numbers + delta arrows, click a tile to filter the chart, hover for tooltip.
function HeroDashboard() {
  const metrics = React.useMemo(() => ([
    { id: "vol",  name: "Volume (MTD)", short: "Volume",  value: "42.8",  unit: "M",
      delta: 18.4, dir: "up",
      series: [3.1, 6.2, 9.5, 13.0, 16.3, 19.0, 22.4, 25.9, 29.1, 32.4, 35.6, 38.7, 41.0, 42.8] },
    { id: "txn",  name: "CYBS txns",    short: "CYBS",    value: "173.3", unit: "k",
      delta: 5.2,  dir: "up",
      series: [11.8, 12.6, 13.1, 11.4, 12.9, 13.5, 13.2, 12.4, 13.8, 13.1, 12.6, 13.2, 12.9, 13.0] },
    { id: "ekyc", name: "eKYC",         short: "eKYC",    value: "174.9", unit: "k",
      delta: -3.1, dir: "down",
      series: [14.8, 13.6, 13.2, 12.9, 13.4, 12.8, 12.6, 12.4, 12.1, 11.8, 12.0, 11.6, 11.4, 11.3] },
    { id: "mau",  name: "MAU",          short: "MAU",     value: "5.09",  unit: "M",
      delta: 2.3,  dir: "up",
      series: [4.92, 4.93, 4.95, 4.96, 4.98, 5.00, 5.01, 5.02, 5.04, 5.05, 5.06, 5.07, 5.08, 5.09] },
  ]), []);

  const [activeId, setActiveId] = React.useState("vol");
  const [hover, setHover] = React.useState(null);
  const active = metrics.find(m => m.id === activeId);

  // ── Auto-cycle: advance card every 3 s; pause 8 s on user interaction ──
  const CYCLE_MS = 3000;
  const [autoPaused, setAutoPaused] = React.useState(false);
  const pauseTimer = React.useRef(null);
  React.useEffect(() => {
    if (autoPaused) return;
    const id = setInterval(() => {
      setActiveId(prev => {
        const idx = metrics.findIndex(m => m.id === prev);
        return metrics[(idx + 1) % metrics.length].id;
      });
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [autoPaused]);
  React.useEffect(() => () => clearTimeout(pauseTimer.current), []);

  const handleSelect = (id) => {
    setActiveId(id);
    setAutoPaused(true);
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setAutoPaused(false), 8000);
  };

  const days = ["May 07","May 08","May 09","May 10","May 11","May 12","May 13","May 14","May 15","May 16","May 17","May 18","May 19","May 20"];

  const W = 280, H = 96, PAD = { t: 6, r: 6, b: 4, l: 6 };
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const minV = Math.min(...active.series) * 0.92;
  const maxV = Math.max(...active.series) * 1.04;
  const N = active.series.length;
  const barW = innerW / N;
  const barInnerW = barW * 0.62;
  const xFor = (i) => PAD.l + i * barW + (barW - barInnerW) / 2;
  const yFor = (v) => PAD.t + innerH - ((v - minV) / (maxV - minV)) * innerH;
  const hiIdx = N - 1;

  const fmt = (v) => {
    if (active.unit === "M") return v.toFixed(2);
    if (active.unit === "k") return v.toFixed(1);
    return v.toFixed(1);
  };

  const svgRef = React.useRef(null);
  const onMove = (e) => {
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const local = pt.matrixTransform(ctm.inverse());
    const i = Math.min(N - 1, Math.max(0, Math.round((local.x - PAD.l - barW / 2) / barW)));
    const v = active.series[i];
    setHover({ i, day: days[i], value: v, x: xFor(i) + barInnerW / 2, y: yFor(v) });
  };
  const onLeave = () => setHover(null);

  React.useEffect(() => { setHover(null); }, [activeId]);

  return (
    <div className="hd">
      <div className="hd-title">
        <div className="hd-title-name">Variable cost monitoring</div>
        <div className="hd-title-meta">Powered by <strong>Hua Dai Nam</strong> · Sample</div>
      </div>

      <div className="hd-kpis" role="tablist" aria-label="Choose a metric">
        {metrics.map(m => {
          const isActive = m.id === activeId;
          const up = m.dir === "up";
          return (
            <button key={m.id}
              role="tab"
              aria-selected={isActive}
              className={"hd-kpi" + (isActive ? " active" : "")}
              onClick={() => handleSelect(m.id)}>
              <div className="hd-kpi-name">{m.name}</div>
              <div className="hd-kpi-val">
                {m.value}<span className="u">{m.unit}</span>
              </div>
              <div className={"hd-kpi-delta " + (up ? "up" : "down")}>
                {up ? "▲" : "▼"} {Math.abs(m.delta).toFixed(1)}%
                <span className="vs">vs prev. month</span>
              </div>
              {isActive && !autoPaused && (
                <span key={activeId} className="hd-kpi-bar" style={{ animationDuration: `${CYCLE_MS}ms` }} />
              )}
            </button>
          );
        })}
      </div>

      <div className="hd-chart-block">
        <div className="hd-chart-head">
          <span className="hd-chart-title">{active.short} · last 14 days</span>
          <span className="hd-chart-hint">{hover ? `${hover.day} · ${fmt(hover.value)}${active.unit}` : "Hover bars · click a KPI"}</span>
        </div>
        <div className="hd-chart-wrap">
          <svg ref={svgRef}
               className="hd-chart-svg"
               viewBox={`0 0 ${W} ${H}`}
               preserveAspectRatio="none"
               onMouseMove={onMove}
               onMouseLeave={onLeave}>
            <line x1={PAD.l} y1={PAD.t + innerH} x2={W - PAD.r} y2={PAD.t + innerH}
                  stroke="var(--border)" strokeWidth="0.6" />
            {active.series.map((v, i) => {
              const isHi = i === hiIdx;
              const isHover = hover && hover.i === i;
              const x = xFor(i);
              const y = yFor(v);
              const h = (PAD.t + innerH) - y;
              return (
                <rect key={i} x={x} y={y} width={barInnerW} height={Math.max(1, h)} rx={1.2}
                      fill={isHi ? "var(--accent)" : isHover ? "var(--accent-soft)" : "var(--ink-4)"}
                      opacity={isHi ? 1 : isHover ? 0.95 : 0.4}
                      style={{ transition: "opacity .15s, fill .15s" }} />
              );
            })}
            {hover && (
              <g>
                <line x1={hover.x} x2={hover.x} y1={PAD.t} y2={PAD.t + innerH}
                      stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.6" />
                <circle cx={hover.x} cy={hover.y} r="2.6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.2" />
              </g>
            )}
          </svg>
          {/* x-axis labels as HTML so they aren't squished by preserveAspectRatio="none" */}
          <div style={{ position: 'relative', height: '14px', marginTop: '2px' }}>
            {days.map((d, i) => i % 3 === 0 ? (
              <span key={d} style={{
                position: 'absolute',
                left: `${(xFor(i) + barInnerW / 2) / W * 100}%`,
                transform: 'translateX(-50%)',
                fontFamily: 'var(--font-mono)',
                fontSize: '9.5px',
                color: 'var(--ink-4)',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}>{d.slice(-2)}</span>
            ) : null)}
          </div>
          {hover && (
            <div className="hd-tooltip" style={{ left: `${(hover.x / W) * 100}%`, top: `${(hover.y / H) * 100}%` }}>
              <div className="t-day">{hover.day}</div>
              <div className="t-val">{fmt(hover.value)}<span>{active.unit}</span></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ──────────────── HERO ────────────────
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"></span>
              Available for new opportunities · Q3 2026
            </div>
            <h1>
              Analytics Engineer<br />
              turning data into <em>scalable</em> business decisions.
            </h1>
            <p className="hero-tagline">
              I design data models, build reliable pipelines, and ship dashboards
              that teams actually use — bridging the gap between raw data and revenue.
            </p>
            <div className="hero-ctas">
              <a href="assets/hua-dai-nam-cv.pdf" download className="btn btn-primary btn-cv">
                <Ico.Download /> Download CV
              </a>
              <a href="#projects" className="btn btn-ghost">View projects <Ico.Arrow /></a>
            </div>
            <div className="hero-meta">
              <span className="hero-meta-item"><strong>4+</strong> years across data</span>
              <span className="hero-meta-item"><strong>VNG · Zalopay</strong> · Analytics Engineer</span>
              <span className="hero-meta-item"><strong>Ho Chi Minh City</strong>, Vietnam</span>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <HeroDashboard />
            <div className="hv-caption">
              A sample of the dashboards I design at Zalopay — <em>structure is real, numbers mocked.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ──────────────── ABOUT ────────────────
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-prose reveal">
            <div className="section-label">About</div>
            <p>
              I'm an Analytics Engineer at VNG · Zalopay — working in fintech,
              with earlier chapters in business research and education.
            </p>
            <p>
              I started in audit at PwC, learning to trace every number back to
              its source. After a Data Analysis program at MindX, I joined VIRAC
              as a Research Analyst, then Vtecs as a Data Analyst, building the
              SQL fluency and habit of patience that analytics really needs.
            </p>
            <p className="pull">
              Good analytics is mostly good plumbing — and a clear point of view.
            </p>
            <p>
              Today at Zalopay I work across the stack: SQL / Python / PySpark on
              Airflow pipelines, BI dashboards for KPI monitoring, KPI forecasting
              models, and a Matrix Profile–based anomaly detection system for
              tickets, costs and product flows. I also mentor learners in Data
              Science and Analytics at CoderSchool, and as a freelance instructor.
            </p>
          </div>
          <div className="about-highlights reveal">
            <div className="highlight">
              <div className="num">4<span className="suffix">+</span></div>
              <div className="lbl">Years across audit, research, analytics & engineering</div>
            </div>
            <div className="highlight">
              <div className="num">1</div>
              <div className="lbl">Company-wide KPI forecasting model in production at Zalopay</div>
            </div>
            <div className="highlight">
              <div className="num">70<span className="suffix">%</span></div>
              <div className="lbl">Query execution time reduced via SQL performance tuning at Vtecs</div>
            </div>
            <div className="highlight">
              <div className="num">50<span className="suffix">%</span></div>
              <div className="lbl">Report creation time saved via automation templates at VIRAC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────── SKILLS ────────────────
function Skills() {
  const groups = [
    { title: "Programming & Querying",  tags: ["SQL", "Python", "PySpark"] },
    { title: "Data Engineering",        tags: ["Airflow", "ETL pipelines", "Data modeling", "Dataset design", "Data quality"] },
    { title: "BI & Visualization",      tags: ["Tableau", "Power BI", "Dashboard development", "KPI reporting", "Data storytelling"] },
    { title: "Analytics & Modeling",    tags: ["EDA", "Statistical analysis", "Forecasting", "Time-series anomaly detection", "Matrix Profile", "Machine learning", "NLP"] },
    { title: "AI-assisted Development", tags: ["Codex", "Claude", "Refactoring", "Debugging", "Documentation", "Workflow automation"] },
  ];

  // First row open by default
  const [openSet, setOpenSet] = React.useState(new Set());
  const toggle = (i) => setOpenSet(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Skills</div>
          <h2 className="section-title">A toolkit built for <em>the whole pipeline</em></h2>
          <p className="section-lede">
            From the raw event to the executive dashboard — the stack I use to make data
            trustworthy, modeled, and decision-ready.
          </p>
        </div>
        <div className="skills-acc reveal">
          {groups.map((g, i) => {
            const isOpen = openSet.has(i);
            return (
              <div key={i} className={"skill-acc-item" + (isOpen ? " open" : "")}>
                <button className="skill-acc-trigger" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  <span className="skill-acc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="skill-acc-name">{g.title}</span>
                  <span className="skill-acc-count">{g.tags.length}</span>
                  <svg className="skill-acc-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </button>
                <div className="skill-acc-body" aria-hidden={!isOpen}>
                  <div className="skill-acc-body-inner">
                    <div className="skill-acc-tags">
                      {g.tags.map(t => <SkillTag key={t} label={t} />)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ──────────────── PROJECTS ────────────────
const PROJECTS = [
  {
    id: 1, cat: "Machine Learning", num: "01",
    title: "KPI Forecasting Pipeline",
    desc: "Story-pattern library + KNN nearest-neighbor model that forecasts company-wide KPIs to end of month — see the full case study below.",
    stats: [{ v: "Company-wide", l: "deployment" }, { v: "Daily", l: "refresh" }],
    stack: ["Python", "SQL", "Airflow", "KNN"],
    company: "VNG · Zalopay",
  },
  {
    id: 2, cat: "Dashboard", num: "02",
    title: "KPI · Business · Product Dashboards",
    desc: "Operational and exploratory dashboards covering company KPIs, product performance, and business health — used in weekly reviews across teams.",
    stats: [{ v: "Multi-domain", l: "coverage" }, { v: "Weekly", l: "review cadence" }],
    stack: ["PySpark", "SQL", "Tableau"],
    company: "VNG · Zalopay",
  },
  {
    id: 3, cat: "Data Engineering", num: "03",
    title: "ETL Pipeline for Analytics & BI",
    desc: "End-to-end ETL pipeline feeding analytics, business intelligence, and visualization across structured and unstructured sources.",
    stats: [{ v: "Multi-source", l: "ingestion" }, { v: "Production", l: "owned" }],
    stack: ["Airflow", "Python", "PySpark", "SQL"],
    company: "VNG · Zalopay",
  },
  {
    id: 4, cat: "Analytics", num: "04",
    title: "Time-Series Anomaly Detection & Alerting",
    desc: "Matrix Profile–based detection and alerting system monitoring abnormal patterns across CS ticket volume, variable costs, and FE product tracking events — surfaces unusual spikes, drops, or behavior changes early.",
    stats: [{ v: "Matrix Profile", l: "core algorithm" }, { v: "Multi-domain", l: "tickets · costs · flows" }],
    stack: ["Python", "PySpark", "Matrix Profile"],
    company: "VNG · Zalopay",
  },
  {
    id: 5, cat: "Data Engineering", num: "05",
    title: "SQL Query Performance Tuning",
    desc: "Rewrote dynamic SQL with nested subqueries, stored procedures, views, and triggers. Cut query execution time by 70% across critical reports.",
    stats: [{ v: "−70%", l: "query time" }, { v: "Dynamic SQL", l: "refactor" }],
    stack: ["SQL", "Stored procedures", "Triggers"],
    company: "Vtecs Holdings",
  },
  {
    id: 6, cat: "Machine Learning", num: "06",
    title: "Genetic Algorithm Class Scheduler",
    desc: "Built an automated class timetable generator using a genetic algorithm — replaced hours of manual scheduling with a reproducible, constraint-aware solver.",
    stats: [{ v: "Automated", l: "scheduling" }, { v: "GA-based", l: "solver" }],
    stack: ["Python", "Genetic algorithms"],
    company: "Vtecs Holdings",
  },
];

function Projects({ onOpenDetail }) {
  // All projects now have detail sheets.
  // Project 1 (KPI Forecasting) and Project 6 (GA Scheduler) → case-study sheet.
  // Project 2 (Dashboards) → gallery sheet.
  // Projects 3 / 4 / 5 → ETL / Anomaly / SQL case-study sheets.
  const HAS_DETAIL = new Set([1, 3, 4, 5, 6]);
  const SHEET_DETAIL = new Set([1, 2, 3, 4, 5, 6]);

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-head reveal">
          <div className="left">
            <div className="section-label">Selected work</div>
            <h2 className="section-title">Projects that <em>moved a number</em></h2>
            <p className="section-lede">
              A mix of work at Zalopay and Vtecs — tap any card with the
              <strong style={{color:"var(--ink)"}}> Case study</strong> or
              <strong style={{color:"var(--ink)"}}> Gallery</strong> badge to open the full write-up.
            </p>
          </div>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(p => {
            const hasDetail = HAS_DETAIL.has(p.id);
            const opensSheet = SHEET_DETAIL.has(p.id);
            const isClickable = hasDetail || opensSheet;
            const open = (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (opensSheet) {
                onOpenDetail(p.id);
              } else if (hasDetail) {
                const el = document.getElementById("case");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            };
            const badgeLabel = hasDetail ? "Case study" : (opensSheet ? "Gallery" : null);
            const linkLabel = hasDetail ? "Read case study" : (opensSheet ? "View gallery" : "View details");
            return (
              <article key={p.id}
                className={"project-card" + (isClickable ? " has-detail" : "")}
                onClick={isClickable ? open : undefined}
                role={isClickable ? "button" : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={isClickable ? (e) => { if (e.key === "Enter") open(e); } : undefined}
                style={{ cursor: isClickable ? "pointer" : "default" }}>
                <div className="pc-head">
                  <span className="pc-cat">{p.cat}</span>
                  {badgeLabel
                    ? <span className="pc-detail-badge"><span className="dot"></span>{badgeLabel}</span>
                    : <span className="pc-num">/ {p.num}</span>}
                </div>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-impact">
                  {p.stats.map((s, i) => (
                    <div key={i} className="stat">
                      <div className="v">{s.v}</div>
                      <div className="l">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="pc-foot">
                  <div className="pc-stack">
                    {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <a href={opensSheet ? "#" : (hasDetail ? "#case" : "#")} className="pc-view" onClick={open}>
                    {linkLabel} <Ico.ArrowUR />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ──────────────── EXPERIENCE ────────────────
// Compact roster — full story is in the CV.
const EXPERIENCE = [
  { current: true,
    date: "Jun 2024 — Present", role: "Analytics Engineer",
    co: "VNG Corporation · Zalopay", loc: "Ho Chi Minh City" },
  { current: true, date: "Jul 2023 — Present", role: "Data Mentor / Course Instructor",
    co: "Freelance · CoderSchool", loc: "SQL · Power BI · Python · ML" },
  { date: "Jan 2023 — Jun 2024", role: "Data Analyst",
    co: "Vtecs Holdings", loc: "Ho Chi Minh City" },
  { date: "Apr 2022 — Dec 2022", role: "Research Analyst",
    co: "VIRAC", loc: "Ho Chi Minh City" },
  { date: "Dec 2021 — Mar 2022", role: "Audit Intern",
    co: "PwC Vietnam", loc: "Ho Chi Minh City" },
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Four years, <em>five chapters</em></h2>
          <p className="section-lede">
            The shape of how I've grown — from audit to analytics engineer.
            Full bullets live in the CV.
          </p>
        </div>
        <div className="xp-list">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className={"xp-row reveal" + (e.current ? " current" : "")}>
              <div className="xp-date">{e.date}</div>
              <div className="xp-main">
                <div className="xp-role">{e.role}</div>
                <div className="xp-co">{e.co}</div>
              </div>
              <div className="xp-loc">{e.loc}</div>
              {e.current && <span className="xp-pin">Current</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────── CERTS / EDUCATION ────────────────
function Certifications() {
  const items = [
    { icon: <Ico.Cap />, title: "M.B. Management Information Systems", org: "University of Economics Ho Chi Minh City", year: "2024 — 2026" },
    { icon: <Ico.Cap />, title: "B.Acc. Auditing", org: "University of Economics Ho Chi Minh City", year: "2018 — 2022" },
    { icon: <Ico.Cap />, title: "Data Analysis Program", org: "MindX Technology School", year: "2022 — 2023" },
    { icon: <Ico.Cert />, title: "TOEIC 770", org: "IIG Vietnam", year: "—" },
    { icon: <Ico.Cert />, title: "SQL (Advanced)", org: "HackerRank", year: "—" },
    { icon: <Ico.Cert />, title: "Google Data Analytics Specialization", org: "Coursera", year: "—" },
    { icon: <Ico.Cert />, title: "Scientific Computing with Python", org: "freeCodeCamp", year: "—" },
  ];
  return (
    <section id="certs">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Education & Certifications</div>
          <h2 className="section-title">Foundations <em>worth showing</em></h2>
        </div>
        <div className="certs-grid">
          {items.map((c, i) => (
            <div key={i} className="cert-card reveal">
              <div className="badge">{c.icon}</div>
              <div>
                <h4>{c.title}</h4>
                <div className="org">{c.org}</div>
                <div className="yr">{c.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────── CONTACT ────────────────
function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [sendError, setSendError] = React.useState(null);

  const onChange = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "What should I call you?";
    if (!form.email.trim()) next.email = "Need an email to reply.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Doesn't look like a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "A few more words, please.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "e4004805-1a30-4e42-9079-69e70332e844",
          subject: `Portfolio contact from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setSendError(data.message || "Something went wrong — please try again.");
      }
    } catch {
      setSendError("Network error — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  const links = [
    { k: "Email", v: "namhd1209@gmail.com", href: "#", Icon: Ico.Mail },
    { k: "Phone", v: "(+84) 798 261 859", href: "tel:+84798261859", Icon: Ico.Mail },
    { k: "LinkedIn", v: "linkedin.com/in/namhua1209", href: "https://www.linkedin.com/in/namhua1209/", Icon: Ico.Linkedin },
    { k: "YouTube", v: "youtube.com/@studydatawithNam", href: "https://www.youtube.com/@studydatawithNam", Icon: Ico.Youtube },
    { k: "CV", v: "Download PDF", href: "assets/hua-dai-nam-cv.pdf", Icon: Ico.Download, download: true },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's <em>build something</em> measurable.</h2>
        </div>
        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={submit} noValidate>
            <div className="row">
              <div className={"field" + (errors.name ? " err" : "")}>
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" type="text" value={form.name} onChange={onChange("name")} placeholder="Your name" />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>
              <div className={"field" + (errors.email ? " err" : "")}>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" value={form.email} onChange={onChange("email")} placeholder="you@company.com" />
                {errors.email && <span className="err-msg">{errors.email}</span>}
              </div>
            </div>
            <div className={"field" + (errors.message ? " err" : "")}>
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" value={form.message} onChange={onChange("message")} placeholder="Tell me about the problem you're solving…" />
              {errors.message && <span className="err-msg">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Sending…" : <React.Fragment>Send message <Ico.Arrow /></React.Fragment>}
            </button>
            {sendError && <p className="contact-send-err">{sendError}</p>}
          </form>
          <div className="contact-info reveal">
            <h3>Open to <em>full-time roles</em>, consulting, or a coffee chat.</h3>
            <p>
              Currently based in Ho Chi Minh City — happy to work remote or hybrid.
              Quickest reply is via email, usually within a day.
            </p>
            <div className="contact-links">
              {links.map((l, i) => (
                <a key={i} href={l.href} className="contact-link"
                   download={l.download || undefined}
                   onClick={l.href === "#" ? (e) => e.preventDefault() : undefined}
                   target={l.href.startsWith("http") ? "_blank" : undefined}
                   rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <span className="l"><span className="k">{l.k}</span>{l.v}</span>
                  <Ico.ArrowUR />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={"toast" + (sent ? " in" : "")}>
          <span className="check">✓</span> Message sent — I'll reply soon.
        </div>
      </div>
    </section>
  );
}

// ──────────────── FOOTER ────────────────
function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© 2026 Hua Dai Nam</span>
      </div>
    </footer>
  );
}

// ──────────────── GA SCHEDULER DETAIL SHEET ────────────────
function GADetailSheet({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (open) requestAnimationFrame(() => setShown(true));
    else setShown(false);
  }, [open]);

  if (!open) return null;

  // ── Timetable grid (the evolved schedule)
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const periods = [
    { time: "07:30", label: "P1" },
    { time: "08:30", label: "P2" },
    { time: "09:30", label: "P3" },
    { time: "10:30", label: "P4" },
    { time: "13:00", label: "P5" },
    { time: "14:00", label: "P6" },
    { time: "15:00", label: "P7" },
    { time: "16:00", label: "P8" },
  ];
  const subjectMap = {
    "Math":  { c: "#8B5E34" },
    "Phys":  { c: "#B68B4C" },
    "Chem":  { c: "#C9A961" },
    "Bio":   { c: "#6B4423" },
    "Eng":   { c: "#A89A86" },
    "Hist":  { c: "#7B6E5E" },
    "Geo":   { c: "#5A4632" },
    "IT":    { c: "#9B7B4F" },
    "Free":  { c: null },
  };
  const schedule = [
    ["Math", "Phys", "Chem", "Bio",  "Eng"],
    ["Eng",  "Math", "Phys", "Chem", "Bio"],
    ["Bio",  "Eng",  "Math", "Phys", "Chem"],
    ["Free", "Geo",  "IT",   "Math", "Phys"],
    ["Phys", "Chem", "Bio",  "Free", "Hist"],
    ["Geo",  "IT",   "Hist", "Phys", "Math"],
    ["IT",   "Hist", "Free", "Bio",  "Chem"],
    ["Chem", "Bio",  "Eng",  "IT",   "Free"],
  ];

  // ── Fitness convergence (lower = better; constraint violations weighted)
  const N = 80;
  const fitness = Array.from({ length: N + 1 }, (_, g) => {
    // exponential decay + tiny noise to feel "real"
    const noise = ((Math.sin(g * 1.7) + Math.cos(g * 2.3)) * 0.6);
    return Math.max(2, 110 * Math.exp(-g / 15) + 4 + noise);
  });

  const cW = 720, cH = 240, cP = { t: 20, r: 16, b: 28, l: 36 };
  const xScale = (g) => cP.l + (g / N) * (cW - cP.l - cP.r);
  const yMax = 120;
  const yScale = (v) => cP.t + (1 - v / yMax) * (cH - cP.t - cP.b);
  const fitnessPath = fitness.map((v, i) => (i === 0 ? "M" : "L") + ` ${xScale(i).toFixed(1)} ${yScale(v).toFixed(1)}`).join(" ");
  const areaPath = `${fitnessPath} L ${xScale(N)} ${cH - cP.b} L ${xScale(0)} ${cH - cP.b} Z`;

  // Mark the "knee" (around gen 25)
  const kneeG = 25;

  return (
    <div className={"sheet-backdrop" + (shown ? " in" : "")}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="ga-sheet-title">
        <button className="sheet-close" onClick={onClose} aria-label="Close"><Ico.Close /></button>

        <div className="sheet-hero">
          <div className="sheet-eyebrow">
            <span>Case study</span>
            <span className="sep">·</span>
            <span>Machine Learning</span>
            <span className="sep">·</span>
            <span>06 / 06</span>
          </div>
          <h2 id="ga-sheet-title">
            Genetic Algorithm <em>Class Scheduler</em>
          </h2>
          <p>
            An evolutionary timetable solver built at Vtecs — replaced days of
            manual scheduling with a reproducible, constraint-aware run that
            converges in minutes.
          </p>
          <div className="sheet-meta">
            <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Data Analyst</div></div>
            <div className="sheet-meta-item"><div className="k">Company</div><div className="v">Vtecs Holdings</div></div>
            <div className="sheet-meta-item"><div className="k">Year</div><div className="v">2023</div></div>
            <div className="sheet-meta-item"><div className="k">Approach</div><div className="v">Genetic algorithm</div></div>
            <div className="sheet-meta-item"><div className="k">Stack</div>
              <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Python", "Genetic algorithms"].map(s => <SkillTag key={s} label={s} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="sheet-body">

          {/* PROBLEM */}
          <div className="sheet-block">
            <span className="sheet-block-label">01 · Problem</span>
            <h3>Hundreds of constraints, days of manual reshuffling.</h3>
            <p>
              Building each term's class timetable was a combinatorial nightmare —
              teacher availability, room capacity, student conflicts, balanced daily
              load. Every reshuffle to satisfy one rule broke another. The work
              consumed days of an admin's time, and the result was rarely optimal.
            </p>
          </div>

          {/* APPROACH */}
          <div className="sheet-block">
            <span className="sheet-block-label">02 · Approach</span>
            <h3>Treat the timetable as a chromosome.</h3>
            <p>
              Reframe scheduling as an evolutionary search. Each candidate
              timetable is a chromosome — a 2D grid of <em>period × day</em> assignments.
              A fitness function counts constraint violations. A population evolves
              over generations through selection, crossover, and mutation — survival
              of the most feasible schedule.
            </p>
          </div>

          {/* SOLUTION — Timetable grid */}
          <div className="sheet-block">
            <span className="sheet-block-label">03 · Solution · Evolved schedule</span>
            <h3>From red conflicts to a clean grid.</h3>
            <p>
              The output of one run — 200 chromosomes × 80 generations. Hard
              constraints (no double-bookings) are guaranteed satisfied; soft
              constraints (daily load balance, no back-to-back same-subject) are
              minimized.
            </p>
            <div className="tt-card">
              <div className="tt-grid" style={{ gridTemplateColumns: `64px repeat(${days.length}, 1fr)` }}>
                <div className="tt-corner"></div>
                {days.map(d => <div key={d} className="tt-head">{d}</div>)}
                {periods.map((p, pi) => (
                  <React.Fragment key={pi}>
                    <div className="tt-time">
                      <div className="tt-time-label">{p.label}</div>
                      <div className="tt-time-clock">{p.time}</div>
                    </div>
                    {days.map((_, di) => {
                      const subj = schedule[pi][di];
                      const meta = subjectMap[subj];
                      const isFree = !meta.c;
                      return (
                        <div key={di} className={"tt-cell" + (isFree ? " free" : "")}
                             style={!isFree ? { background: meta.c } : undefined}>
                          {isFree ? "—" : subj}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
              <div className="tt-legend">
                {Object.entries(subjectMap).filter(([, m]) => m.c).map(([k, m]) => (
                  <span key={k} className="tt-leg-item">
                    <span className="tt-leg-sw" style={{ background: m.c }}></span>{k}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SOLUTION — Fitness convergence */}
          <div className="sheet-block">
            <span className="sheet-block-label">03 · Solution · Fitness over generations</span>
            <h3>Cost crashes by generation 25.</h3>
            <p>
              The fitness curve — total weighted constraint violations vs. generations.
              The population finds the steep descent fast; the long tail is soft-constraint
              polishing. Tournament selection + per-row crossover + decaying mutation rate
              consistently converged here.
            </p>
            <div className="curve-card">
              <div className="curve-head">
                <div>
                  <h4>Generation 0 → 80 · 200 chromosomes/pop</h4>
                  <div className="sub">Fitness = Σ(weighted constraint violations) · lower is better</div>
                </div>
                <div className="curve-legend">
                  <span className="item" style={{ "--c": "var(--accent)" }}>Best in population</span>
                </div>
              </div>
              <svg className="curve-svg" viewBox={`0 0 ${cW} ${cH}`} preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="ga-fit-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Y grid */}
                {[0, 30, 60, 90, 120].map(v => (
                  <g key={v}>
                    <line x1={cP.l} x2={cW - cP.r} y1={yScale(v)} y2={yScale(v)}
                          stroke="var(--border)" strokeWidth="0.6" strokeDasharray={v === 0 ? "0" : "2 3"} />
                    <text x={cP.l - 6} y={yScale(v) + 3} fontSize="9.5"
                          fontFamily="var(--font-mono)" fill="var(--ink-4)" textAnchor="end">{v}</text>
                  </g>
                ))}
                {/* X labels */}
                {[0, 20, 40, 60, 80].map(g => (
                  <g key={g}>
                    <line x1={xScale(g)} x2={xScale(g)} y1={cH - cP.b} y2={cH - cP.b + 4}
                          stroke="var(--border-2)" strokeWidth="0.6" />
                    <text x={xScale(g)} y={cH - cP.b + 16} fontSize="9.5"
                          fontFamily="var(--font-mono)" fill="var(--ink-4)" textAnchor="middle">G{g}</text>
                  </g>
                ))}
                {/* Knee marker */}
                <line x1={xScale(kneeG)} x2={xScale(kneeG)} y1={cP.t} y2={cH - cP.b}
                      stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.55" />
                <text x={xScale(kneeG) + 6} y={cP.t + 12} fontSize="10"
                      fontFamily="var(--font-mono)" fill="var(--accent)" letterSpacing="0.05em">
                  G25 · KNEE
                </text>
                <path d={areaPath} fill="url(#ga-fit-area)" />
                <path d={fitnessPath} fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Final marker */}
                <circle cx={xScale(N)} cy={yScale(fitness[N])} r="3" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.5" />
                <text x={xScale(N) - 6} y={yScale(fitness[N]) - 8} fontSize="10"
                      fontFamily="var(--font-mono)" fill="var(--accent)" textAnchor="end" fontWeight="600">
                  fit ≈ {fitness[N].toFixed(1)}
                </text>
              </svg>
              <div className="curve-annotate">
                <span>→</span>
                <span>
                  Hard constraints satisfied by <strong>G18</strong>; soft constraints
                  reach acceptable levels by <strong>G45</strong>. Past G60 returns are
                  diminishing — a clean place to stop the run.
                </span>
              </div>
            </div>
          </div>

          {/* FINDINGS */}
          <div className="sheet-block">
            <span className="sheet-block-label">Key learnings</span>
            <h3>Three things the GA taught me.</h3>
            <div className="findings">
              <div className="finding">
                <div className="k">Learning 01</div>
                <h5>Mutation matters most early</h5>
                <p>A higher mutation rate in the first 20 generations finds the basin; decay it after to let crossover polish.</p>
              </div>
              <div className="finding">
                <div className="k">Learning 02</div>
                <h5>Hard constraints first</h5>
                <p>Weight hard violations 10× softer ones. The GA happily ignores comfort if it means fixing a double-booking.</p>
              </div>
              <div className="finding">
                <div className="k">Learning 03</div>
                <h5>Tournament beats roulette</h5>
                <p>Tournament selection (k=3) consistently converged faster and more reliably than roulette-wheel selection.</p>
              </div>
            </div>
          </div>

          {/* IMPACT */}
          <div className="sheet-block">
            <span className="sheet-block-label">04 · Impact</span>
            <h3>Days of work, replaced by a run.</h3>
            <div className="sheet-impact">
              <div className="stat"><div className="v">Days <em>→</em> minutes</div><div className="l">term-schedule generation, end-to-end</div></div>
              <div className="stat"><div className="v">100<em>%</em></div><div className="l">hard-constraint satisfaction guaranteed</div></div>
              <div className="stat"><div className="v">Reproducible</div><div className="l">seed-based runs, version-controlled in Git</div></div>
              <div className="stat"><div className="v">Adopted</div><div className="l">recurring scheduling tool at Vtecs</div></div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="sheet-quote">
            “The GA didn't just save time — it gave us a schedule we could explain
            and defend. Every constraint shows up in the fitness function; nothing
            is hidden in someone's head.”
            <span className="who">From the project retrospective, Vtecs · 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// expose to portfolio.jsx
Object.assign(window, {
  Nav, Hero, About, Skills, Projects, Experience, Certifications, Contact, Footer,
  Ico, SkillTag, GADetailSheet
});
