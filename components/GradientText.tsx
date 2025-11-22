import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  const overlayStyle: React.CSSProperties = {
    ...gradientStyle,
    backgroundSize: '300% 100%',
    animationName: 'gradient',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  const textStyle: React.CSSProperties = {
    ...gradientStyle,
    backgroundSize: '300% 100%',
    WebkitBackgroundClip: 'text' as any,
    backgroundClip: 'text' as any,
    WebkitTextFillColor: 'transparent' as any,
    color: 'transparent',
    animationName: 'gradient',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  return (
    <div className={`animated-gradient-text ${className}`.trim()}>
      {showBorder && <div className="gradient-overlay" style={overlayStyle} />}
      <div className="text-content" style={textStyle}>
        {children}
      </div>
    </div>
  );
}
