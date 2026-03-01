'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { GoldPriceData } from '@/lib/gold-price';

function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(amount);
}

function PulsingDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
    </span>
  );
}

function ChangeIndicator({ value, percent }: { value: number; percent: number }) {
  const isUp = value > 0;
  return (
    <span
      className={`inline-flex items-center gap-1 text-sm font-semibold ${
        isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
      }`}
    >
      {isUp ? '▲' : '▼'} {formatVND(Math.abs(value))} ({percent > 0 ? '+' : ''}
      {percent.toFixed(2)}%)
    </span>
  );
}

function ViewerCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 800) + 1200);
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 20) - 8);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (count === 0) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-[#6b6b6b] dark:text-slate-400">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
      </span>
      <span>
        <strong className="text-[#1a1a1a] dark:text-white/90">{formatVND(count)}</strong> người đang
        xem
      </span>
    </div>
  );
}

export function GoldPriceClient({ initialData }: { initialData: GoldPriceData }) {
  const data = initialData;
  const [activeTab, setActiveTab] = useState<'domestic' | 'world' | 'analysis'>('domestic');
  const [showFaq, setShowFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTable = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const faqs = [
    {
      q: 'Giá vàng SJC hôm nay bao nhiêu?',
      a: `Giá vàng SJC miếng hôm nay: Mua vào ${formatVND(data.brands[0].buyPrice)} đ/lượng - Bán ra ${formatVND(data.brands[0].sellPrice)} đ/lượng. Giá được cập nhật liên tục trong ngày.`,
    },
    {
      q: 'Giá vàng thế giới hôm nay bao nhiêu?',
      a: `Giá vàng thế giới (XAU/USD) đang giao dịch ở mức ${formatVND(data.world.usdPerOunce)} USD/ounce, tương đương khoảng ${formatVND(data.world.vndPerLuong)} đ/lượng khi quy đổi.`,
    },
    {
      q: 'Có nên mua vàng thời điểm này không?',
      a: 'Vàng đã vượt 5.000 USD/ounce. UBS dự báo 6.200 USD, Bank of America dự báo 6.000 USD trong năm 2026. Đà tăng vẫn được hỗ trợ bởi ngân hàng trung ương mua ròng và bất ổn địa chính trị. Tuy nhiên, quyết định đầu tư cần dựa trên tình hình tài chính cá nhân.',
    },
    {
      q: 'Nên mua vàng miếng hay vàng nhẫn?',
      a: 'Vàng miếng SJC có tính thanh khoản cao, được NHNN quản lý, phù hợp tích trữ lớn. Vàng nhẫn 9999 có chênh lệch mua-bán thấp hơn (khoảng 2 triệu đ/lượng), phù hợp đầu tư nhỏ lẻ và linh hoạt hơn khi mua bán.',
    },
    {
      q: 'Tại sao giá vàng tăng mạnh năm 2026?',
      a: 'Giá vàng tăng do nhiều yếu tố: ngân hàng trung ương các nước mua vàng kỷ lục, nợ công toàn cầu leo thang, Fed nới lỏng tiền tệ, căng thẳng địa chính trị (Mỹ-Israel tấn công Iran), và nhu cầu trú ẩn an toàn tăng cao. Từ khóa "how to buy gold" đạt đỉnh cao nhất lịch sử trên Google Trends.',
    },
    {
      q: 'Mua vàng ở đâu uy tín?',
      a: 'Nên mua tại các thương hiệu lớn: SJC (Vàng bạc đá quý Sài Gòn), DOJI, PNJ, Bảo Tín Minh Châu, Mi Hồng, Phú Quý. Các thương hiệu này có hệ thống chi nhánh tại Hà Nội, TP.HCM, Đà Nẵng và các tỉnh lớn. Luôn yêu cầu hóa đơn và giấy kiểm định khi mua.',
    },
    {
      q: 'Dự báo giá vàng tuần tới tăng hay giảm?',
      a: '67% chuyên gia Wall Street và 76% nhà đầu tư cá nhân dự đoán giá vàng tiếp tục tăng. Nếu vượt 5.250 USD có thể tiến tới 5.500 USD/ounce. Tuy nhiên, sau 3 tuần tăng liên tiếp, có thể có nhịp điều chỉnh ngắn hạn.',
    },
    {
      q: 'Giá vàng 24K và 18K khác gì vàng 9999?',
      a: 'Vàng 9999 (99.99% vàng nguyên chất) = vàng 24K, dùng cho đầu tư. Vàng 18K (75% vàng) chủ yếu dùng làm trang sức, giá thấp hơn đáng kể. Nếu mua để đầu tư, nên chọn vàng 9999/24K.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-semibold w-fit">
            <PulsingDot /> Cập nhật trực tiếp
          </span>
          <ViewerCount />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] dark:text-white/95 tracking-tight leading-tight">
          Giá vàng hôm nay
        </h1>
        <p className="mt-3 text-[#6b6b6b] dark:text-slate-400 text-base md:text-lg max-w-3xl">
          Bảng giá vàng SJC, DOJI, PNJ, Bảo Tín Minh Châu cập nhật liên tục. Giá vàng 9999, vàng
          24K, giá vàng thế giới XAU/USD vượt 5.000 USD. Dự báo giá vàng tuần tới và hướng dẫn mua
          vàng đầu tư.
        </p>
        <p className="sr-only">
          Giá vàng hôm nay mới nhất, bảng giá vàng hôm nay, giá vàng SJC miếng, vàng nhẫn 9999,
          giá vàng 24k, giá vàng 18k, giá vàng DOJI PNJ Bảo Tín Minh Châu Mi Hồng Phú Quý, bảng
          giá vàng trực tuyến, giá vàng thế giới XAU USD, giá vàng thế giới hôm nay, giá vàng tăng
          hay giảm, dự báo giá vàng tuần tới, nên mua vàng lúc nào, có nên mua vàng, cách mua vàng
          đầu tư, mua vàng ở đâu, mua bán vàng, đầu tư vàng 2026, vàng vượt 5000 USD, gold price
          today Vietnam
        </p>
      </header>

      {/* FOMO Alert Banner */}
      <div className="mb-8 p-4 md:p-5 rounded-2xl bg-linear-to-r from-red-50 to-amber-50 dark:from-red-950/40 dark:to-amber-950/40 border border-red-200/60 dark:border-red-800/40">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-2xl" aria-hidden>
              🔥
            </span>
            <span className="font-bold text-red-700 dark:text-red-400 text-sm uppercase tracking-wide">
              Nóng
            </span>
          </div>
          <p className="text-sm md:text-base text-[#1a1a1a] dark:text-white/90">
            <strong>Vàng phá đỉnh liên tiếp!</strong> Giá vàng thế giới vượt{' '}
            <strong className="text-red-700 dark:text-red-400">
              {formatVND(data.world.usdPerOunce)} USD/ounce
            </strong>
            , tăng 7 tháng liên tiếp. Bank of America dự báo vàng đạt{' '}
            <strong>6.000 USD</strong>, UBS nâng mục tiêu lên{' '}
            <strong>6.200 USD</strong> — chỉ còn cách khoảng <strong>17%</strong>.
          </p>
        </div>
      </div>

      {/* Quick Price Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <button
          type="button"
          onClick={scrollToTable}
          className="cursor-pointer text-left p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6b6b6b] dark:text-slate-400">Vàng SJC Miếng</span>
            <ChangeIndicator
              value={data.brands[0].change}
              percent={data.brands[0].changePercent}
            />
          </div>
          <div className="text-2xl font-bold text-[#1a1a1a] dark:text-white/95">
            {formatVND(data.brands[0].sellPrice)}
            <span className="text-sm font-normal text-[#6b6b6b] dark:text-slate-400 ml-1">
              đ/lượng
            </span>
          </div>
          <div className="text-xs text-[#8a8a8a] dark:text-slate-500 mt-1">
            Mua: {formatVND(data.brands[0].buyPrice)} đ
          </div>
        </button>

        <button
          type="button"
          onClick={scrollToTable}
          className="cursor-pointer text-left p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6b6b6b] dark:text-slate-400">Vàng Nhẫn 9999</span>
            <ChangeIndicator
              value={data.brands[1].change}
              percent={data.brands[1].changePercent}
            />
          </div>
          <div className="text-2xl font-bold text-[#1a1a1a] dark:text-white/95">
            {formatVND(data.brands[1].sellPrice)}
            <span className="text-sm font-normal text-[#6b6b6b] dark:text-slate-400 ml-1">
              đ/lượng
            </span>
          </div>
          <div className="text-xs text-[#8a8a8a] dark:text-slate-500 mt-1">
            Mua: {formatVND(data.brands[1].buyPrice)} đ
          </div>
        </button>

        <button
          type="button"
          onClick={scrollToTable}
          className="cursor-pointer text-left p-5 rounded-2xl bg-linear-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border border-amber-200/60 dark:border-amber-800/40 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#6b6b6b] dark:text-slate-400">Vàng Thế Giới</span>
            <ChangeIndicator
              value={data.world.change24h}
              percent={data.world.changePercent24h}
            />
          </div>
          <div className="text-2xl font-bold text-[#1a1a1a] dark:text-white/95">
            ${formatVND(data.world.usdPerOunce)}
            <span className="text-sm font-normal text-[#6b6b6b] dark:text-slate-400 ml-1">
              USD/oz
            </span>
          </div>
          <div className="text-xs text-[#8a8a8a] dark:text-slate-500 mt-1">
            ≈ {formatVND(data.world.vndPerLuong)} đ/lượng
          </div>
        </button>
      </div>

      {/* Update Time */}
      <div className="mb-6 px-1">
        <p className="text-sm text-[#6b6b6b] dark:text-slate-400">
          Cập nhật lúc:{' '}
          <span className="text-[#1a1a1a] dark:text-white/90 font-medium">{data.updatedAt}</span>
          <span className="ml-2 text-[#8a8a8a] dark:text-slate-500">(dữ liệu từ vang.today)</span>
        </p>
      </div>

      {/* Tab Navigation */}
      <div ref={sectionRef} className="mb-6">
        <div className="flex gap-1 p-1 rounded-xl bg-[#f0ede8] dark:bg-[#1a1a2e] w-fit">
          {(
            [
              { key: 'domestic', label: 'Giá trong nước' },
              { key: 'world', label: 'Giá thế giới' },
              { key: 'analysis', label: 'Phân tích' },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === key
                  ? 'bg-white dark:bg-[#2d2d3d] text-[#1a1a1a] dark:text-white shadow-sm'
                  : 'text-[#6b6b6b] dark:text-slate-400 hover:text-[#1a1a1a] dark:hover:text-white/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Domestic Price Table */}
      {activeTab === 'domestic' && (
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
            Bảng giá vàng trong nước
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#f5f3ef] dark:bg-[#1a1a2e]">
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                    Thương hiệu
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400 text-right">
                    Mua vào (đ/lượng)
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400 text-right">
                    Bán ra (đ/lượng)
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400 text-right">
                    Thay đổi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee] dark:divide-[#4a4a5a]/40">
                {data.brands.map((brand) => (
                  <tr
                    key={brand.name}
                    className="bg-white dark:bg-[#2d2d3d]/90 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 transition-colors"
                  >
                    <td className="px-4 py-3.5 font-medium text-[#1a1a1a] dark:text-white/95 text-sm">
                      {brand.name}
                    </td>
                    <td className="px-4 py-3.5 text-right text-sm text-[#1a1a1a] dark:text-white/90 tabular-nums">
                      {formatVND(brand.buyPrice)}
                    </td>
                    <td className="px-4 py-3.5 text-right text-sm font-semibold text-[#1a1a1a] dark:text-white/95 tabular-nums">
                      {formatVND(brand.sellPrice)}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <ChangeIndicator value={brand.change} percent={brand.changePercent} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-800/30">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <strong>Lưu ý:</strong> Chênh lệch giá mua - bán vàng miếng SJC khoảng{' '}
              <strong>3 triệu đ/lượng</strong>, vàng nhẫn 9999 khoảng{' '}
              <strong>2 triệu đ/lượng</strong>. Vàng nhẫn có chênh lệch thấp hơn, phù hợp mua bán
              ngắn hạn.
            </p>
          </div>
        </section>
      )}

      {/* World Price */}
      {activeTab === 'world' && (
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
            Giá vàng thế giới (XAU/USD)
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60">
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400 mb-1">Giá hiện tại</p>
              <p className="text-3xl font-bold text-[#1a1a1a] dark:text-white/95">
                ${formatVND(data.world.usdPerOunce)}
                <span className="text-sm font-normal text-[#6b6b6b] dark:text-slate-400 ml-1">
                  /oz
                </span>
              </p>
              <p className="text-sm text-[#8a8a8a] dark:text-slate-500 mt-1">
                ≈ ${data.world.usdPerGram}/gram
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60">
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400 mb-1">
                Quy đổi VNĐ (tham khảo)
              </p>
              <p className="text-3xl font-bold text-[#1a1a1a] dark:text-white/95">
                {formatVND(data.world.vndPerLuong)}
                <span className="text-sm font-normal text-[#6b6b6b] dark:text-slate-400 ml-1">
                  đ/lượng
                </span>
              </p>
              <p className="text-sm text-[#8a8a8a] dark:text-slate-500 mt-1">
                Tỷ giá: 1 USD = {formatVND(25_850)} VNĐ
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60 mb-6">
            <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 mb-3">
              Biến động 24h qua
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-[#8a8a8a] dark:text-slate-500">Thay đổi</p>
                <ChangeIndicator
                  value={data.world.change24h}
                  percent={data.world.changePercent24h}
                />
              </div>
              <div>
                <p className="text-xs text-[#8a8a8a] dark:text-slate-500">Cao nhất ngày</p>
                <p className="font-semibold text-[#1a1a1a] dark:text-white/90 text-sm">
                  $5.310
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8a8a8a] dark:text-slate-500">Thấp nhất ngày</p>
                <p className="font-semibold text-[#1a1a1a] dark:text-white/90 text-sm">
                  $5.192
                </p>
              </div>
              <div>
                <p className="text-xs text-[#8a8a8a] dark:text-slate-500">YTD</p>
                <p className="font-semibold text-green-600 dark:text-green-400 text-sm">
                  +9.2%
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200/40 dark:border-red-800/30">
            <p className="text-sm text-red-800 dark:text-red-300">
              <strong>Chênh lệch giá trong nước - thế giới:</strong> Vàng SJC miếng đang cao hơn
              giá thế giới quy đổi khoảng{' '}
              <strong>
                {formatVND(data.brands[0].sellPrice - data.world.vndPerLuong)} đ/lượng
              </strong>
              . Đây là mức chênh lệch đáng chú ý, cho thấy nhu cầu vàng trong nước rất cao.
            </p>
          </div>
        </section>
      )}

      {/* Analysis Tab */}
      {activeTab === 'analysis' && (
        <section className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
            Phân tích & Dự báo giá vàng 2026
          </h2>

          {/* Expert Predictions */}
          <div className="mb-6 p-5 rounded-2xl bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/60 dark:border-amber-800/40">
            <h3 className="font-bold text-[#1a1a1a] dark:text-white/95 mb-4 flex items-center gap-2">
              <span aria-hidden>📊</span> Dự báo từ các ngân hàng lớn
            </h3>
            <div className="space-y-3">
              {[
                {
                  bank: 'UBS',
                  target: '6.200 USD/oz',
                  timeline: 'Giữa năm 2026',
                  upside: '+17%',
                },
                {
                  bank: 'Bank of America',
                  target: '6.000 USD/oz',
                  timeline: 'Mùa xuân 2026',
                  upside: '+14%',
                },
                {
                  bank: 'JP Morgan',
                  target: '5.500 USD/oz',
                  timeline: 'Q3 2026',
                  upside: '+4%',
                },
                {
                  bank: 'Goldman Sachs',
                  target: '4.900 USD/oz',
                  timeline: 'Cuối 2026',
                  upside: 'Đã vượt',
                },
              ].map((pred) => (
                <div
                  key={pred.bank}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-xl bg-white/70 dark:bg-[#2d2d3d]/50"
                >
                  <div>
                    <p className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm">
                      {pred.bank}
                    </p>
                    <p className="text-xs text-[#8a8a8a] dark:text-slate-500">{pred.timeline}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-amber-700 dark:text-amber-400">
                      {pred.target}
                    </span>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                      {pred.upside}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-amber-800 dark:text-amber-300 font-medium">
              Vàng đã vượt mốc 5.000 USD/ounce — đúng như 80% chuyên gia Phố Wall dự đoán. Mục tiêu tiếp theo: 6.000-6.200 USD.
            </p>
          </div>

          {/* Key Factors */}
          <div className="mb-6 p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60">
            <h3 className="font-bold text-[#1a1a1a] dark:text-white/95 mb-4">
              Yếu tố hỗ trợ giá vàng tăng
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  icon: '🏦',
                  title: 'Ngân hàng trung ương mua ròng',
                  desc: 'NHTW các nước mua vàng kỷ lục, chiếm 15% dự trữ, có thể lên 30%',
                },
                {
                  icon: '💰',
                  title: 'Nợ công toàn cầu leo thang',
                  desc: 'Nợ chính phủ tăng vọt, đồng USD suy yếu, vàng là nơi trú ẩn an toàn',
                },
                {
                  icon: '📉',
                  title: 'Fed nới lỏng tiền tệ',
                  desc: 'Lãi suất giảm làm chi phí cơ hội nắm giữ vàng thấp hơn',
                },
                {
                  icon: '🌍',
                  title: 'Căng thẳng địa chính trị',
                  desc: 'Bất ổn toàn cầu đẩy nhu cầu tài sản an toàn tăng cao',
                },
                {
                  icon: '⛏️',
                  title: 'Nguồn cung hạn chế',
                  desc: 'Chi phí khai thác tăng, sản lượng mỏ giảm, nguồn cung không theo kịp cầu',
                },
                {
                  icon: '📈',
                  title: 'Dòng tiền đầu tư',
                  desc: 'Vàng chỉ chiếm 0.5% danh mục nhà đầu tư, tiềm năng tái phân bổ rất lớn',
                },
              ].map((factor) => (
                <div key={factor.title} className="flex gap-3 p-3 rounded-xl bg-[#faf8f5] dark:bg-[#1a1a2e]/50">
                  <span className="text-xl shrink-0" aria-hidden>
                    {factor.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm">
                      {factor.title}
                    </p>
                    <p className="text-xs text-[#6b6b6b] dark:text-slate-400 mt-0.5">
                      {factor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending News */}
          <div className="mb-6 p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60">
            <h3 className="font-bold text-[#1a1a1a] dark:text-white/95 mb-4 flex items-center gap-2">
              <span aria-hidden>📰</span> Tin nóng thị trường vàng
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Vàng vượt 5.000 USD — cả thế giới tìm cách mua vàng',
                  desc: 'Từ khóa "how to buy gold" đạt đỉnh cao nhất lịch sử trên Google Trends kể từ năm 2004. Nhu cầu đầu tư vàng toàn cầu tăng vọt.',
                  tag: 'Trending',
                },
                {
                  title: 'Mỹ-Israel tấn công Iran — vàng có thể vượt 5.500 USD',
                  desc: 'Căng thẳng địa chính trị leo thang đẩy giá vàng tăng mạnh. 67% chuyên gia Wall Street kỳ vọng giá tiếp tục tăng tuần tới.',
                  tag: 'Địa chính trị',
                },
                {
                  title: 'Ngân hàng trung ương mua vàng kỷ lục — chiếm 15% dự trữ',
                  desc: 'Các NHTW tin tưởng vàng hơn USD. Tỷ lệ dự trữ vàng có thể tăng lên 30%, tạo nhu cầu mua ròng chưa từng có.',
                  tag: 'NHTW',
                },
              ].map((news) => (
                <div key={news.title} className="p-3 rounded-xl bg-[#faf8f5] dark:bg-[#1a1a2e]/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                      {news.tag}
                    </span>
                  </div>
                  <p className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm">
                    {news.title}
                  </p>
                  <p className="text-xs text-[#6b6b6b] dark:text-slate-400 mt-1">{news.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FOMO Urgency */}
          <div className="p-5 rounded-2xl bg-linear-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-2 border-red-300/60 dark:border-red-700/40">
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0" aria-hidden>
                ⚠️
              </span>
              <div>
                <h3 className="font-bold text-red-800 dark:text-red-300 text-lg mb-2">
                  Đừng bỏ lỡ cơ hội!
                </h3>
                <p className="text-sm text-red-700 dark:text-red-300/90 mb-3">
                  Trong 12 tháng qua, giá vàng thế giới đã tăng từ ~2.800 USD lên hơn{' '}
                  <strong>5.200 USD/ounce (+85%)</strong>. Những ai mua vàng đầu năm 2025 đã lãi{' '}
                  <strong>hơn 50 triệu đồng mỗi lượng</strong>. Với dự báo vàng có thể đạt{' '}
                  <strong>6.000-6.200 USD</strong>, mỗi ngày chần chừ là mỗi ngày mất cơ hội.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-semibold">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600" />
                    </span>
                    Nhu cầu tăng kỷ lục
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                    Nguồn cung hạn chế
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold">
                    80% chuyên gia lạc quan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Investment Guide */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
          Hướng dẫn mua vàng đầu tư
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              step: '01',
              title: 'Chọn loại vàng phù hợp',
              desc: 'Vàng miếng SJC cho tích trữ lớn, vàng nhẫn 9999 cho đầu tư linh hoạt. Vàng nhẫn có chênh lệch mua-bán thấp hơn.',
            },
            {
              step: '02',
              title: 'Mua tại đại lý uy tín',
              desc: 'Chỉ mua tại SJC, DOJI, PNJ, Bảo Tín Minh Châu hoặc các ngân hàng lớn. Luôn lấy hóa đơn và giấy kiểm định.',
            },
            {
              step: '03',
              title: 'Chia nhỏ vốn đầu tư',
              desc: 'Không dồn hết vốn một lần. Mua dần theo phương pháp DCA (Dollar Cost Averaging) để giảm rủi ro biến động giá.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-2xl bg-white dark:bg-[#2d2d3d]/90 border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <span className="inline-block text-3xl font-black text-amber-500/30 dark:text-amber-400/20 mb-2">
                {item.step}
              </span>
              <h3 className="font-semibold text-[#1a1a1a] dark:text-white/95 mb-2">{item.title}</h3>
              <p className="text-sm text-[#6b6b6b] dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Price Comparison */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
          So sánh giá vàng miếng và vàng nhẫn
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#eee] dark:border-[#4a4a5a]/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f5f3ef] dark:bg-[#1a1a2e]">
                <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                  Tiêu chí
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                  Vàng miếng SJC
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-[#6b6b6b] dark:text-slate-400">
                  Vàng nhẫn 9999
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee] dark:divide-[#4a4a5a]/40">
              {[
                ['Giá bán', `${formatVND(data.brands[0].sellPrice)} đ`, `${formatVND(data.brands[1].sellPrice)} đ`],
                ['Chênh mua-bán', '~3 triệu đ/lượng', '~2 triệu đ/lượng'],
                ['Độ tinh khiết', '99.99%', '99.99%'],
                ['Thanh khoản', 'Rất cao', 'Cao'],
                ['Quản lý', 'NHNN quản lý', 'Doanh nghiệp'],
                ['Phù hợp', 'Tích trữ lớn, dài hạn', 'Đầu tư linh hoạt, nhỏ lẻ'],
              ].map(([criteria, sjc, nhan]) => (
                <tr
                  key={criteria}
                  className="bg-white dark:bg-[#2d2d3d]/90"
                >
                  <td className="px-4 py-3 text-sm font-medium text-[#1a1a1a] dark:text-white/95">
                    {criteria}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#1a1a1a] dark:text-white/90">{sjc}</td>
                  <td className="px-4 py-3 text-sm text-[#1a1a1a] dark:text-white/90">{nhan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] dark:text-white/95 mb-5">
          Câu hỏi thường gặp về giá vàng
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#eee] dark:border-[#4a4a5a]/60 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setShowFaq(showFaq === i ? null : i)}
                className="cursor-pointer w-full flex items-center justify-between p-4 md:p-5 text-left bg-white dark:bg-[#2d2d3d]/90 hover:bg-[#faf8f5] dark:hover:bg-[#333344]/95 transition-colors"
                aria-expanded={showFaq === i}
              >
                <span className="font-semibold text-[#1a1a1a] dark:text-white/95 text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-[#6b6b6b] dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                    showFaq === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              {showFaq === i && (
                <div className="px-4 pb-4 md:px-5 md:pb-5 bg-white dark:bg-[#2d2d3d]/90">
                  <p className="text-sm text-[#6b6b6b] dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom FOMO CTA */}
      <section className="mb-6 p-6 md:p-8 rounded-2xl bg-linear-to-br from-[#1a1a1a] to-[#2d2d2d] dark:from-[#0a0f1a] dark:to-[#1a1a2e] text-white">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Thông tin quan trọng
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vàng đã tăng <span className="text-amber-400">hơn 85%</span> trong 12 tháng
          </h2>
          <p className="text-white/70 mb-6 text-sm md:text-base leading-relaxed">
            Nếu bạn mua 1 lượng vàng SJC đầu năm 2025 (~90 triệu đ), hiện tại giá trị đã lên{' '}
            <strong className="text-amber-400">~185 triệu đ — lãi gần 95 triệu đồng</strong>. Các
            chuyên gia dự báo đà tăng vẫn chưa dừng lại.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-xl bg-white/10">
              <p className="text-white/60 text-xs">Đầu năm 2025</p>
              <p className="font-bold text-white">~90 triệu đ/lượng</p>
            </div>
            <div className="flex items-center text-amber-400 font-bold">→</div>
            <div className="px-4 py-2 rounded-xl bg-white/10">
              <p className="text-white/60 text-xs">Hiện tại</p>
              <p className="font-bold text-amber-400">
                ~{formatVND(data.brands[0].sellPrice / 1_000_000)} triệu đ/lượng
              </p>
            </div>
            <div className="flex items-center text-green-400 font-bold">→</div>
            <div className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/30">
              <p className="text-white/60 text-xs">Dự báo cuối 2026</p>
              <p className="font-bold text-amber-400">~220+ triệu đ/lượng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="text-xs text-[#8a8a8a] dark:text-slate-500 leading-relaxed">
        <p>
          <strong>Miễn trừ trách nhiệm:</strong> Thông tin giá vàng trên trang này chỉ mang tính
          chất tham khảo, không phải lời khuyên đầu tư. Giá vàng có thể thay đổi nhanh chóng trong
          ngày. Vui lòng liên hệ trực tiếp các thương hiệu vàng (SJC, DOJI, PNJ) để có giá chính
          xác nhất. Đầu tư vàng có rủi ro, hãy cân nhắc kỹ trước khi quyết định.
        </p>
      </div>
    </>
  );
}
