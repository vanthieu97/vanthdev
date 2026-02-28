'use client';

const PLANETS = [
  { id: 'mercury', name: 'Sao Thủy' },
  { id: 'venus', name: 'Sao Kim' },
  { id: 'earth', name: 'Trái Đất' },
  { id: 'mars', name: 'Sao Hỏa' },
  { id: 'jupiter', name: 'Sao Mộc' },
  { id: 'saturn', name: 'Sao Thổ' },
  { id: 'uranus', name: 'Sao Thiên Vương' },
  { id: 'neptune', name: 'Sao Hải Vương' },
] as const;

export default function SolarSystemPage() {
  return (
    <div className="solar-system-page">
      <div className="solar-system-stars" aria-hidden="true" />
      <div className="solar-system-stage">
        <div className="solar-system-sun" aria-hidden="true" title="Mặt Trời" />
        {PLANETS.map(({ id }) => (
          <div key={id} className="solar-system-orbit" data-planet={id} aria-hidden="true">
            <div
              className="solar-system-planet"
              data-planet={id}
              title={PLANETS.find((p) => p.id === id)?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
