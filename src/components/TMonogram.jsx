import React from 'react';

/**
 * TMonogram - Modern, professional single-letter T brand logo for Tahir.
 * Designed with geometric precision, subtle gradients, and dark/light mode compatibility.
 */
export default function TMonogram({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`t-monogram-logo ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tMonoBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="tMonoBorder" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="tGlyphGrad" x1="10" y1="11" x2="30" y2="29" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f9ff" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Background */}
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="10"
        fill="url(#tMonoBg)"
        stroke="url(#tMonoBorder)"
        strokeWidth="1.5"
      />

      {/* Geometric 'T' Glyph */}
      <path
        d="M10 11H30C30.5523 11 31 11.4477 31 12V15.5C31 16.0523 30.5523 16.5 30 16.5H23V27.5C23 28.3284 22.3284 29 21.5 29H18.5C17.6716 29 17 28.3284 17 27.5V16.5H10C9.44772 16.5 9 16.0523 9 15.5V12C9 11.4477 9.44772 11 10 11Z"
        fill="url(#tGlyphGrad)"
      />

      {/* Engineering Accent Dot */}
      <circle cx="28.5" cy="12.5" r="1.5" fill="#38bdf8" />
    </svg>
  );
}
