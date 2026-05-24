// Main portfolio app + Tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "warm",
  "density": "regular",
  "heroLayout": "split",
  "headFont": "sans",
  "radius": "regular",
  "vizIntensity": "regular"
}/*EDITMODE-END*/;

const PALETTES = {
  warm: {
    "--bg": "#FAF6EF", "--surface": "#F4ECE0", "--surface-2": "#EFE4D2",
    "--border": "#E5D9C7", "--border-2": "#D9C9AE",
    "--ink": "#2A2520", "--ink-2": "#4D4338", "--ink-3": "#7B6E5E", "--ink-4": "#A89A86",
    "--accent": "#8B5E34", "--accent-soft": "#B68B4C", "--gold": "#C9A961",
  },
  neutral: {
    "--bg": "#F7F4EE", "--surface": "#EEE8DC", "--surface-2": "#E7DFCE",
    "--border": "#DCD2BE", "--border-2": "#CDC0A6",
    "--ink": "#262320", "--ink-2": "#4B453D", "--ink-3": "#776F62", "--ink-4": "#A39A88",
    "--accent": "#6B4E2E", "--accent-soft": "#9B7B4F", "--gold": "#B8975A",
  },
  cool: {
    "--bg": "#F4F2EC", "--surface": "#E9E5DB", "--surface-2": "#DFDACD",
    "--border": "#CFC8B7", "--border-2": "#BCB39F",
    "--ink": "#1F1D1A", "--ink-2": "#3E3A33", "--ink-3": "#6B6657", "--ink-4": "#969080",
    "--accent": "#5A4632", "--accent-soft": "#86714F", "--gold": "#A48F62",
  },
};

function applyTweaks(t) {
  const body = document.body;
  body.setAttribute("data-density", t.density);
  body.setAttribute("data-hero", t.heroLayout);
  body.setAttribute("data-headfont", t.headFont);
  body.setAttribute("data-radius", t.radius);
  body.setAttribute("data-viz", t.vizIntensity);
  const pal = PALETTES[t.palette] || PALETTES.warm;
  for (const [k, v] of Object.entries(pal)) {
    document.documentElement.style.setProperty(k, v);
  }
}

function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [detailId, setDetailId] = React.useState(null);

  React.useLayoutEffect(() => { applyTweaks(t); }, [t]);
  useScrollReveal();

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenDetail={setDetailId} />
        <Experience />
        <Contact />
      </main>
      <Footer />

      <GADetailSheet open={detailId === 6} onClose={() => setDetailId(null)} />
      <DashboardSheet open={detailId === 2} onClose={() => setDetailId(null)} />
      <KPIDetailSheet open={detailId === 1} onClose={() => setDetailId(null)} />
      <ETLDetailSheet open={detailId === 3} onClose={() => setDetailId(null)} />
      <AnomalyDetailSheet open={detailId === 4} onClose={() => setDetailId(null)} />
      <SQLDetailSheet open={detailId === 5} onClose={() => setDetailId(null)} />

      <FloatingCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakRadio
          label="Tone"
          value={t.palette}
          options={["warm", "neutral", "cool"]}
          onChange={(v) => setTweak("palette", v)}
        />

        <TweakSection label="Typography" />
        <TweakRadio
          label="Headings"
          value={t.headFont}
          options={["sans", "serif"]}
          onChange={(v) => setTweak("headFont", v)}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={["compact", "regular", "airy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <TweakRadio
          label="Radius"
          value={t.radius}
          options={["sharp", "regular", "soft"]}
          onChange={(v) => setTweak("radius", v)}
        />
        <TweakSelect
          label="Hero layout"
          value={t.heroLayout}
          options={[
            { value: "split", label: "Split (visual right)" },
            { value: "stacked", label: "Stacked (visual below)" },
            { value: "centered", label: "Centered (no visual)" },
          ]}
          onChange={(v) => setTweak("heroLayout", v)}
        />

        <TweakSection label="Data visuals" />
        <TweakRadio
          label="Intensity"
          value={t.vizIntensity}
          options={["minimal", "regular", "bold"]}
          onChange={(v) => setTweak("vizIntensity", v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
