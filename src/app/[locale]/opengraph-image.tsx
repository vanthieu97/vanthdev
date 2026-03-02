import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tin tức tổng hợp - Tin nổi bật cập nhật liên tục';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #faf8f5 0%, #f0ede8 50%, #e8e6e3 100%)',
        color: '#1a1a1a',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 12, color: '#1a1a1a' }}>
        Tin tức tổng hợp
      </div>
      <div style={{ fontSize: 24, color: '#c41e3a', marginBottom: 16 }}>Tin nổi bật cập nhật liên tục</div>
      <div style={{ fontSize: 18, color: '#6b6b6b' }}>
        Cúp C1 · Giá vàng · Review phim
      </div>
    </div>,
    { ...size }
  );
}
