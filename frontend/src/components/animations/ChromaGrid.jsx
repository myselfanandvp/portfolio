import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ChromaGrid = ({ items, className = '', radius = 240, damping = 0.4, fadeOut = 0.5, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);
  const setXRefs = useRef([]);
  const setYRefs = useRef([]);
  const fadeRefs = useRef([]);
  const positionsRef = useRef([]);

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, data.length);
    setXRefs.current = [];
    setYRefs.current = [];
    positionsRef.current = [];

    data.forEach((_, i) => {
      const card = cardsRef.current[i];
      if (!card) return;

      setXRefs.current[i] = gsap.quickSetter(card, '--x', 'px');
      setYRefs.current[i] = gsap.quickSetter(card, '--y', 'px');

      const rect = card.getBoundingClientRect();
      positionsRef.current[i] = { x: rect.width / 2, y: rect.height / 2 };

      setXRefs.current[i](positionsRef.current[i].x);
      setYRefs.current[i](positionsRef.current[i].y);
    });
  }, [data]);

  const handleCardMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    gsap.to(positionsRef.current[index], {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setXRefs.current[index]?.(positionsRef.current[index].x);
        setYRefs.current[index]?.(positionsRef.current[index].y);
      },
      overwrite: 'auto'
    });

    if (fadeRefs.current[index]) {
      gsap.to(fadeRefs.current[index], { opacity: 0, duration: 0.15, overwrite: 'auto' });
    }
  };

  const handleCardMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    gsap.to(positionsRef.current[index], {
      x: centerX,
      y: centerY,
      duration: damping,
      ease,
      onUpdate: () => {
        setXRefs.current[index]?.(positionsRef.current[index].x);
        setYRefs.current[index]?.(positionsRef.current[index].y);
      },
      overwrite: 'auto'
    });

    if (fadeRefs.current[index]) {
      gsap.to(fadeRefs.current[index], {
        opacity: 1,
        duration: fadeOut,
        overwrite: 'auto'
      });
    }
  };

  const handleCardClick = url => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={rootRef}
      /* FIXED: Changed 'gap-6' to 'gap-3' to tighten the spacing between your card divs */
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
    >
      {data.map((c, i) => (
        <article
          key={i}
          ref={el => (cardsRef.current[i] = el)}
          onMouseMove={(e) => handleCardMouseMove(e, i)}
          onMouseLeave={() => handleCardMouseLeave(i)}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-100 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/40 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-(--card-border)"
          style={{
            '--card-border': c.borderColor && !c.borderColor.includes('border-') ? c.borderColor : '#f59e0b',
            background: c.gradient || 'transparent',
            '--spotlight-color': 'rgba(245, 158, 11, 0.15)',
            '--x': '50%',
            '--y': '50%',
            '--r': `${radius}px`
          }}
        >
          {/* Spotlight Highlight Effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />

          {/* Card Media Area */}
          <div className="relative z-10 flex-1 p-3 box-border">
            <div className="w-full h-50 overflow-hidden rounded-2xl border border-zinc-200/40 dark:border-zinc-700/20">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card Meta Content */}
          <footer className="relative z-10 p-4 font-sans flex flex-col gap-2 min-h-27.5 bg-white/30 dark:bg-zinc-900/20 border-t border-zinc-200/50 dark:border-zinc-800/30">
            <div className="flex items-start justify-between flex-col gap-3">
              <h3 className="text-[1rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
                {c.title}
              </h3>
              {c.handle && (
                <span className="text-[0.75rem] font-mono font-bold tracking-wider text-amber-600 dark:text-amber-400 shrink-0 uppercase">
                  {c.handle}
                </span>
              )}
            </div>
            <p className="text-[0.825rem] font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
              {c.subtitle}
            </p>
          </footer>

          {/* ACTIVE MASK */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.85) contrast(1.15)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.85) contrast(1.15)',
              background: 'rgba(0,0,0,0.001)',
              maskImage:
                'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 30%, rgba(0,0,0,0.95) 65%, white 70%, white 100%)',
              WebkitMaskImage:
                'radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 30%, rgba(0,0,0,0.95) 65%, white 70%, white 100%)'
            }}
          />

          {/* IDLE MASK */}
          <div
            ref={el => (fadeRefs.current[i] = el)}
            className="absolute inset-0 pointer-events-none transition-opacity duration-250 z-40"
            style={{
              backdropFilter: 'grayscale(1) brightness(0.85)',
              WebkitBackdropFilter: 'grayscale(1) brightness(0.85)',
              background: 'rgba(0,0,0,0.001)',
              maskImage:
                'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 25%, rgba(255,255,255,0.9) 55%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(circle var(--r) at var(--x) var(--y), white 0%, white 25%, rgba(255,255,255,0.9) 55%, transparent 100%)',
              opacity: 1
            }}
          />
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
