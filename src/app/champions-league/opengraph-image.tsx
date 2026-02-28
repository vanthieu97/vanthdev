import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Cúp C1 2025/2026 - Lịch thi đấu & Kết quả vòng 1/8 Champions League';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1a 0%, #1a2332 50%, #0d1320 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8 }}>
          Cúp C1 2025/2026
        </div>
        <div style={{ fontSize: 28, color: '#fbbf24', marginBottom: 16 }}>
          Lịch thi đấu & Kết quả vòng 1/8
        </div>
        <div style={{ fontSize: 18, color: '#94a3b8' }}>
          PSG vs Chelsea • Real vs Man City • Chung kết Budapest 30.05.2026
        </div>
      </div>
    ),
    { ...size }
  );
}
