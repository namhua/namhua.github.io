// Dashboard gallery sheet — opens from the "KPI · Business · Product Dashboards" project.
// Five exhibits inspired by real Zalopay dashboards I've built, re-skinned in the
// warm-brown portfolio palette. Numbers are illustrative; structure is real.

// ───────────────── small utilities ─────────────────
const pct = (n, d = 1) => `${n.toFixed(d)}%`;
const fmt = (n) => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(2)}M`
                : n >= 1_000     ? `${(n / 1_000).toFixed(1)}K`
                : n.toLocaleString();

function Delta({ value, neutral }) {
  const up = value >= 0;
  const color = neutral ? "var(--ink-3)" : (up ? "var(--positive)" : "var(--accent)");
  return (
    <span className="dx-delta" style={{ color }}>
      <span style={{ fontSize: 9, marginRight: 2 }}>{up ? "▲" : "▼"}</span>
      {Math.abs(value).toFixed(1)}%
    </span>
  );
}

// Sparkline as inline SVG — path stays in SVG (scales fine with preserveAspectRatio="none"),
// dots are HTML overlays so they stay perfectly round regardless of container width.
function Sparkline({ data, w = 100, h = 24, stroke = "var(--accent)", fill = false, dots = false }) {
  const min = Math.min(...data) * 0.95;
  const max = Math.max(...data) * 1.05;
  const N = data.length;
  const xFor = (i) => (i / (N - 1)) * w;
  const yFor = (v) => h - ((v - min) / (max - min || 1)) * h;
  const path = data.map((v, i) => `${i ? "L" : "M"}${xFor(i).toFixed(1)} ${yFor(v).toFixed(1)}`).join(" ");
  const area = `${path} L${w} ${h} L0 ${h} Z`;
  return (
    <div style={{ position: "relative", height: h, width: "100%" }}>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
           style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}>
        {fill && <path d={area} fill={stroke} opacity="0.12" />}
        <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"
              style={{ vectorEffect: "non-scaling-stroke" }} />
      </svg>
      {dots && data.map((v, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${(xFor(i) / w) * 100}%`,
          top:  `${(yFor(v) / h) * 100}%`,
          transform: "translate(-50%, -50%)",
          width: 5, height: 5,
          borderRadius: "50%",
          background: stroke,
          border: "1.5px solid var(--bg)",
          boxSizing: "border-box",
          pointerEvents: "none",
        }} />
      ))}
    </div>
  );
}

// Mini bar chart
function SparkBars({ data, w = 200, h = 36, color = "var(--accent)" }) {
  const max = Math.max(...data) * 1.05;
  const N = data.length;
  const bw = w / N;
  const iw = bw * 0.6;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: h, display: "block" }}>
      {data.map((v, i) => {
        const bh = (v / max) * (h - 2);
        return (
          <rect key={i}
            x={i * bw + (bw - iw) / 2}
            y={h - bh}
            width={iw}
            height={Math.max(1, bh)}
            rx="0.8"
            fill={color}
            opacity={i === N - 1 ? 1 : 0.35}/>
        );
      })}
    </svg>
  );
}

// ───────────────── Exhibit chrome ─────────────────
function ExhibitFrame({ num, title, sub, status, filters, children }) {
  return (
    <div className="dash-exhibit">
      <div className="dash-exhibit-cap">
        <div className="dash-exhibit-num">{num}</div>
        <div>
          <h4>{title}</h4>
          <p>{sub}</p>
        </div>
      </div>
      <div className="dash-frame">
        <div className="df-chrome">
          <div className="df-chrome-l">
            <span className="df-mark"></span>
            <span className="df-title">{title}</span>
            {status && <span className="df-status">{status}</span>}
          </div>
          <div className="df-chrome-r">
            {filters?.map((f, i) => <span key={i} className="df-filter">{f}</span>)}
          </div>
        </div>
        <div className="df-body">{children}</div>
      </div>
    </div>
  );
}

// ───────────────── Exhibit 1 — Variable Cost Monitoring ─────────────────
function ExhibitVarCost() {
  const tiles = [
    { k: "SMS OTP",  v: "1,996,010", d: -0.8,  s: [2.05,2.02,2.01,2.04,2.00,1.99,1.99] },
    { k: "Push notif",      v: "286,578",   d:  2.3,  s: [0.27,0.27,0.28,0.27,0.28,0.28,0.29] },
    { k: "Device ID",      v: "181,209",   d: -31.6, s: [0.26,0.25,0.24,0.22,0.20,0.19,0.18] },
    { k: "Face check",   v: "1,202,788", d:  8.0,  s: [1.10,1.12,1.14,1.16,1.17,1.19,1.20] },
    { k: "ID verify",         v: "508,655",   d:  44.7, s: [0.31,0.34,0.38,0.41,0.44,0.47,0.51] },
    { k: "Tap-to-pay",          v: "448,845",   d:  10.1, s: [0.40,0.41,0.42,0.43,0.44,0.44,0.45] },
    { k: "Card auth",   v: "347,480",   d:  2.5,  s: [0.33,0.34,0.34,0.34,0.34,0.35,0.35] },
    { k: "Support tickets",    v: "27,729",    d:  24.4, s: [0.022,0.023,0.024,0.025,0.026,0.027,0.028] },
  ];
  return (
    <ExhibitFrame
      num="01"
      title="Variable Cost Monitoring"
      sub="Eight per-product cost drivers tracked daily — auto-detects MoM swings (e.g. ID verify +44.7%) for ops review."
      status="MTD · cut-off 23-May"
      filters={["Daily", "All teams", "All use-cases"]}>
      <div className="exh-tile-grid">
        {tiles.map(t => (
          <div key={t.k} className="exh-tile">
            <div className="exh-tile-k">{t.k}</div>
            <div className="exh-tile-v">{t.v}</div>
            <div className="exh-tile-d"><Delta value={t.d} /><span>vs prev. month</span></div>
            <div className="exh-tile-spark">
              <Sparkline data={t.s} h={22} stroke={t.d >= 0 ? "var(--positive)" : "var(--accent)"} fill/>
            </div>
          </div>
        ))}
      </div>
    </ExhibitFrame>
  );
}

// ───────────────── Exhibit 2 — Cohort Retention Heatmap ─────────────────
function ExhibitCohort() {
  // 12 cohorts × 12 observation months — triangular structure
  const months = ["202506","202507","202508","202509","202510","202511","202512","202601","202602","202603","202604","202605"];
  // base retention curve (M0 implicit = 100%)
  const curve = [100, 76, 72, 70, 69, 68, 67, 66, 65, 62, 60, 59];
  // Build [cohortIdx][offset] = retention% (or null if future)
  const cells = months.map((_, ci) => months.map((__, mi) => {
    const offset = mi - ci;
    if (offset < 0) return null;
    const base = curve[offset];
    // tiny variance per cohort
    const wobble = ((ci * 7 + offset * 3) % 11 - 5) * 0.3;
    return Math.max(20, Math.min(100, base + wobble));
  }));
  // color intensity: opacity scaled from value
  const cellBg = (v) => {
    if (v == null) return "transparent";
    // map 30..100 → 0.08..0.85
    const t = Math.max(0, Math.min(1, (v - 30) / 70));
    return `color-mix(in srgb, var(--accent) ${(8 + t * 78).toFixed(0)}%, var(--surface))`;
  };
  const cellInk = (v) => v == null ? "var(--ink-4)" : (v > 65 ? "var(--bg)" : "var(--ink)");

  return (
    <ExhibitFrame
      num="02"
      title="Overall Retention — cohort triangle"
      sub="Twelve monthly cohorts × 12 observation months. The lighter the diagonal trails off, the faster a cohort decays."
      status="View by team / use-case · last 12M"
      filters={["MPU", "ALL teams", "Returns in same use-case"]}>
      <div className="exh-cohort-wrap">
        <div className="exh-cohort-side">
          <div className="exh-cohort-label">Filters</div>
          {[
            ["Team","ALL"],
            ["Category","ALL"],
            ["Sub-category","ALL"],
            ["Merchant","ALL"],
            ["User type","MPU"],
            ["View","same use-case"],
          ].map(([k,v]) => (
            <div key={k} className="exh-cohort-filter">
              <div className="k">{k}</div>
              <div className="v">{v}</div>
            </div>
          ))}
        </div>
        <div className="exh-cohort-table">
          <div className="exh-cohort-row exh-cohort-head">
            <div className="exh-cohort-rowhead">Cohort</div>
            {months.map(m => <div key={m} className="exh-cohort-cell head">{m.slice(2)}</div>)}
          </div>
          {cells.map((row, ci) => (
            <div key={ci} className="exh-cohort-row">
              <div className="exh-cohort-rowhead">{months[ci].slice(2)}</div>
              {row.map((v, mi) => (
                <div key={mi}
                  className="exh-cohort-cell"
                  style={{ background: cellBg(v), color: cellInk(v) }}>
                  {v == null ? "" : (mi === ci ? "100%" : pct(v, 0))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </ExhibitFrame>
  );
}

// ───────────────── Exhibit 3 — Authentication Funnel ─────────────────
function ExhibitAuth() {
  const kpis = [
    { k: "Tap-to-pay",        v: "6.44M",   r: "50.4%", color: "var(--accent)" },
    { k: "Face check", v: "6.84M",   r: "+215%", color: "var(--positive)" },
    { k: "ID verify",       v: "1.87M",   r: "19.5%", color: "var(--accent-soft)" },
    { k: "POS",       v: "406.1M",  r: "56.5%", color: "var(--ink)" },
  ];
  const steps = [
    { i: 1, name: "Load screen", v: "12,794,515", pct: "100.0%" },
    { i: 2, name: "Scan",        v: "4,450,854",  pct: "34.8%" },
    { i: 3, name: "Success",     v: "6,444,191",  pct: "50.4%" },
  ];
  const sparkE2E = [217,191,138,53,52,123,98,55,99,135,221,156,53,53];
  const sparkDaily = [36,21,34,21,28,75,22,45,93,75,49,53,55,45,41];

  return (
    <ExhibitFrame
      num="03"
      title="Authentication Product Dashboard"
      sub="Stepwise funnel for Tap-to-pay / Face check / ID verify — surface drop-off between Load → Scan → Success, with E2E success rate trend."
      status="Daily · 07-Jul to 24-May"
      filters={["Period: Daily", "User metric", "All devices"]}>
      <div className="exh-auth-grid">
        {kpis.map(k => (
          <div key={k.k} className="exh-auth-kpi">
            <div className="exh-auth-kpi-k" style={{ color: k.color }}>{k.k}</div>
            <div className="exh-auth-kpi-row">
              <div className="exh-auth-kpi-v">{k.v}</div>
              <div className="exh-auth-kpi-r">{k.r}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="exh-auth-flow">
        <div className="exh-auth-flow-label">Tap-to-pay Flow</div>
        <div className="exh-auth-steps">
          {steps.map((s, idx) => (
            <React.Fragment key={s.i}>
              <div className="exh-auth-step">
                <div className="exh-auth-screen">
                  <div className="screen-bar"></div>
                  <div className="screen-row big"></div>
                  <div className="screen-row"></div>
                  <div className="screen-row short"></div>
                  {s.i === 1 && <div className="screen-circle"></div>}
                  {s.i === 2 && <div className="screen-scan"></div>}
                  {s.i === 3 && <div className="screen-check">✓</div>}
                  <div className="screen-cta"></div>
                </div>
                <div className="exh-auth-step-cap">
                  <div className="cap-i">Step {s.i}</div>
                  <div className="cap-name">{s.name}</div>
                  <div className="cap-v">{s.v}</div>
                  <div className="cap-pct">{s.pct}</div>
                </div>
              </div>
              {idx < steps.length - 1 && <div className="exh-auth-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="exh-auth-trends">
        <div className="exh-auth-trend">
          <div className="trend-head">
            <span>E2E %Success rate</span>
            <span className="trend-v">53.9%</span>
          </div>
          <Sparkline data={sparkE2E} h={48} stroke="var(--positive)" fill dots/>
        </div>
        <div className="exh-auth-trend">
          <div className="trend-head">
            <span>E2E daily success</span>
            <span className="trend-v">12,989</span>
          </div>
          <SparkBars data={sparkDaily} h={48} color="var(--accent)"/>
        </div>
      </div>
    </ExhibitFrame>
  );
}

// ───────────────── Exhibit 4 — KPI Tracker by BU ─────────────────
function ExhibitKPITracker() {
  const headline = [
    { k: "MTD",         v: "9,090B"   },
    { k: "23-May TPV",  v: "302B"     },
    { k: "%Achieved",   v: "83%",      hl: true },
    { k: "Target",      v: "10,912B"  },
    { k: "EOM Forecast",v: "11,354B"  },
    { k: "%FC Target",  v: "+4.05%",   delta: "pos" },
    { k: "%MoM TPV",    v: "+1.61%",   delta: "pos" },
    { k: "%FC vs MPU",  v: "-0.17%",   delta: "neg" },
  ];
  const bus = [
    { name: "Pay Core",         mtd: "9,089.7B", ach: "83.3%",  fc: "11,354.3B",  vsKpi: "+4.05%",  pos: true,  bars: [210,455,290,165,395,470,180,485,250,140,410,475,195,355,485,160,290,440,205,475,180,445,225,400] },
    { name: "Digital Wallet",mtd: "3,908.0B", ach: "89.0%",  fc: "4,569.5B",   vsKpi: "+4.07%",  pos: true,  bars: [80,180,95,205,68,165,210,90,175,72,195,140,82,205,150,68,185,210,75,160,200,88,170,195] },
    { name: "Marketplace",      mtd: "1,526.8B", ach: "76.9%",  fc: "2,021.4B",   vsKpi: "-1.74%",  pos: false, bars: [28,82,40,78,22,68,85,32,72,30,55,82,25,75,45,80,28,68,75,38,72,82,30,65] },
    { name: "Cross-border",          mtd: "624.3B",   ach: "69.0%",  fc: "808.3B",     vsKpi: "-10.67%", pos: false, bars: [10,36,18,32,8,28,38,14,34,12,22,30,8,32,24,36,11,28,34,16,30,38,9,30] },
    { name: "Transit",        mtd: "355.2B",   ach: "62.3%",  fc: "449.8B",     vsKpi: "-16.36%", pos: false, bars: [5,21,10,18,4,16,22,8,17,6,12,18,4,20,11,21,5,16,18,9,19,22,4,14] },
    { name: "Partners", mtd: "150.6B",   ach: "47.8%",  fc: "193.9B",     vsKpi: "-38.47%", pos: false, bars: [2,10,4,9,1,7,11,3,8,2,6,9,1,10,5,8,2,7,10,3,9,11,1,7] },
  ];
  return (
    <ExhibitFrame
      num="04"
      title="KPI Tracker — May 2026"
      sub="One-screen executive view: company headline KPIs on top, each BU's pace-to-target plus daily TPV bars below."
      status="Confidential · refreshed 10:00 AM"
      filters={["May 2026", "As of 23-May"]}>
      <div className="exh-kpi-head">
        {headline.map(h => (
          <div key={h.k} className={"exh-kpi-h" + (h.hl ? " hl" : "")}>
            <div className="exh-kpi-h-k">{h.k}</div>
            <div className="exh-kpi-h-v" style={{
              color: h.delta === "pos" ? "var(--positive)" : h.delta === "neg" ? "var(--accent)" : (h.hl ? "var(--accent)" : "var(--ink)")
            }}>{h.v}</div>
          </div>
        ))}
      </div>
      <div className="exh-bu-grid">
        {bus.map(b => (
          <div key={b.name} className="exh-bu">
            <div className="exh-bu-head">
              <div className="exh-bu-name">{b.name}</div>
              <div className="exh-bu-ach">Achieved <strong>{b.ach}</strong></div>
            </div>
            <div className="exh-bu-mtd">
              <span className="k">MTD</span>
              <span className="v">{b.mtd}</span>
            </div>
            <div className="exh-bu-fc">
              <span>EOM FC <strong>{b.fc}</strong></span>
              <span style={{ color: b.pos ? "var(--positive)" : "var(--accent)" }}>{b.vsKpi}</span>
            </div>
            <div className="exh-bu-bars">
              <SparkBars data={b.bars} h={42} color={b.pos ? "var(--positive)" : "var(--accent)"}/>
              <div className="exh-bu-target"></div>
            </div>
          </div>
        ))}
      </div>
    </ExhibitFrame>
  );
}

// ───────────────── Exhibit 5 — User Growth Overall ─────────────────
function ExhibitGrowth() {
  const left = [
    { k: "QR AU365", v: "23.78M", t: "primary" },
    { k: "Wallet AU365", v: "9.76M",  t: "secondary" },
    { k: "AU365 total",  v: "31.92M", t: "primary" },
    { k: "QR MAU",   v: "4.69M",  d: -7,  t: "secondary" },
    { k: "Wallet MAU",   v: "4.51M",  d: 5,   t: "secondary" },
    { k: "QR DAU",   v: "311K",   t: "primary" },
    { k: "Wallet DAU",   v: "940K",   t: "primary" },
    { k: "QR D30 Ret.", v: "39.5%", t: "secondary" },
    { k: "Wallet D30 Ret.", v: "81.7%", t: "secondary" },
    { k: "First → QR MTD", v: "641K", d: -14, t: "secondary" },
  ];
  const dau    = [868,926,915,851,938,868,959,959,940,951,925,938,1020,957,933,963,995,941];
  const vietqr = [263,297,295,283,324,297,303,285,292,302,283,320,323,320,275,285,311];
  const first  = [23,32,32,25,34,32,34,32,30,29,27,28,27,29,27,25,29,29,30,29,29,29,29,29,25,24,25,29];
  return (
    <ExhibitFrame
      num="05"
      title="User Growth Overall"
      sub="Daily / MTD / annual active across Wallet and QR, with the three sparklines on the right tracking 30-day pulse."
      status="As of 23-May · last 30 days"
      filters={["Wallet", "QR", "POS"]}>
      <div className="exh-growth-wrap">
        <div className="exh-growth-tiles">
          {left.map((t,i) => (
            <div key={i} className={"exh-growth-t " + t.t}>
              <div className="k">{t.k}</div>
              <div className="vrow">
                <div className="v">{t.v}</div>
                {typeof t.d === "number" && <Delta value={t.d}/>}
              </div>
            </div>
          ))}
        </div>
        <div className="exh-growth-sparks">
          <div className="exh-growth-spark">
            <div className="sp-head">
              <span>DAU <em>(Wallet + QR)</em></span>
              <span className="sp-v">941K</span>
            </div>
            <Sparkline data={dau} h={56} stroke="var(--accent)" fill dots/>
          </div>
          <div className="exh-growth-spark">
            <div className="sp-head">
              <span>QR DAU <em>(off-POS)</em></span>
              <span className="sp-v">311K</span>
            </div>
            <Sparkline data={vietqr} h={56} stroke="var(--accent-soft)" fill dots/>
          </div>
          <div className="exh-growth-spark">
            <div className="sp-head">
              <span>First active to QR</span>
              <span className="sp-v">29K</span>
            </div>
            <Sparkline data={first} h={56} stroke="var(--positive)" fill dots/>
          </div>
        </div>
      </div>
    </ExhibitFrame>
  );
}

// ───────────────── Sheet ─────────────────
function DashboardSheet({ open, onClose }) {
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
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="dash-sheet-title">
        <button className="sheet-close" onClick={onClose} aria-label="Close"><Ico.Close /></button>

        <div className="sheet-hero">
          <div className="sheet-eyebrow">
            <span>Dashboards</span>
            <span className="sep">·</span>
            <span>Gallery</span>
            <span className="sep">·</span>
            <span>02 / 06</span>
          </div>
          <h2 id="dash-sheet-title">
            KPI · Business · Product <em>Dashboards</em>
          </h2>
          <p>
            Operational and exploratory dashboards I've built at Zalopay — used in
            weekly reviews across Finance, Product, Loyalty, CS and BU leadership.
            What follows is a faithful re-skin of five dashboards I designed and
            shipped — team names, products and numbers below are fictional
            stand-ins for the real internal data.
          </p>
          <div className="sheet-meta">
            <div className="sheet-meta-item"><div className="k">Role</div><div className="v">Analytics Engineer</div></div>
            <div className="sheet-meta-item"><div className="k">Company</div><div className="v">VNG · Zalopay</div></div>
            <div className="sheet-meta-item"><div className="k">Cadence</div><div className="v">Daily refresh · weekly review</div></div>
            <div className="sheet-meta-item"><div className="k">Audience</div><div className="v">Exec · Product · Ops · Finance</div></div>
            <div className="sheet-meta-item"><div className="k">Stack</div>
              <div className="v" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["PySpark", "SQL", "Tableau"].map(s => <span key={s} className="tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="sheet-body">

          <div className="sheet-block">
            <span className="sheet-block-label">Approach</span>
            <h3>Numbers people will actually open on a Monday.</h3>
            <p>
              Each board is built around a single decision — “are we on pace?”,
              “where is the drop-off?”, “which cohort is decaying fastest?” —
              then surfaces only the signals that move that decision. Filters
              live on the left, headline numbers up top, drill-downs below.
              The structure repeats across boards so reviewers don't relearn
              the layout.
            </p>
          </div>

          <ExhibitVarCost />
          <ExhibitCohort />
          <ExhibitAuth />
          <ExhibitKPITracker />
          <ExhibitGrowth />

          <div className="sheet-block">
            <span className="sheet-block-label">Pattern · the shared shape</span>
            <h3>One layout grammar, five very different decisions.</h3>
            <div className="findings">
              <div className="finding">
                <div className="num">01</div>
                <div className="ft">Filters on the left, narrative top-to-bottom</div>
                <div className="fp">Every board opens with “what slice am I looking at?” chips, then KPIs, then drill-downs — so reviewers can scan top-to-bottom without hunting.</div>
              </div>
              <div className="finding">
                <div className="num">02</div>
                <div className="ft">Deltas always paired with a sparkline</div>
                <div className="fp">A number with a +4.05% next to it is a claim; a sparkline behind it is evidence. Both, always.</div>
              </div>
              <div className="finding">
                <div className="num">03</div>
                <div className="ft">Same colour vocabulary across boards</div>
                <div className="fp">Positive deltas, negative deltas, highlighted rows — same meaning everywhere, so the rules don't change when the dashboard does.</div>
              </div>
            </div>
          </div>

          <div className="sheet-block">
            <span className="sheet-block-label">Impact</span>
            <h3>Boards that replaced spreadsheets.</h3>
            <div className="sheet-impact">
              <div className="stat"><div className="v">5</div><div className="l">dashboards in active weekly use</div></div>
              <div className="stat"><div className="v"><em>Daily</em></div><div className="l">refresh cadence on PySpark + Tableau</div></div>
              <div className="stat"><div className="v">6 BUs</div><div className="l">tracked on a single KPI board</div></div>
              <div className="stat"><div className="v">12M</div><div className="l">cohort retention triangle, 12 × 12</div></div>
            </div>
          </div>

          <div className="sheet-quote">
            “The job isn't to draw the prettiest chart — it's to make the meeting
            shorter and the decision sharper. Same KPI, same colour, same place
            on the page, every Monday.”
            <span className="who">— operating principle behind the gallery</span>
          </div>

        </div>
      </div>
    </div>
  );
}

// expose
window.DashboardSheet = DashboardSheet;
