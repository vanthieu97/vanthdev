'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  COUNTRIES,
  detectCountryId,
  formatTwo,
  getCurrentLNYMidnight,
  getLNYDay,
  getNextLNY,
  getNowUtc,
  getStrings,
  isLNYMidnightMoment,
  type Country,
} from '@/lib/lunar';
import './lunar.css';

const FIREWORKS_COLORS = ['#c41e3a', '#e63946', '#d4af37', '#f4e4bc', '#ff6b6b', '#ffd93d'];

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function LunarNewYearCountdownPage() {
  const searchParams = useSearchParams();
  const testMode = searchParams.get('test');
  const isTestMidnight = testMode === 'midnight';

  const [countryId, setCountryId] = useState(COUNTRIES[0].id);
  const [now, setNow] = useState(() => Date.now());
  const [fireworksShown, setFireworksShown] = useState(false);
  const [fireworksTransitionDone, setFireworksTransitionDone] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);
  const [timezoneHint, setTimezoneHint] = useState(() => `Timezone: ${COUNTRIES[0].zone}`);

  const testMidnightTimestamp = useRef<number | null>(null);
  const fireworksCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  const country = COUNTRIES.find((c) => c.id === countryId) ?? COUNTRIES[0];
  const s = getStrings(country);

  if (mounted && isTestMidnight && testMidnightTimestamp.current == null) {
    testMidnightTimestamp.current = Date.now() + 10000;
  }

  const nowUtc = getNowUtc(now, testMode, country, testMidnightTimestamp.current);
  const nextLNY = getNextLNY(nowUtc, country.offset, testMidnightTimestamp.current);
  const lnyDay = getLNYDay(nowUtc, country.offset, testMidnightTimestamp.current);
  const isMidnightMoment = isLNYMidnightMoment(
    nowUtc,
    country.offset,
    testMidnightTimestamp.current
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && window.localStorage.getItem('theme')) as
      | 'dark'
      | 'light'
      | null;
    if (stored === 'dark' || stored === 'light') setTheme(stored);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const detected = detectCountryId();
    if (detected) setCountryId(detected);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = country.lang === 'zh-Hant' ? 'zh-Hant' : country.lang;
  }, [mounted, country.lang]);

  useEffect(() => {
    if (!mounted) return;
    try {
      const inTz = new Date().toLocaleString('en-US', {
        timeZone: country.zone,
        timeZoneName: 'short',
      });
      const match = inTz.match(/GMT[+-]\d+/);
      setTimezoneHint(match ? `Timezone: ${match[0]}` : `Timezone: ${country.zone}`);
    } catch {
      setTimezoneHint(`Timezone: ${country.zone}`);
    }
  }, [mounted, country.zone]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!isMidnightMoment || fireworksShown) return;
    setFireworksShown(true);
  }, [isMidnightMoment, fireworksShown]);

  const runFireworks = useCallback(() => {
    const canvas = fireworksCanvasRef.current;
    if (!canvas) return () => {};
    canvas.classList.remove('hidden');
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      life: number;
      decay: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const createFirework = (x: number, y: number) => {
      const count = 60 + Math.floor(Math.random() * 40);
      const color = FIREWORKS_COLORS[Math.floor(Math.random() * FIREWORKS_COLORS.length)];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random();
        const speed = 2 + Math.random() * 4;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          life: 1,
          decay: 0.008 + Math.random() * 0.01,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 10, 8, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.08) {
        createFirework(Math.random() * canvas.width, canvas.height * (0.3 + Math.random() * 0.4));
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        const [r, g, b] = hexToRgb(p.color);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.life * 0.65})`;
        ctx.fill();
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };

    createFirework(canvas.width / 2, canvas.height / 2);
    createFirework(canvas.width * 0.3, canvas.height * 0.5);
    createFirework(canvas.width * 0.7, canvas.height * 0.5);
    animate();

    const t = setTimeout(() => {
      if (animationIdRef.current != null) cancelAnimationFrame(animationIdRef.current);
      canvas.classList.add('hidden');
      window.removeEventListener('resize', onResize);
      setFireworksTransitionDone(true);
    }, 12000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!fireworksShown) return;
    const cleanup = runFireworks();
    return () => {
      if (animationIdRef.current != null) cancelAnimationFrame(animationIdRef.current);
      cleanup?.();
    };
  }, [fireworksShown, runFireworks]);

  const showLnyDaysView =
    (lnyDay >= 1 && lnyDay <= 3 && !isMidnightMoment) ||
    (fireworksTransitionDone && lnyDay >= 1 && lnyDay <= 3);
  const showCountdown =
    !showLnyDaysView &&
    ((lnyDay === 0 && nextLNY && !isMidnightMoment) ||
      lnyDay >= 4 ||
      (isMidnightMoment && fireworksShown));
  const showCelebration = isMidnightMoment && fireworksShown && !fireworksTransitionDone;
  const showLnyDays = showLnyDaysView;

  let weeksText = '';
  let targetDateText = '';
  let days = '--';
  let hours = '--';
  let minutes = '--';
  let seconds = '--';

  if (nextLNY) {
    const diff = nextLNY.timestamp - nowUtc;
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
    weeksText = s.weeksUntil(weeks, nextLNY.year);
    if (diff > 0) {
      const d = Math.floor(diff / (24 * 60 * 60 * 1000));
      const h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      const sec = Math.floor((diff % (60 * 1000)) / 1000);
      days = formatTwo(d);
      hours = formatTwo(h);
      minutes = formatTwo(m);
      seconds = formatTwo(sec);
      const inTz = new Date(nextLNY.timestamp).toLocaleString(country.lang, {
        timeZone: country.zone,
        dateStyle: 'long',
        timeStyle: 'short',
      });
      targetDateText = s.targetDate(nextLNY.year, inTz);
      if (isTestMidnight) targetDateText += ' · Tap anywhere to hear sound at zero';
    } else {
      days = '00';
      hours = '00';
      minutes = '00';
      seconds = '00';
      targetDateText = s.targetDate(nextLNY.year, nextLNY.dateStr);
    }
  }

  if (showLnyDays) {
    const next = getNextLNY(nowUtc, country.offset, testMidnightTimestamp.current);
    if (next) {
      const weeks = Math.floor((next.timestamp - nowUtc) / (7 * 24 * 60 * 60 * 1000));
      weeksText = s.weeksUntilNext(weeks, next.year);
    }
  }

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (typeof window !== 'undefined') window.localStorage.setItem('theme', next);
  };

  if (!mounted) {
    return (
      <div className="lunar-page">
        <div className="bg-pattern" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="lunar-page" data-theme={theme}>
      <div className="bg-pattern" aria-hidden="true" />
      <div className="lanterns" aria-hidden="true">
        <span className="lantern" />
        <span className="lantern" />
        <span className="lantern" />
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark mode"
        title="Toggle light/dark mode"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <header className="header">
        <h1 className="title">
          <span className="title-en">{s.title}</span>
          <span className="title-cn">{s.titleSub}</span>
        </h1>
        <p className="subtitle">{s.subtitle}</p>
      </header>

      <main className="main">
        <section className="country-section">
          <label htmlFor="country" className="country-label">
            {s.celebrateIn}
          </label>
          <select
            id="country"
            className="country-select"
            aria-label="Select country"
            value={countryId}
            onChange={(e) => {
              setCountryId(e.target.value);
              setFireworksShown(false);
            }}
          >
            {COUNTRIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nameLocal && c.nameLocal !== c.name ? `${c.name} (${c.nameLocal})` : c.name}
              </option>
            ))}
          </select>
          <p className="timezone-hint">{timezoneHint}</p>
        </section>

        <section className="weeks-section" aria-live="polite">
          <p className="weeks-text">{weeksText}</p>
        </section>

        <section className="countdown-section" aria-live="polite">
          <div
            className="countdown-grid"
            hidden={!showCountdown}
            style={{ display: showCountdown ? undefined : 'none' }}
          >
            <div className="countdown-item">
              <span className="countdown-value">{days}</span>
              <span className="countdown-label">{s.days}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{hours}</span>
              <span className="countdown-label">{s.hours}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{minutes}</span>
              <span className="countdown-label">{s.minutes}</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{seconds}</span>
              <span className="countdown-label">{s.seconds}</span>
            </div>
          </div>
          <p className="target-date" style={{ display: showCountdown ? undefined : 'none' }}>
            {targetDateText}
          </p>
        </section>

        <section
          className="celebration-section"
          hidden={!showCelebration}
          style={{ display: showCelebration ? undefined : 'none' }}
        >
          <div className="celebration-content">
            <p className="celebration-title">{s.happyLNY}</p>
            <p className="celebration-sub">{s.happyLNYSub}</p>
          </div>
        </section>

        <section
          className="lny-days-section"
          hidden={!showLnyDays}
          style={{ display: showLnyDays ? undefined : 'none' }}
        >
          {showLnyDays && lnyDay >= 1 && lnyDay <= 3 && (
            <>
              <p className="lny-day-message">
                {[s.firstDay, s.secondDay, s.thirdDay][lnyDay - 1]} {s.dayOfLNY}
                <br />
                <span className="day-cn">{[s.day1Cn, s.day2Cn, s.day3Cn][lnyDay - 1]}</span>
              </p>
              <p className="next-year-hint">
                {s.nextLNY(
                  getNextLNY(nowUtc, country.offset, testMidnightTimestamp.current)?.year ??
                    getCurrentLNYMidnight(nowUtc, country.offset, testMidnightTimestamp.current)
                      ?.year ??
                    '2027'
                )}
              </p>
            </>
          )}
        </section>
      </main>

      <canvas
        ref={fireworksCanvasRef}
        id="fireworks"
        className="fireworks-canvas hidden"
        aria-hidden="true"
      />

      <footer className="footer">
        <p>{s.footer}</p>
      </footer>
    </div>
  );
}
