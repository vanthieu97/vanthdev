'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/** Deterministic pseudo-random from seed (so crack shape is stable per id) */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

interface CrackSegment {
  x2: number;
  y2: number;
  width: number;
  opacity: number;
}

interface Crack {
  id: number;
  x: number;
  y: number;
  segments: CrackSegment[];
}

/** Generate crack segments once per impact - main rays + smaller branches, like real glass */
function createCrackSegments(x: number, y: number, id: number): CrackSegment[] {
  const rnd = (offset: number) => seededRandom(id * 7 + offset);
  const segments: CrackSegment[] = [];
  const mainRays = 6 + Math.floor(rnd(1) * 4);
  for (let i = 0; i < mainRays; i++) {
    const angle = (i / mainRays) * Math.PI * 2 + rnd(2 + i) * 0.8;
    const len = 60 + rnd(10 + i) * 120;
    segments.push({
      x2: x + Math.cos(angle) * len,
      y2: y + Math.sin(angle) * len,
      width: 2 + rnd(20 + i) * 1.5,
      opacity: 0.85 + rnd(30 + i) * 0.15,
    });
  }
  for (let i = 0; i < mainRays; i++) {
    const angle = (i / mainRays) * Math.PI * 2 + rnd(3 + i) * 0.8;
    const baseLen = 35 + rnd(40 + i) * 50;
    const branchAngle = angle + (rnd(50 + i) - 0.5) * 1.2;
    const len = baseLen * (0.4 + rnd(60 + i) * 0.6);
    segments.push({
      x2: x + Math.cos(angle) * baseLen * 0.5 + Math.cos(branchAngle) * len,
      y2: y + Math.sin(angle) * baseLen * 0.5 + Math.sin(branchAngle) * len,
      width: 1 + rnd(70 + i) * 1,
      opacity: 0.5 + rnd(80 + i) * 0.35,
    });
  }
  return segments;
}

function HammerCursor({ x, y }: { x: number; y: number }) {
  return (
    <div className="hammer-cursor" style={{ left: x, top: y }} aria-hidden>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 4L28 24M28 4L22 10M28 4L34 10"
          stroke="#2c1810"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M28 24L28 52M28 24L18 34L28 52M28 24L38 34L28 52"
          stroke="#2c1810"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="22" y="8" width="12" height="18" rx="2" fill="#8B4513" />
        <rect x="20" y="22" width="16" height="8" rx="2" fill="#654321" />
      </svg>
    </div>
  );
}

function CrackSvg({ crack }: { crack: Crack }) {
  const { x, y, segments } = crack;
  return (
    <g className="crack-group">
      <circle cx={x} cy={y} r={12} className="crack-impact" fill="rgba(255,255,255,0.5)" />
      {segments.map((seg, i) => (
        <line
          key={i}
          x1={x}
          y1={y}
          x2={seg.x2}
          y2={seg.y2}
          stroke="rgba(255,255,255,0.92)"
          strokeWidth={seg.width}
          strokeOpacity={seg.opacity}
          strokeLinecap="round"
        />
      ))}
    </g>
  );
}

export default function SmashGlassPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cracks, setCracks] = useState<Crack[]>([]);
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({
    w: typeof window !== 'undefined' ? window.innerWidth : 800,
    h: typeof window !== 'undefined' ? window.innerHeight : 600,
  });
  const nextId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);

  const addCrack = useCallback((clientX: number, clientY: number) => {
    const id = nextId.current++;
    const segments = createCrackSegments(clientX, clientY, id);
    setCracks((prev) => [...prev, { id, x: clientX, y: clientY, segments }]);
  }, []);

  const onTap = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      addCrack(e.clientX, e.clientY);
    },
    [addCrack]
  );

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      if (t) addCrack(t.clientX, t.clientY);
    },
    [addCrack]
  );

  const reset = useCallback(() => setCracks([]), []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="smash-glass-page"
      onMouseMove={onMove}
      onMouseDown={onTap}
      onTouchStart={onTouchStart}
    >
      <header className="smash-glass-seo" aria-label="Giới thiệu game">
        <h1 className="smash-glass-seo__title">Game đập kính xả stress</h1>
        <p className="smash-glass-seo__desc">
          Chơi game đập kính ảo để giải tỏa căng thẳng. Màn hình là mặt kính, chuột thành búa —
          click vào để đập vỡ. Miễn phí cho người dùng Việt Nam, không cần cài đặt.
        </p>
      </header>
      <div className="glass-panel" />
      <svg
        className="cracks-layer"
        aria-hidden
        viewBox={`0 0 ${size.w} ${size.h}`}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        {cracks.map((c) => (
          <CrackSvg key={c.id} crack={c} />
        ))}
      </svg>
      <HammerCursor x={mouse.x} y={mouse.y} />
      <div className="smash-glass-ui">
        <button type="button" onClick={reset} className="smash-reset-btn">
          Làm mới kính
        </button>
      </div>
    </div>
  );
}
