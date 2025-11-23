import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa'],
  animationSpeed = 1,
  showBorder = false,
  style,
  plain = false
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  const overlayStyle: React.CSSProperties = {
    ...gradientStyle,
    backgroundSize: '300% 100%',
    backgroundPosition: '0% 50%',
    animationName: 'gradient',
    WebkitAnimationName: 'gradient' as any,
    animationDuration: `${animationSpeed}s`,
    WebkitAnimationDuration: `${animationSpeed}s` as any,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  const textStyle: React.CSSProperties = {
    ...gradientStyle,
    backgroundSize: '300% 100%',
    backgroundPosition: '0% 50%',
    WebkitBackgroundClip: 'text' as any,
    backgroundClip: 'text' as any,
    WebkitTextFillColor: 'transparent' as any,
    color: 'transparent',
    animationName: 'gradient',
    WebkitAnimationName: 'gradient' as any,
    animationDuration: `${animationSpeed}s`,
    WebkitAnimationDuration: `${animationSpeed}s` as any,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  };

  // If `plain` is true, render solid text without clipped background/animation
  const plainTextStyle: React.CSSProperties = {
    color: style?.color ?? 'var(--heading-color)',
    WebkitTextFillColor: style?.color ?? 'var(--heading-color)'
  };

  return (
    <div className={`animated-gradient-text ${className}`.trim()} style={style}>
      {showBorder && !plain && <div className="gradient-overlay" style={overlayStyle} />}
      <div className="text-content" style={plain ? plainTextStyle : textStyle}>
        {children}
      </div>
    </div>
  );
}
