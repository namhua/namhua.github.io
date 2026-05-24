// Three additional case-study sheets: ETL pipeline (03), Time-Series Anomaly
// Detection (04), SQL Query Performance Tuning (05). Same shell pattern as
// the GA / KPI sheets, with bespoke "Solution" visuals per project.

// ───────────────── Shared sheet shell ─────────────────
function useSheetShell(open, onClose) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  const [mounted, setMounted] = React.useState(false);
  const [shown,   setShown]   = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    } else if (mounted) {
      setShown(false);
      const t = setTimeout(() => setMounted(false), 260);
      return () => clearTimeout(t);
    }
  }, [open]);
  return { mounted, shown };
}

function SheetShell({ open, onClose, titleId, children }) {
  const { mounted, shown } = useSheetShell(open, onClose);
  if (!mounted) return null;
  return (
    <div className={"sheet-backdrop" + (shown ? " in" : "")}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button className="sheet-close" onClick={onClose} aria-label="Close"><Ico.Close /></button>
        {children}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════
// 03 · ETL Pipeline for Analytics & BI
// ═════════════════════════════════════════════════════

// ── Gear-path helper (used by Transform icon) ──
function etlGearPath(cx, cy, n, ri, ro) {
  const step = Math.PI / n;
  let d = "";
  for (let i = 0; i < 2 * n; i++) {
    const a = i * step - Math.PI / 2;
    const r = i % 2 === 0 ? ro : ri;
    d += (i === 0 ? "M" : "L") + (cx + r * Math.cos(a)).toFixed(2) + "," + (cy + r * Math.sin(a)).toFixed(2);
  }
  return d + "Z";
}

// ── Per-stage animated SVG icons ──
function EtlSvgSources() {
  return (
    <svg viewBox="0 0 38 22" fill="none" width="100%" height="22" style={{ overflow: "visible" }}>
      {/* Left DB — app logs (muted ink) */}
      <ellipse cx="7" cy="6" rx="5.5" ry="2" stroke="var(--ink-3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path d="M1.5 6v8M12.5 6v8" stroke="var(--ink-3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <ellipse cx="7" cy="14" rx="5.5" ry="2" stroke="var(--ink-3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <line x1="3" y1="10" x2="11" y2="10" stroke="var(--ink-3)" strokeWidth="0.7" opacity="0.45" vectorEffect="non-scaling-stroke" />

      {/* Center DB — Txn DB (accent, primary) */}
      <ellipse cx="19" cy="4" rx="6.5" ry="2.2" stroke="var(--accent)" strokeWidth="1.2" fill="color-mix(in srgb,var(--accent) 7%,transparent)" vectorEffect="non-scaling-stroke" />
      <path d="M12.5 4v13M25.5 4v13" stroke="var(--accent)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <ellipse cx="19" cy="17" rx="6.5" ry="2.2" stroke="var(--accent)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      {/* Animated data rows */}
      <line x1="14" y1="8.5"  x2="24" y2="8.5"  stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlSrcRow 2.2s ease-in-out 0s infinite" }} />
      <line x1="14" y1="11.5" x2="24" y2="11.5" stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlSrcRow 2.2s ease-in-out .55s infinite" }} />
      <line x1="14" y1="14.5" x2="24" y2="14.5" stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlSrcRow 2.2s ease-in-out 1.1s infinite" }} />

      {/* Right DB — 3rd-party APIs (gold) */}
      <ellipse cx="31" cy="6" rx="5.5" ry="2" stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <path d="M25.5 6v8M36.5 6v8" stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <ellipse cx="31" cy="14" rx="5.5" ry="2" stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <line x1="27" y1="10" x2="35" y2="10" stroke="var(--gold)" strokeWidth="0.7" opacity="0.45" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function EtlSvgIngest() {
  return (
    <svg viewBox="0 0 40 26" fill="none" width="100%" height="26" style={{ overflow: "visible" }}>
      {/* Three source nodes */}
      <circle cx="5" cy="7"  r="2.5" stroke="var(--ink-3)"  strokeWidth="1"   vectorEffect="non-scaling-stroke" />
      <circle cx="5" cy="13" r="2.5" stroke="var(--accent)" strokeWidth="1.2" fill="color-mix(in srgb,var(--accent) 10%,transparent)" vectorEffect="non-scaling-stroke" />
      <circle cx="5" cy="19" r="2.5" stroke="var(--gold)"   strokeWidth="1"   vectorEffect="non-scaling-stroke" />
      {/* Converging animated flow lines */}
      <line x1="7.5" y1="7"  x2="20" y2="13" stroke="var(--ink-3)"  strokeWidth="1"   strokeDasharray="4 2.5" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1s linear 0s infinite" }} />
      <line x1="7.5" y1="13" x2="20" y2="13" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="4 2.5" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1s linear .18s infinite" }} />
      <line x1="7.5" y1="19" x2="20" y2="13" stroke="var(--gold)"   strokeWidth="1"   strokeDasharray="4 2.5" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1s linear .36s infinite" }} />
      {/* Central collector node */}
      <circle cx="22" cy="13" r="4" stroke="var(--accent)" strokeWidth="1.3" fill="color-mix(in srgb,var(--accent) 15%,transparent)" vectorEffect="non-scaling-stroke" />
      {/* Output arrow */}
      <line x1="26" y1="13" x2="33" y2="13" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1.2s linear .1s infinite" }} />
      <polygon points="30.5,9.5 36.5,13 30.5,16.5" fill="var(--accent)" />
    </svg>
  );
}

function EtlSvgRaw() {
  return (
    <svg viewBox="0 0 36 30" fill="none" width="100%" height="30" style={{ overflow: "visible" }}>
      {/* File outline with folded corner */}
      <path d="M5 2H22L30 10V28H5Z" stroke="var(--accent)" strokeWidth="1.3" fill="color-mix(in srgb,var(--accent) 6%,transparent)" vectorEffect="non-scaling-stroke" />
      <path d="M22 2V10H30" stroke="var(--accent)" strokeWidth="1.3" fill="none" vectorEffect="non-scaling-stroke" />
      {/* Columnar dividers — Parquet = columnar format */}
      <line x1="13" y1="13" x2="13" y2="25" stroke="var(--ink-4)" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
      <line x1="19" y1="13" x2="19" y2="25" stroke="var(--ink-4)" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
      <line x1="25" y1="13" x2="25" y2="25" stroke="var(--ink-4)" strokeWidth="0.7" vectorEffect="non-scaling-stroke" />
      {/* Data rows pulsing in */}
      <line x1="7" y1="15" x2="28" y2="15" stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlPulseOp 2s ease-in-out 0s infinite" }} />
      <line x1="7" y1="18" x2="28" y2="18" stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlPulseOp 2s ease-in-out .35s infinite" }} />
      <line x1="7" y1="21" x2="28" y2="21" stroke="var(--accent)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlPulseOp 2s ease-in-out .7s infinite" }} />
      <line x1="7" y1="24" x2="28" y2="24" stroke="var(--gold)"   strokeWidth="0.9" vectorEffect="non-scaling-stroke" style={{ animation: "etlPulseOp 2s ease-in-out 1.05s infinite" }} />
      {/* Blinking write cursor */}
      <rect x="25.5" y="26.5" width="5.5" height="2.5" rx="1" fill="var(--accent)" style={{ animation: "etlSrcRow 1.2s ease-in-out infinite" }} />
    </svg>
  );
}

function EtlSvgTransform() {
  const gA = etlGearPath(13, 14, 8, 5.8, 8.8);
  const gB = etlGearPath(26, 14, 6, 4,   6);
  return (
    <svg viewBox="0 0 40 28" fill="none" width="100%" height="28" style={{ overflow: "visible" }}>
      {/* Large gear — rotates CW (transform-box: fill-box keeps origin at gear center regardless of SVG scale) */}
      <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "etlGearCW 8s linear infinite" }}>
        <path d={gA} stroke="var(--accent)" strokeWidth="1.2" fill="color-mix(in srgb,var(--accent) 8%,transparent)" vectorEffect="non-scaling-stroke" />
        <circle cx="13" cy="14" r="2.5" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </g>
      {/* Small gear — rotates CCW */}
      <g style={{ transformBox: "fill-box", transformOrigin: "center", animation: "etlGearCCW 5.3s linear infinite" }}>
        <path d={gB} stroke="var(--gold)" strokeWidth="1.1" fill="color-mix(in srgb,var(--gold) 10%,transparent)" vectorEffect="non-scaling-stroke" />
        <circle cx="26" cy="14" r="1.8" fill="var(--bg)" stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </g>
      {/* Data spark between gears */}
      <circle cx="19.5" cy="14" r="1.2" fill="var(--accent)" style={{ animation: "etlPulseOp 1.5s ease-in-out infinite" }} />
      {/* Stack labels */}
      <text x="36" y="8"  fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--ink-3)" textAnchor="middle">SQL</text>
      <text x="36" y="24" fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--ink-3)" textAnchor="middle">Spark</text>
    </svg>
  );
}

function EtlSvgMart() {
  const cx = 19, cy = 14, outerR = 11;
  const nodes = Array.from({ length: 5 }, (_, i) => {
    const a = (i * 72 - 90) * Math.PI / 180;
    return { x: +(cx + outerR * Math.cos(a)).toFixed(2), y: +(cy + outerR * Math.sin(a)).toFixed(2) };
  });
  return (
    <svg viewBox="0 0 38 28" fill="none" width="100%" height="28" style={{ overflow: "visible" }}>
      {/* Outer pulse ring */}
      <circle cx={cx} cy={cy} r="15" stroke="var(--accent)" strokeWidth="0.6" fill="none" vectorEffect="non-scaling-stroke" style={{ animation: "etlMartRing 2s ease-in-out infinite" }} />
      {/* Spokes — draw from center outward */}
      {nodes.map((n, i) => (
        <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y}
              stroke="var(--accent)" strokeWidth="1" vectorEffect="non-scaling-stroke"
              strokeDasharray="13" strokeDashoffset="13"
              style={{ animation: `etlMartSpoke 2.8s ease-out ${(i * 0.18).toFixed(2)}s infinite` }} />
      ))}
      {/* Outer dimension nodes */}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.8"
                fill="color-mix(in srgb,var(--gold) 20%,transparent)"
                stroke="var(--gold)" strokeWidth="1" vectorEffect="non-scaling-stroke"
                style={{ animation: `etlFanItem 2.8s ease-out ${(i * 0.18).toFixed(2)}s infinite` }} />
      ))}
      {/* Center fact table hub */}
      <circle cx={cx} cy={cy} r="5" fill="color-mix(in srgb,var(--accent) 15%,transparent)" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <circle cx={cx} cy={cy} r="2" fill="var(--accent)" />
    </svg>
  );
}

function EtlSvgConsumers() {
  return (
    <svg viewBox="0 0 42 28" fill="none" width="100%" height="28" style={{ overflow: "visible" }}>
      {/* Input node */}
      <circle cx="5" cy="14" r="3.5" stroke="var(--accent)" strokeWidth="1.3" fill="color-mix(in srgb,var(--accent) 12%,transparent)" vectorEffect="non-scaling-stroke" />
      <circle cx="5" cy="14" r="1.2" fill="var(--accent)" />
      {/* Fan lines */}
      <line x1="8.5" y1="14" x2="15" y2="6.5"  stroke="var(--ink-3)"  strokeWidth="1"   strokeDasharray="3 2" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1.2s linear 0s infinite" }} />
      <line x1="8.5" y1="14" x2="15" y2="14"   stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="3 2" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1.2s linear .25s infinite" }} />
      <line x1="8.5" y1="14" x2="15" y2="21.5" stroke="var(--gold)"   strokeWidth="1"   strokeDasharray="3 2" vectorEffect="non-scaling-stroke" style={{ animation: "etlFlowDash 1.2s linear .5s infinite" }} />

      {/* Consumer 1 — BI Dashboard (bar chart) */}
      <g style={{ animation: "etlFanItem 2s ease-out 0s infinite" }}>
        <rect x="15" y="2" width="12" height="9.5" rx="1.5" stroke="var(--ink-2)" strokeWidth="1" fill="color-mix(in srgb,var(--ink-2) 5%,transparent)" vectorEffect="non-scaling-stroke" />
        <rect x="17" y="8"   width="2" height="2.5" rx=".3" fill="var(--ink-2)" opacity="0.55" />
        <rect x="20" y="6.5" width="2" height="4"   rx=".3" fill="var(--ink-2)" opacity="0.75" />
        <rect x="23" y="5"   width="2" height="5.5" rx=".3" fill="var(--ink-2)" opacity="0.9"  />
      </g>

      {/* Consumer 2 — ML Features (mini neural graph) */}
      <g style={{ animation: "etlFanItem 2s ease-out .25s infinite" }}>
        <rect x="15" y="9.5" width="12" height="9" rx="1.5" stroke="var(--accent)" strokeWidth="1.2" fill="color-mix(in srgb,var(--accent) 6%,transparent)" vectorEffect="non-scaling-stroke" />
        <circle cx="18"  cy="12.25" r="1.1" fill="var(--accent)" opacity="0.5" />
        <circle cx="18"  cy="15.75" r="1.1" fill="var(--accent)" opacity="0.5" />
        <circle cx="21.5" cy="14"   r="1.1" fill="var(--accent)" opacity="0.75" />
        <circle cx="25"   cy="14"   r="1.4" fill="var(--accent)" />
        <line x1="19.1" y1="12.25" x2="20.4" y2="13.7"  stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" vectorEffect="non-scaling-stroke" />
        <line x1="19.1" y1="15.75" x2="20.4" y2="14.3"  stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" vectorEffect="non-scaling-stroke" />
        <line x1="22.6" y1="14"    x2="23.6" y2="14"    stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Consumer 3 — Ad-hoc queries (magnifier) */}
      <g style={{ animation: "etlFanItem 2s ease-out .5s infinite" }}>
        <rect x="15" y="17" width="12" height="9.5" rx="1.5" stroke="var(--gold)" strokeWidth="1" fill="color-mix(in srgb,var(--gold) 6%,transparent)" vectorEffect="non-scaling-stroke" />
        <circle cx="22" cy="21" r="3" stroke="var(--gold)" strokeWidth="1.1" fill="none" vectorEffect="non-scaling-stroke" />
        <line x1="19.9" y1="23.1" x2="18" y2="25" stroke="var(--gold)" strokeWidth="1.3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </g>

      {/* Micro legend */}
      <text x="21" y="28" fontSize="4.5" fontFamily="var(--font-mono)" fill="var(--ink-4)" textAnchor="middle">BI · ML · SQL</text>
    </svg>
  );
}

function ETLPipelineDiagram() {
  const stages = [
    { k: "Sources",   sub: "Txn DB · App logs · 3rd-party APIs",   Icon: EtlSvgSources   },
    { k: "Ingest",    sub: "Airflow + Kafka pull",                  Icon: EtlSvgIngest    },
    { k: "Raw",       sub: "Parquet on object store",               Icon: EtlSvgRaw       },
    { k: "Transform", sub: "PySpark + SQL models",                  Icon: EtlSvgTransform },
    { k: "Mart",      sub: "Modeled tables · slowly-changing dims", Icon: EtlSvgMart      },
    { k: "Consumers", sub: "BI dashboards · ML features · Ad-hoc", Icon: EtlSvgConsumers },
  ];
  return (
    <div className="etl-pipe">
      {stages.map((s, idx) => (
        <React.Fragment key={s.k}>
          <div className="etl-stage">
            <div className="etl-stage-icon"><s.Icon /></div>
            <div className="etl-stage-name">{s.k}</div>
            <div className="etl-stage-sub">{s.sub}</div>
          </div>
          {idx < stages.length - 1 && (
            <div className="etl-conn" aria-hidden="true">
              <svg viewBox="0 0 40 12" preserveAspectRatio="none">
                <line x1="0" y1="6" x2="40" y2="6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
              </svg>
              <span className="etl-dot" style={{ animationDelay: `${idx * 0.6}s` }}></span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function ETLDetailSheet({ open, onClose }) {
  return (
    <SheetShell open={open} onClose={onClose} titleId="etl-sheet-title">
      <div className="sheet-hero">
        <div className="sheet-eyebrow">
          <span>Case study</span>
          <span className="sep">·</span>
          <span>Data engineering</span>
          <span className="sep">·</span>
          <span>03 / 06</span>
        </div>
        <h2 id="etl-sheet-title">
          End-to-end <em>ETL pipeline</em> for analytics & BI
        </h2>
        <p>
          A daily pipeline that ingests structured and unstructured payment data,
          shapes it into a modeled warehouse layer, and serves every dashboard,
          experiment, and downstream model from a single source of truth.
        </p>
        <div className="sheet-meta">
          <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Analytics Engineer</div></div>
          <div className="sheet-meta-item"><div className="k">Company</div><div className="v">VNG · Zalopay</div></div>
          <div className="sheet-meta-item"><div className="k">Cadence</div><div className="v">Daily refresh, idempotent</div></div>
          <div className="sheet-meta-item"><div className="k">Owners</div><div className="v">Analytics Eng · DS</div></div>
          <div className="sheet-meta-item"><div className="k">Stack</div>
            <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Airflow", "PySpark", "SQL"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className="sheet-body">
        <div className="sheet-block">
          <span className="sheet-block-label">01 · Problem</span>
          <h3>Every team built its own extract — and none of them agreed.</h3>
          <p>
            BI dashboards pulled from one snapshot, the DS team ran their own
            joins against the raw tables, and finance kept a parallel spreadsheet
            chain. Numbers diverged by Friday, lineage was a tribal-knowledge
            problem, and any backfill meant re-running half-a-dozen brittle
            scripts by hand. We needed one pipeline, declarative and idempotent,
            that every consumer could trust.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">02 · Approach</span>
          <h3>Raw → modeled → mart, every step idempotent.</h3>
          <p>
            Sources are pulled into a raw landing zone (no transforms — just a
            faithful copy of the source). PySpark + SQL models reshape raw
            into a tidy modeled layer with conformed dimensions. Marts publish
            the slices each consumer needs. Every task is keyed and re-runnable
            so a backfill is a parameter, not a rebuild.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">03 · Solution · The pipeline</span>
          <h3>Six layers, one daily DAG.</h3>
          <p>
            Airflow orchestrates the DAG; PySpark handles heavy joins on the
            raw → modeled hop; SQL models live in version control next to the
            dashboards that consume them.
          </p>
          <ETLPipelineDiagram />
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">Key learnings</span>
          <h3>Three habits the pipeline forced on us.</h3>
          <div className="findings">
            <div className="finding">
              <div className="num">01</div>
              <div className="ft">Idempotent or it doesn't ship.</div>
              <div className="fp">Every task takes a date partition and replaces, never appends. Backfills become trivial; failed runs are safe to retry.</div>
            </div>
            <div className="finding">
              <div className="num">02</div>
              <div className="ft">Raw is sacred.</div>
              <div className="fp">No transforms in the landing zone. If we get a question we didn't anticipate, we can always replay history from raw.</div>
            </div>
            <div className="finding">
              <div className="num">03</div>
              <div className="ft">Models live with dashboards.</div>
              <div className="fp">SQL models sit next to the BI artefacts that consume them in version control. A breaking change is reviewable before it ships.</div>
            </div>
          </div>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">04 · Impact</span>
          <h3>One pipeline, every consumer.</h3>
          <div className="sheet-impact">
            <div className="stat"><div className="v">100<em>+</em></div><div className="l">modeled tables published daily to the mart</div></div>
            <div className="stat"><div className="v">Daily</div><div className="l">refresh — idempotent backfills with one parameter</div></div>
            <div className="stat"><div className="v">1<em> source</em></div><div className="l">of truth — BI, DS, finance read from the same mart</div></div>
            <div className="stat"><div className="v">Spark <em>+</em> SQL</div><div className="l">heavy joins in Spark, business logic in SQL</div></div>
          </div>
        </div>

        <div className="sheet-quote">
          “The day finance, BI and DS started disagreeing about pipeline runs
          instead of numbers was the day the pipeline had done its job.”
          <span className="who">— principle behind the rebuild</span>
        </div>
      </div>
    </SheetShell>
  );
}

// ═════════════════════════════════════════════════════
// 04 · Time-Series Anomaly Detection & Alerting
// ═════════════════════════════════════════════════════
function AnomalyChart() {
  // 3 anomalies across the series; callouts appear as TOOLTIPS only on hover.
  const W = 640, H = 130, MH = 70;
  const N = 80;
  const signal = Array.from({ length: N }, (_, i) => {
    const base = 60 + Math.sin(i / 5) * 12 + Math.sin(i / 13) * 6;
    let n = base;
    if (i === 22) n += 38;
    if (i === 23) n += 22;
    if (i === 47) n -= 30;
    if (i === 48) n -= 38;
    if (i === 49) n -= 18;
    if (i === 65) n += 28;
    if (i === 66) n += 42;
    return n;
  });
  const minS = Math.min(...signal) - 5;
  const maxS = Math.max(...signal) + 5;
  const xFor = (i) => (i / (N - 1)) * W;
  const yFor = (v) => H - ((v - minS) / (maxS - minS)) * H;
  const signalPath = signal.map((v, i) => `${i ? "L" : "M"}${xFor(i).toFixed(1)} ${yFor(v).toFixed(1)}`).join(" ");

  const mp = Array.from({ length: N }, (_, i) => {
    let v = 0.18 + Math.abs(Math.sin(i / 7) * 0.06);
    const peaks = [22, 48, 66];
    for (const p of peaks) {
      const d = Math.abs(i - p);
      if (d <= 4) v += (1 - d / 4) * 0.7;
    }
    return v;
  });
  const minM = 0, maxM = Math.max(...mp);
  const yForM = (v) => MH - ((v - minM) / (maxM - minM)) * MH * 0.92;
  const mpPath = mp.map((v, i) => `${i ? "L" : "M"}${xFor(i).toFixed(1)} ${yForM(v).toFixed(1)}`).join(" ");
  const threshold = 0.55;
  const thresholdY = yForM(threshold);

  // Anomaly metadata
  const anomalies = [
    { i: 22, kind: "Sudden spike", actual: 92,  baseline: 55, pct:  67.3, z:  6.2 },
    { i: 48, kind: "Unusual drop", actual: 17,  baseline: 55, pct: -69.1, z: -5.8 },
    { i: 66, kind: "Sharp spike",  actual: 104, baseline: 62, pct:  67.7, z:  6.5 },
  ];

  const [hovered, setHovered] = React.useState(null);
  const active = hovered != null ? anomalies.find(a => a.i === hovered) : null;

  return (
    <div className="anom-chart">
      <div className="anom-row">
        <div className="anom-label">
          <div className="k">Signal</div>
          <div className="sub">CS tickets · 7d window — <em>hover a marker</em></div>
        </div>
        <div className="anom-svg">
          <div className="anom-svg-wrap" style={{ height: "140px" }}>
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
              <path d={signalPath} fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round"/>
              {anomalies.map(a => {
                const cx = xFor(a.i);
                const isActive = hovered === a.i;
                return (
                  <line key={a.i} x1={cx} x2={cx} y1={0} y2={H}
                        stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="2 3"
                        opacity={isActive ? 0.65 : 0.28}/>
                );
              })}
            </svg>
            {/* tooltip — positioned near the active anomaly */}
            {active && (() => {
              const pointXPct = (xFor(active.i) / W) * 100;
              const pointYPct = (yFor(signal[active.i]) / H) * 100;
              const placeAbove = pointYPct > 50; // if point is in lower half, show above
              const placeLeft  = pointXPct > 60; // if point is on right side, anchor right
              return (
                <div className={"anom-tooltip" + (placeAbove ? " above" : " below") + (placeLeft ? " right" : " left")}
                     style={{
                       left: `${pointXPct}%`,
                       top:  `${pointYPct}%`,
                     }}>
                  <div className="anom-tooltip-t">{active.kind}</div>
                  <div className="anom-tooltip-s">t={active.i} · actual <strong>{active.actual}</strong> · baseline {active.baseline}</div>
                  <div className="anom-tooltip-s">{active.pct > 0 ? "+" : ""}{active.pct.toFixed(1)}% · z={active.z > 0 ? "+" : ""}{active.z.toFixed(1)}</div>
                </div>
              );
            })()}
            {/* HTML overlay markers — perfectly round at every viewport (SVG circles distort under preserveAspectRatio=none) */}
            {anomalies.map(a => {
              const pointXPct = (xFor(a.i) / W) * 100;
              const pointYPct = (yFor(signal[a.i]) / H) * 100;
              return (
                <button key={a.i}
                  type="button"
                  className={"anom-marker" + (hovered === a.i ? " active" : "")}
                  style={{ left: `${pointXPct}%`, top: `${pointYPct}%` }}
                  onMouseEnter={() => setHovered(a.i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(a.i)}
                  onBlur={() => setHovered(null)}
                  aria-label={`${a.kind} at t=${a.i}: actual ${a.actual}, baseline ${a.baseline}`}/>
              );
            })}
          </div>
        </div>
      </div>
      <div className="anom-row">
        <div className="anom-label">
          <div className="k">Matrix Profile</div>
          <div className="sub">Distance to nearest pattern</div>
        </div>
        <div className="anom-svg short">
          <svg viewBox={`0 0 ${W} ${MH}`} preserveAspectRatio="none">
            <line x1={0} x2={W} y1={thresholdY} y2={thresholdY} stroke="var(--positive)" strokeWidth="0.6" strokeDasharray="3 3"/>
            <path d={`${mpPath} L${W} ${MH} L0 ${MH} Z`} fill="var(--accent)" opacity="0.08"/>
            <path d={mpPath} fill="none" stroke="var(--ink-2)" strokeWidth="1" strokeLinejoin="round"/>
            {anomalies.map(a => (
              <circle key={a.i} cx={xFor(a.i)} cy={yForM(mp[a.i])} r={hovered === a.i ? 4 : 3} fill="var(--accent)"
                      style={{ transition: "r .15s" }}/>
            ))}
            <text x={W - 4} y={thresholdY - 4} textAnchor="end" fontSize="9" fontFamily="var(--font-mono)" fill="var(--positive)">threshold</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnomalyDetailSheet({ open, onClose }) {
  const domains = [
    { k: "CS tickets",          v: "Daily volume by channel & queue", scale: "Hourly" },
    { k: "Variable costs",      v: "Per-product unit-cost drift",     scale: "Daily" },
    { k: "Product tracking",    v: "FE funnel events per screen",     scale: "Hourly" },
  ];
  return (
    <SheetShell open={open} onClose={onClose} titleId="anom-sheet-title">
      <div className="sheet-hero">
        <div className="sheet-eyebrow">
          <span>Case study</span>
          <span className="sep">·</span>
          <span>Analytics</span>
          <span className="sep">·</span>
          <span>04 / 06</span>
        </div>
        <h2 id="anom-sheet-title">
          <em>Matrix Profile</em> anomaly detection & alerting
        </h2>
        <p>
          A threshold-free way to catch unusual spikes, drops, and pattern
          shifts across customer-support tickets, per-product variable costs,
          and front-end tracking events — built on the Matrix Profile algorithm
          so operators don't have to hand-tune limits per series.
        </p>
        <div className="sheet-meta">
          <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Analytics Engineer</div></div>
          <div className="sheet-meta-item"><div className="k">Company</div><div className="v">VNG · Zalopay</div></div>
          <div className="sheet-meta-item"><div className="k">Year</div><div className="v">2026</div></div>
          <div className="sheet-meta-item"><div className="k">Approach</div><div className="v">Matrix Profile (stumpy)</div></div>
          <div className="sheet-meta-item"><div className="k">Stack</div>
            <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["Python", "PySpark", "Matrix Profile"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="sheet-body">
        <div className="sheet-block">
          <span className="sheet-block-label">01 · Problem</span>
          <h3>Per-series thresholds rot. Fast.</h3>
          <p>
            Every series we wanted to monitor — CS ticket volume, per-product
            costs, FE funnel events — had a different shape, a different
            seasonality, and a different definition of "weird." Hand-tuned
            <code>{" if value > X "}</code>thresholds drifted within weeks; they fired on every
            small holiday and went silent during a campaign. The team spent
            more time muting alerts than acting on them.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">02 · Approach</span>
          <h3>Let the series compare itself to itself.</h3>
          <p>
            Matrix Profile computes, for every short window in a time-series,
            the distance to its nearest non-overlapping match anywhere else in
            the same series. A normal window has a close neighbour (low
            distance); an anomalous window doesn't (high distance). One
            threshold over the profile catches all three anomaly types — spike,
            drop, and pattern shift — without per-series tuning.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">03 · Solution · How it looks in practice</span>
          <h3>Top — the signal. Bottom — its self-similarity.</h3>
          <p>
            Three real anomalies fired this week. In the signal (top) you can
            spot them as sharp deviations; in the Matrix Profile (bottom) they
            break above a single, series-agnostic threshold — the basis for the
            alert. Hover any marker to see the detection metadata.
          </p>
          <AnomalyChart />
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">04 · Coverage</span>
          <h3>Three families of signals, one detector.</h3>
          <div className="anom-domains">
            {domains.map(d => (
              <div key={d.k} className="anom-domain">
                <div className="anom-domain-k">{d.k}</div>
                <div className="anom-domain-v">{d.v}</div>
                <div className="anom-domain-s">{d.scale}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">Key learnings</span>
          <h3>Three things the algorithm taught us.</h3>
          <div className="findings">
            <div className="finding">
              <div className="num">01</div>
              <div className="ft">Self-similarity is cheaper than thresholds.</div>
              <div className="fp">One profile per series, one global threshold — no per-series tuning, no drift.</div>
            </div>
            <div className="finding">
              <div className="num">02</div>
              <div className="ft">Catches shape, not just magnitude.</div>
              <div className="fp">A "normal-sized" volume on the wrong day of week shows up as anomalous because its shape has no neighbour.</div>
            </div>
            <div className="finding">
              <div className="num">03</div>
              <div className="ft">The chart is the explanation.</div>
              <div className="fp">When the model fires, the Matrix Profile alongside the signal makes "why now?" obvious to a non-expert.</div>
            </div>
          </div>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">05 · Impact</span>
          <h3>Fewer mutes, faster eyes-on.</h3>
          <div className="sheet-impact">
            <div className="stat"><div className="v">3 domains</div><div className="l">CS tickets · variable costs · FE tracking</div></div>
            <div className="stat"><div className="v">No tuning</div><div className="l">one threshold across heterogeneous series</div></div>
            <div className="stat"><div className="v">Hourly</div><div className="l">refresh cadence on PySpark</div></div>
            <div className="stat"><div className="v">Spike <em>· </em>drop <em>· </em>shift</div><div className="l">three anomaly families, one detector</div></div>
          </div>
        </div>

        <div className="sheet-quote">
          “The win isn't the algorithm — it's that no-one has to babysit a
          spreadsheet of thresholds any more.”
          <span className="who">— design principle for the detector</span>
        </div>
      </div>
    </SheetShell>
  );
}

// ═════════════════════════════════════════════════════
// 05 · SQL Query Performance Tuning
// ═════════════════════════════════════════════════════
function SQLBeforeAfter() {
  // Five queries, old vs new time in seconds. Sorted by improvement %.
  const rows = [
    { q: "Monthly merchant settlement", old: 142, neu: 38 },
    { q: "Risk-tier user roll-up",      old: 96,  neu: 22 },
    { q: "Daily TPV by sub-cat",        old: 68,  neu: 21 },
    { q: "Failed-txn cohort join",      old: 54,  neu: 14 },
    { q: "Hourly card-auth pivot",       old: 31,  neu: 11 },
  ];
  const max = Math.max(...rows.map(r => r.old));
  return (
    <div className="sql-bars">
      <div className="sql-bars-head">
        <span className="sql-bars-l">Query</span>
        <span className="sql-bars-r"><span className="sw old"></span> Before <span className="sw new"></span> After</span>
      </div>
      {rows.map(r => {
        const pct = Math.round((1 - r.neu / r.old) * 100);
        return (
          <div key={r.q} className="sql-row">
            <div className="sql-row-q">{r.q}</div>
            <div className="sql-row-bars">
              <div className="sql-bar old" style={{ width: `${(r.old / max) * 100}%` }}>
                <span>{r.old}s</span>
              </div>
              <div className="sql-bar new" style={{ width: `${(r.neu / max) * 100}%` }}>
                <span>{r.neu}s</span>
              </div>
            </div>
            <div className="sql-row-pct">−{pct}%</div>
          </div>
        );
      })}
    </div>
  );
}

function SQLCodeSample() {
  return (
    <div className="sql-code">
      <div className="sql-code-side">
        <div className="sql-code-h">Before — nested ad-hoc subqueries</div>
        <pre>{`SELECT t.merchant_id,
       SUM(t.amount) AS tpv
FROM (
  SELECT merchant_id, amount, txn_date
  FROM raw_txn
  WHERE txn_date BETWEEN
    (SELECT MIN(txn_date) FROM raw_txn
     WHERE month = @m)
    AND
    (SELECT MAX(txn_date) FROM raw_txn
     WHERE month = @m)
    AND status IN (
      SELECT code FROM ref_status
      WHERE is_settled = 1
    )
) t
JOIN (
  SELECT merchant_id, tier
  FROM v_merchant_active
) m ON m.merchant_id = t.merchant_id
GROUP BY t.merchant_id;`}</pre>
      </div>
      <div className="sql-code-side">
        <div className="sql-code-h">After — view + indexed stored proc</div>
        <pre>{`-- view encapsulates the joins
CREATE VIEW vw_settled_txn AS
SELECT t.txn_date, t.merchant_id,
       t.amount, m.tier
FROM raw_txn t
JOIN v_merchant_active m
  ON m.merchant_id = t.merchant_id
WHERE t.status IN (
  SELECT code FROM ref_status
  WHERE is_settled = 1
);

-- stored proc takes a month parameter
CREATE PROC sp_monthly_tpv @m DATE AS
SELECT merchant_id, SUM(amount) AS tpv
FROM vw_settled_txn
WHERE txn_date >= DATEFROMPARTS(
        YEAR(@m), MONTH(@m), 1)
  AND txn_date <  DATEADD(MONTH, 1,
        DATEFROMPARTS(
          YEAR(@m), MONTH(@m), 1))
GROUP BY merchant_id;`}</pre>
      </div>
    </div>
  );
}

function SQLDetailSheet({ open, onClose }) {
  const techniques = [
    { k: "Rewrite",         v: "Flattened nested subqueries; pushed predicates earlier in the plan." },
    { k: "Stored procs",    v: "Parameterized hot reports — plan re-use across runs." },
    { k: "Views",           v: "Encapsulated joins behind views so report SQL stayed thin." },
    { k: "Triggers",        v: "Maintained materialized aggregates on write so reads stayed cheap." },
    { k: "Index review",    v: "Added covering indexes to remove key lookups on the hottest joins." },
  ];
  return (
    <SheetShell open={open} onClose={onClose} titleId="sql-sheet-title">
      <div className="sheet-hero">
        <div className="sheet-eyebrow">
          <span>Case study</span>
          <span className="sep">·</span>
          <span>Data engineering</span>
          <span className="sep">·</span>
          <span>05 / 06</span>
        </div>
        <h2 id="sql-sheet-title">
          SQL query <em>performance tuning</em>
        </h2>
        <p>
          Replaced ad-hoc dynamic SQL and deeply-nested subqueries with views,
          stored procedures, triggers, and a tightened index strategy —
          cutting execution time by ~70% across the company's critical
          reporting workloads.
        </p>
        <div className="sheet-meta">
          <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Data Analyst</div></div>
          <div className="sheet-meta-item"><div className="k">Company</div><div className="v">Vtecs Holdings</div></div>
          <div className="sheet-meta-item"><div className="k">Year</div><div className="v">2023 — 2024</div></div>
          <div className="sheet-meta-item"><div className="k">Engine</div><div className="v">SQL Server</div></div>
          <div className="sheet-meta-item"><div className="k">Stack</div>
            <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {["SQL", "Stored procedures", "Triggers"].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="sheet-body">
        <div className="sheet-block">
          <span className="sheet-block-label">01 · Problem</span>
          <h3>Reports ran for minutes. People stopped opening them.</h3>
          <p>
            Critical reports were stitched together as long, dynamic SQL
            strings, each with nested subqueries that re-scanned the same
            tables and forced fresh plan compilation on every run. A monthly
            settlement report took over two minutes; an hourly pivot was
            unusable inside a meeting. The work-around was a spreadsheet,
            which started everyone's day in a different version of the truth.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">02 · Approach</span>
          <h3>Stop generating SQL — encapsulate it.</h3>
          <p>
            Move joins into views so report SQL stays thin and readable. Move
            hot reports into parameterized stored procedures so the engine
            reuses the plan. Maintain expensive aggregates with triggers on
            write rather than recomputing them on every read. Review indexes
            so the hottest joins go index-only.
          </p>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">03 · Solution · Before vs after</span>
          <h3>Same numbers, in a fraction of the time.</h3>
          <p>
            Five critical reports, timed end-to-end against the same data
            volume before and after the rewrite.
          </p>
          <SQLBeforeAfter />
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">03 · Solution · The rewrite</span>
          <h3>From nested subqueries to a thin proc on top of a view.</h3>
          <p>
            One representative report — monthly TPV by merchant. The
            before-shape re-scans <code>raw_txn</code> three times for the
            window bounds and status filter; the after-shape pushes both into
            a reusable view and lets the proc plan cache.
          </p>
          <SQLCodeSample />
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">04 · Techniques</span>
          <h3>Five levers, applied where each made sense.</h3>
          <div className="sql-techs">
            {techniques.map(t => (
              <div key={t.k} className="sql-tech">
                <div className="sql-tech-k">{t.k}</div>
                <div className="sql-tech-v">{t.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sheet-block">
          <span className="sheet-block-label">05 · Impact</span>
          <h3>Reports people open inside a meeting again.</h3>
          <div className="sheet-impact">
            <div className="stat"><div className="v">−70<em>%</em></div><div className="l">average execution time across the 5 critical reports</div></div>
            <div className="stat"><div className="v">142s <em>→</em> 38s</div><div className="l">monthly settlement report — the heaviest of the five</div></div>
            <div className="stat"><div className="v">Plan-cached</div><div className="l">stored procs let the engine re-use plans across runs</div></div>
            <div className="stat"><div className="v">Trigger-fed</div><div className="l">aggregates maintained on write so reads stay cheap</div></div>
          </div>
        </div>

        <div className="sheet-quote">
          “The trick wasn't a clever query — it was deciding what to encapsulate
          and what to throw away.”
          <span className="who">— operating principle of the rewrite</span>
        </div>
      </div>
    </SheetShell>
  );
}

// ─── expose ───
Object.assign(window, { ETLDetailSheet, AnomalyDetailSheet, SQLDetailSheet });
