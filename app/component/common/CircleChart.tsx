import React from "react";

const CircularProgress = ({ value }: { value: number }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg
        className="transform rotate-[-90deg]"
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
      >
       
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#FFBA08"
          strokeWidth="10"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#4caf50"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>
      {/* Text in the center */}
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {value}%
      </div>
    </div>
  );
};

export default CircularProgress;
