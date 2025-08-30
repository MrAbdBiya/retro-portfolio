import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function BarcaShowcase() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(el => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width/2);
        const y = e.clientY - (r.top + r.height/2);
        el.style.setProperty('--ry', `${x / 80}deg`);
        el.style.setProperty('--rx', `${-y / 80}deg`);
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  const base = (import.meta as any).env?.BASE_URL || '/';
  const players: { name: string; number: number; img?: string }[] = [
    { name: 'Marc-André ter Stegen', number: 1, img: `${base}players/terstegen.jpg` },
    { name: 'Ronald Araújo', number: 4, img: `${base}players/araujo.jpg` },
    { name: 'İlkay Gündoğan', number: 22, img: `${base}players/gundogan.jpg` },
    { name: 'Pedri', number: 8, img: `${base}players/pedri.jpg` },
    { name: 'Frenkie de Jong', number: 21, img: `${base}players/dejong.jpg` },
    { name: 'Lamine Yamal', number: 27, img: `${base}players/yamal.jpg` },
    { name: 'Robert Lewandowski', number: 9, img: `${base}players/lewa.jpg` },
    { name: 'Raphinha', number: 11, img: `${base}players/raphinha.jpg` },
  ];

  const kitCards = [
    { n: 'Domicile', c: 'from-[var(--barca-blue)] to-[var(--barca-grana)]' },
    { n: 'Extérieur', c: 'from-[#0d0d0d] to-[#222]' },
    { n: 'Third', c: 'from-[#1B3B6F] to-[#FDB927]' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-block px-3 py-1 mb-6 text-xs tracking-widest uppercase bg-white/10 rounded-full border border-white/20">Concept showcase</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            FC Barcelona
            <span className="block text-2xl md:text-3xl font-semibold text-[var(--barca-gold)] mt-3">Més que un club</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl">
            Une expérience visuelle inspirée du Barça: typographies fortes, bandes blaugrana, effets glass et spotlight.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#squad" className="px-6 py-3 rounded-lg glass hover:bg-white/10 transition-colors">L'effectif</a>
            <a href="#kits" className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors">Maillots</a>
            <a href="#palmares" className="px-6 py-3 rounded-lg bg-[var(--barca-gold)] text-black font-semibold hover:brightness-110">Palmarès</a>
          </div>
        </div>
      </header>

      {/* Feature Cards */}
      <main className="relative -mt-24 pb-24">
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Identité', text: 'Blaugrana, jeu de position, la Masia. Une culture de l’excellence et du beau jeu.' },
            { title: 'Camp Nou', text: 'Le Spotify Camp Nou renaît, temple du football mondial et symbole de la Catalogne.' },
            { title: 'Héritage', text: 'Cruyff, Guardiola, Iniesta, Messi… Un héritage qui inspire les générations.' },
          ].map((c, i) => (
      <div key={i} className="glass rounded-2xl p-6 card-tilt" data-tilt>
              <h3 className="text-xl font-semibold mb-2 text-[var(--barca-gold)]">{c.title}</h3>
              <p className="text-white/80">{c.text}</p>
            </div>
          ))}
        </section>

        {/* Squad strip */}
        <section id="squad" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">L’effectif (concept)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {players.map((p) => (
              <div key={p.name} className="aspect-[4/5] rounded-xl glass overflow-hidden flex items-end p-0 card-tilt" data-tilt>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <img
                  src={p.img || `${base}players/silhouette.svg`}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${base}players/silhouette.svg`; }}
                />
                <div className="relative z-10 p-4">
                  <div className="text-sm text-white/70">#{p.number.toString().padStart(2,'0')}</div>
                  <div className="text-lg font-semibold drop-shadow">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kits */}
        <section id="kits" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Maillots (concept)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {kitCards.map((k) => (
              <div key={k.n} className="rounded-2xl p-6 glass card-tilt" data-tilt>
                <div className={`h-48 rounded-xl bg-gradient-to-br ${k.c} mb-4`} />
                <div className="font-semibold">{k.n}</div>
                <div className="text-white/70 text-sm">Palette et textures inspirées, non officielles.</div>
              </div>
            ))}
          </div>
        </section>

        {/* Palmares */}
        <section id="palmares" className="max-w-6xl mx-auto px-6 mt-20">
          <h2 className="text-3xl font-bold mb-6">Palmarès (sélection)</h2>
          <ul className="grid md:grid-cols-3 gap-4">
            {[['Ligue des Champions','5'], ['Liga','27'], ['Copa del Rey','31']].map(([t, n]) => (
              <li key={t} className="rounded-2xl glass p-6 flex items-center justify-between">
                <span className="text-white/80">{t}</span>
                <span className="text-3xl font-extrabold text-[var(--barca-gold)]">{n}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-6 mt-24 text-white/60 text-sm">
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between">
            <p>Concept UI non officiel. FC Barcelona est une marque déposée de ses propriétaires respectifs.</p>
            <a className="underline hover:text-white" href="/">Retour à l’accueil</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

const container = document.getElementById('root')!;
ReactDOM.createRoot(container).render(<BarcaShowcase />);
