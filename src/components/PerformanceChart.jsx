import React from 'react';

const PerformanceChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="w-full max-w-lg">
        <svg width="100%" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Background */}
          <rect width="600" height="400" fill="#f8fafc"/>
          
          {/* Grid lines */}
          <g stroke="#e2e8f0" strokeWidth="1">
            <line x1="80" y1="80" x2="520" y2="80"/>
            <line x1="80" y1="120" x2="520" y2="120"/>
            <line x1="80" y1="160" x2="520" y2="160"/>
            <line x1="80" y1="200" x2="520" y2="200"/>
            <line x1="80" y1="240" x2="520" y2="240"/>
            <line x1="80" y1="280" x2="520" y2="280"/>
            <line x1="80" y1="320" x2="520" y2="320"/>
          </g>
          
          {/* Y-axis labels */}
          <g fontFamily="Arial, sans-serif" fontSize="12" fill="#64748b" textAnchor="end">
            <text x="70" y="85">100</text>
            <text x="70" y="125">80</text>
            <text x="70" y="165">60</text>
            <text x="70" y="205">40</text>
            <text x="70" y="245">20</text>
            <text x="70" y="285">0</text>
          </g>
          
          {/* Pass Mark line */}
          <line x1="80" y1="160" x2="520" y2="160" stroke="#22c55e" strokeWidth="3"/>
          <text x="530" y="165" fontFamily="Arial, sans-serif" fontSize="12" fill="#22c55e" fontWeight="bold">Pass Mark</text>
          
          {/* X-axis labels */}
          <g fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b" textAnchor="middle" transform="rotate(-45)">
            <text x="120" y="370">Polymer Sc.</text>
            <text x="180" y="370">Urban Dev.</text>
            <text x="240" y="370">Design Sc.</text>
            <text x="300" y="370">Geographic Sc.</text>
            <text x="360" y="370">Architecture</text>
            <text x="420" y="370">Solar Sc.</text>
            <text x="480" y="370">Mathmatics</text>
          </g>
          
          {/* 4th Term Exam (Blue line) */}
          <g stroke="#3b82f6" strokeWidth="3" fill="none">
            <path d="M 120 200 L 180 120 L 240 160 L 300 140 L 360 200 L 420 160 L 480 200"/>
            <circle cx="120" cy="200" r="4" fill="#3b82f6"/>
            <circle cx="180" cy="120" r="4" fill="#3b82f6"/>
            <circle cx="240" cy="160" r="4" fill="#3b82f6"/>
            <circle cx="300" cy="140" r="4" fill="#3b82f6"/>
            <circle cx="360" cy="200" r="4" fill="#3b82f6"/>
            <circle cx="420" cy="160" r="4" fill="#3b82f6"/>
            <circle cx="480" cy="200" r="4" fill="#3b82f6"/>
          </g>
          
          {/* 5th Term Exam (Orange line) */}
          <g stroke="#f97316" strokeWidth="3" fill="none">
            <path d="M 120 180 L 180 140 L 240 120 L 300 180 L 360 120 L 420 200 L 480 140"/>
            <circle cx="120" cy="180" r="4" fill="#f97316"/>
            <circle cx="180" cy="140" r="4" fill="#f97316"/>
            <circle cx="240" cy="120" r="4" fill="#f97316"/>
            <circle cx="300" cy="180" r="4" fill="#f97316"/>
            <circle cx="360" cy="120" r="4" fill="#f97316"/>
            <circle cx="420" cy="200" r="4" fill="#f97316"/>
            <circle cx="480" cy="140" r="4" fill="#f97316"/>
          </g>
          
          {/* Legend */}
          <g fontFamily="Arial, sans-serif" fontSize="12">
            <line x1="80" y1="340" x2="100" y2="340" stroke="#3b82f6" strokeWidth="3"/>
            <text x="110" y="345" fill="#374151">4th Term Exam - March, 2022</text>
            
            <line x1="80" y1="360" x2="100" y2="360" stroke="#f97316" strokeWidth="3"/>
            <text x="110" y="365" fill="#374151">5th Term Exam - June, 2022</text>
          </g>
          
          {/* Title */}
          <text x="300" y="30" fontFamily="Arial, sans-serif" fontSize="18" fill="#1f2937" textAnchor="middle" fontWeight="bold">
            Student Performance Overview
          </text>
          
          {/* Data point highlights */}
          <g>
            {/* Urban Dev. highlight (Blue) */}
            <circle cx="180" cy="120" r="6" fill="#3b82f6" opacity="0.8"/>
            <text x="190" y="110" fontFamily="Arial, sans-serif" fontSize="10" fill="#1f2937" fontWeight="bold">76/100</text>
            <text x="190" y="125" fontFamily="Arial, sans-serif" fontSize="8" fill="#6b7280">4th term, March</text>
            
            {/* Architecture highlight (Orange) */}
            <circle cx="360" cy="120" r="6" fill="#f97316" opacity="0.8"/>
            <text x="370" y="110" fontFamily="Arial, sans-serif" fontSize="10" fill="#1f2937" fontWeight="bold">77/100</text>
            <text x="370" y="125" fontFamily="Arial, sans-serif" fontSize="8" fill="#6b7280">5th term, June</text>
            
            {/* Geographic Sc. highlight (Blue) */}
            <circle cx="300" cy="140" r="6" fill="#3b82f6" opacity="0.8"/>
            <text x="310" y="130" fontFamily="Arial, sans-serif" fontSize="10" fill="#1f2937" fontWeight="bold">62/100</text>
            <text x="310" y="145" fontFamily="Arial, sans-serif" fontSize="8" fill="#6b7280">4th term, March</text>
            
            {/* Mathmatics highlight (Orange) */}
            <circle cx="480" cy="140" r="6" fill="#f97316" opacity="0.8"/>
            <text x="490" y="130" fontFamily="Arial, sans-serif" fontSize="10" fill="#1f2937" fontWeight="bold">62/100</text>
            <text x="490" y="145" fontFamily="Arial, sans-serif" fontSize="8" fill="#6b7280">5th term, June</text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PerformanceChart;


