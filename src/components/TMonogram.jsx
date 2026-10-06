import React from 'react';

/**
 * Standout T Monogram Logo for Tahir
 * Features architectural geometry, obsidian/cyan cyber gradients,
 * micro-bevel facets, and an ambient luminescence glow filter.
 */
export default function TMonogram({ size = 38, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`t-monogram-logo ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient Glow */}
        <filter id="tMonoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#38bdf8" floodOpacity="0.3" />
        </filter>

        {/* Obsidian Glass Canvas Gradient */}
        <linearGradient id="tCanvasGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0e1726" />
          <stop offset="50%" stopColor="#070b14" />
          <stop offset="100%" stopColor="#020408" />
        </linearGradient>

        {/* Premium Border Gradient */}
        <linearGradient id="tBorderGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* Crossbar Highlight Gradient */}
        <linearGradient id="tCrossbarGrad" x1="8" y1="10" x2="36" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>

        {/* Stem Gradient */}
        <linearGradient id="tStemGrad" x1="18" y1="16" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Outer Squircle Container with Glow */}
      <rect
        x="2"
        y="2"
        width="40"
        height="40"
        rx="11"
        fill="url(#tCanvasGrad)"
        stroke="url(#tBorderGrad)"
        strokeWidth="1.5"
        filter="url(#tMonoGlow)"
      />

      {/* Decorative Inner Grid Accent Line */}
      <line x1="6" y1="22" x2="38" y2="22" stroke="rgba(56, 189, 248, 0.12)" strokeDasharray="2 3" />
      <line x1="22" y1="6" x2="22" y2="38" stroke="rgba(56, 189, 248, 0.12)" strokeDasharray="2 3" />

      {/* T Monogram Body */}
      <path
        d="M10 16.5L13 11H31L34 16.5H25.5V31.5C25.5 32.88 24.38 34 23 34H21C19.62 34 18.5 32.88 18.5 31.5V16.5H10Z"
        fill="url(#tStemGrad)"
      />

      {/* Top Crossbar Highlight Layer */}
      <path
        d="M13 11H31L33 14.5H11L13 11Z"
        fill="url(#tCrossbarGrad)"
      />

      {/* Cyber Engineering Accent Diamond */}
      <polygon
        points="32,9.5 34.5,12 32,14.5 29.5,12"
        fill="#38bdf8"
      />
      <circle cx="32" cy="12" r="1" fill="#ffffff" />
    </svg>
  );
}
