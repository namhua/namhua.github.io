// KPI forecasting pipeline — full case-study sheet (project 01).
// Opens from "KPI Forecasting Pipeline" project card; same shell pattern
// as GADetailSheet, with the existing six-stage workflow animation as
// the centerpiece.

function KPIStages() {
  const stages = [
    {
      n: "01", title: "Collect", sub: "Raw payment actuals",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
          <ellipse cx="32" cy="13" rx="20" ry="5" strokeWidth="1.3"/>
          <path d="M12 13v37c0 2.8 9 5 20 5s20-2.2 20-5V13" strokeWidth="1.3"/>
          <ellipse cx="32" cy="25" rx="20" ry="5" strokeWidth="0.9" opacity="0.45"/>
          <ellipse cx="32" cy="38" rx="20" ry="5" strokeWidth="0.9" opacity="0.3"/>
          <g stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" className="kp-collect-rows">
            <line x1="18" y1="20" x2="46" y2="20" className="r r1"/>
            <line x1="20" y1="32" x2="44" y2="32" className="r r2"/>
            <line x1="19" y1="44" x2="45" y2="44" className="r r3"/>
          </g>
        </svg>
      ),
    },
    {
      n: "02", title: "Normalize", sub: "PM → Team → Cat → Sub → Merchant",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
          <g className="kp-norm-edges" stroke="var(--accent)" strokeWidth="0.9">
            <path d="M32 12v6M16 18h32M16 18v4M32 18v4M48 18v4" />
            <path d="M16 28v4M10 32h12M10 32v4M16 32v4M22 32v4" opacity="0.85" />
          </g>
          <rect className="kp-norm-node l0" x="26" y="6" width="12" height="6" rx="1.2"/>
          <rect className="kp-norm-node l1" x="10" y="22" width="12" height="6" rx="1.2"/>
          <rect className="kp-norm-node l1" x="26" y="22" width="12" height="6" rx="1.2"/>
          <rect className="kp-norm-node l1" x="42" y="22" width="12" height="6" rx="1.2"/>
          <rect className="kp-norm-node l2" x="6"  y="36" width="8" height="5" rx="1"/>
          <rect className="kp-norm-node l2" x="14" y="36" width="8" height="5" rx="1"/>
          <rect className="kp-norm-node l2" x="22" y="36" width="8" height="5" rx="1"/>
          <g className="kp-norm-edges l3-edges" stroke="var(--accent)" strokeWidth="0.7">
            <path d="M10 41v4M10 45h8M10 45v3M18 45v3" />
          </g>
          <rect className="kp-norm-node l3" x="7"  y="48" width="6" height="4" rx=".8"/>
          <rect className="kp-norm-node l3" x="15" y="48" width="6" height="4" rx=".8"/>
        </svg>
      ),
    },
    {
      n: "03", title: "Pattern library", sub: "Story shapes",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 50 L14 40 L22 46 L30 30 L38 42 L46 28 L58 36" opacity="0.35" />
          <path d="M6 44 L14 50 L22 36 L30 44 L38 26 L46 38 L58 22" opacity="0.55" />
          <path className="kp-pattern-active" d="M6 38 L14 32 L22 42 L30 22 L38 34 L46 18 L58 28" stroke="var(--accent)" strokeWidth="1.6" />
          <circle cx="22" cy="42" r="1.6" fill="var(--accent)" />
          <circle cx="30" cy="22" r="1.6" fill="var(--accent)" />
          <circle cx="46" cy="18" r="1.6" fill="var(--accent)" />
        </svg>
      ),
    },
    {
      n: "04", title: "KNN match", sub: "Nearest fingerprint",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="14" cy="46" r="1.6" opacity="0.4" />
          <circle cx="20" cy="22" r="1.6" opacity="0.55" />
          <circle cx="44" cy="48" r="1.6" opacity="0.4" />
          <circle cx="52" cy="14" r="1.6" opacity="0.55" />
          <circle cx="50" cy="30" r="1.6" opacity="0.55" />
          <circle cx="18" cy="38" r="1.6" opacity="0.7" />
          <circle cx="44" cy="22" r="1.6" opacity="0.7" />
          <circle className="kp-knn-q" cx="32" cy="32" r="3" fill="var(--accent)" stroke="none" />
          <g stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" className="kp-knn-lines">
            <line x1="32" y1="32" x2="18" y2="38" />
            <line x1="32" y1="32" x2="44" y2="22" />
            <line x1="32" y1="32" x2="20" y2="22" />
          </g>
          <circle cx="32" cy="32" r="14" strokeDasharray="2 3" opacity="0.25" />
        </svg>
      ),
    },
    {
      n: "05", title: "Forecast EOM", sub: "Scale by % contribution",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 50 L14 44 L22 38 L30 30 L36 24" />
          <path className="kp-fc-pred" d="M36 24 L46 18 L56 8" stroke="var(--accent)" strokeWidth="1.8" strokeDasharray="3 3" />
          <circle cx="36" cy="24" r="2" fill="currentColor" stroke="none" />
          <g className="kp-fc-target" stroke="var(--accent)">
            <circle cx="56" cy="8" r="2.5" fill="var(--accent)" stroke="none" />
            <circle cx="56" cy="8" r="6" strokeWidth="1" fill="none" opacity="0.7" />
          </g>
        </svg>
      ),
    },
    {
      n: "06", title: "Calibrate", sub: "Take-rate override",
      anim: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <text x="4" y="18" fontSize="6" fontFamily="ui-monospace, monospace" fill="currentColor" stroke="none" opacity="0.55">−</text>
          <text x="56" y="18" fontSize="6" fontFamily="ui-monospace, monospace" fill="currentColor" stroke="none" opacity="0.55">+</text>
          <line x1="10" y1="22" x2="54" y2="22" />
          <g className="kp-cal-thumb">
            <circle cx="0" cy="22" r="5" fill="var(--accent)" stroke="none" />
            <circle cx="0" cy="22" r="9" stroke="var(--accent)" strokeWidth="1" opacity="0.3" fill="none" />
          </g>
          <line x1="10" y1="44" x2="54" y2="44" opacity="0.5" />
          <g className="kp-cal-thumb-2">
            <circle cx="0" cy="44" r="4" fill="currentColor" stroke="none" opacity="0.6" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="kpi-flow" role="img" aria-label="KPI forecasting workflow">
      <div className="kpi-flow-pulse" aria-hidden="true"></div>
      <div className="kpi-flow-stages">
        {stages.map((s, i) => (
          <React.Fragment key={s.n}>
            <div className="kpi-stage" style={{ "--i": i }}>
              <div className="ks-num">{s.n}</div>
              <div className="ks-anim">{s.anim}</div>
              <div className="ks-title">{s.title}</div>
              <div className="ks-sub">{s.sub}</div>
            </div>
            {i < stages.length - 1 && (
              <div className="kpi-conn" style={{ "--i": i }} aria-hidden="true">
                <svg viewBox="0 0 40 12" preserveAspectRatio="none">
                  <line x1="0" y1="6" x2="40" y2="6" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.35" />
                </svg>
                <span className="kpi-dot"></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function KPIDetailSheet({ open, onClose }) {
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

  if (!mounted) return null;

  return (
    <div className={"sheet-backdrop" + (shown ? " in" : "")}
         onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="kpi-sheet-title">
        <button className="sheet-close" onClick={onClose} aria-label="Close"><Ico.Close /></button>

        <div className="sheet-hero">
          <div className="sheet-eyebrow">
            <span>Case study</span>
            <span className="sep">·</span>
            <span>Forecasting</span>
            <span className="sep">·</span>
            <span>01 / 06</span>
          </div>
          <h2 id="kpi-sheet-title">
            KPI forecasting pipeline at <em>VNG · Zalopay</em>
          </h2>
          <p>
            Story-pattern library × KNN nearest-neighbor — a reliable
            end-of-month KPI forecast for every business team, with a
            take-rate safety dial that lets operators dampen the model
            when reality drifts from history.
          </p>
          <div className="sheet-meta">
            <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Analytics Engineer</div></div>
            <div className="sheet-meta-item"><div className="k">Company</div><div className="v">VNG · Zalopay</div></div>
            <div className="sheet-meta-item"><div className="k">Year</div><div className="v">2025</div></div>
            <div className="sheet-meta-item"><div className="k">Approach</div><div className="v">Pattern library + KNN</div></div>
            <div className="sheet-meta-item"><div className="k">Stack</div>
              <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Python", "PySpark", "SQL"].map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="sheet-body">

          {/* PROBLEM */}
          <div className="sheet-block">
            <span className="sheet-block-label">01 · Problem</span>
            <h3>Every team forecasted in isolation — and disagreed by Friday.</h3>
            <p>
              Each BU at Zalopay had its own spreadsheet model: linear-trend,
              YoY × seasonality, gut-feel multipliers. By mid-month the numbers
              drifted, by month-end they disagreed, and finance had to reconcile
              six versions of "EOM TPV." We needed one model that every team
              would trust, that updated daily, and that an operator could
              actually explain to leadership.
            </p>
          </div>

          {/* APPROACH */}
          <div className="sheet-block">
            <span className="sheet-block-label">02 · Approach</span>
            <h3>Match this month's shape to similar months in history.</h3>
            <p>
              Instead of fitting parameters, we collect daily KPI shapes
              (story-patterns) from every closed month and store them in a
              library. The running month becomes a partial fingerprint; KNN
              finds its closest historical neighbours; we project the
              remaining days by scaling each neighbour's tail by the
              fingerprint's percent-contribution. It's interpretable
              (you can see <em>which</em> month it looks like), debuggable,
              and easy to explain in a 5-minute review.
            </p>
          </div>

          {/* SOLUTION — pipeline animation (dark shell preserves the original aesthetic) */}
          <div className="sheet-block">
            <span className="sheet-block-label">03 · Solution · The pipeline</span>
            <h3>Six stages, end-to-end — running daily.</h3>
            <p>
              From raw payment actuals to a take-rate-calibrated forecast.
              Hover any stage to see the artefact it produces.
            </p>
            <div className="kpi-case-shell">
              <KPIStages />
            </div>
          </div>

          {/* FINDINGS */}
          <div className="sheet-block">
            <span className="sheet-block-label">Key learnings</span>
            <h3>Three things the pipeline taught us.</h3>
            <div className="findings">
              <div className="finding">
                <div className="num">01</div>
                <div className="ft">Shape beats magnitude.</div>
                <div className="fp">Normalizing every series to its percent-contribution lets a small BU's history inform a large BU's forecast. The library grew useful fast.</div>
              </div>
              <div className="finding">
                <div className="num">02</div>
                <div className="ft">Interpretability is the feature.</div>
                <div className="fp">"It looks like March 2024" is a sentence leadership accepts. "The model says 11.3B" is a sentence they question. KNN gave us the first.</div>
              </div>
              <div className="finding">
                <div className="num">03</div>
                <div className="ft">A dial beats a retrain.</div>
                <div className="fp">The take-rate slider lets operators dampen the forecast when a campaign or holiday distorts behaviour — without anyone touching the model.</div>
              </div>
            </div>
          </div>

          {/* IMPACT */}
          <div className="sheet-block">
            <span className="sheet-block-label">04 · Impact</span>
            <h3>One forecast, used by every team.</h3>
            <div className="sheet-impact">
              <div className="stat"><div className="v">Company-<em>wide</em></div><div className="l">forecast used across every business team at Zalopay</div></div>
              <div className="stat"><div className="v">Daily</div><div className="l">refresh — running month matched against full history</div></div>
              <div className="stat"><div className="v">KNN <em>+</em> patterns</div><div className="l">interpretable, debuggable, easy to explain</div></div>
              <div className="stat"><div className="v">Take-rate</div><div className="l">operator override when reality drifts from history</div></div>
            </div>
          </div>

          {/* QUOTE */}
          <div className="sheet-quote">
            “The pipeline didn't replace judgment — it gave every team the
            same starting number to argue from. That's worth more than a
            tighter MAPE.”
            <span className="who">— design principle for the forecasting pipeline</span>
          </div>

        </div>
      </div>
    </div>
  );
}

window.KPIDetailSheet = KPIDetailSheet;
