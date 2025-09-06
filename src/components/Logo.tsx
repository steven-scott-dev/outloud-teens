import React from "react";
import NeonLogo from "../assets/logo2.jpg";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = "md", 
  showText = true, 
  className = "" 
}) => {
  // Responsive size classes for different breakpoints
  const sizeClasses = {
    xs: "h-6 md:h-7",           // 24px → 28px
    sm: "h-7 md:h-8",           // 28px → 32px  
    md: "h-8 md:h-10 lg:h-12",  // 32px → 40px → 48px
    lg: "h-10 md:h-12 lg:h-14", // 40px → 48px → 56px
    xl: "h-12 md:h-16 lg:h-20", // 48px → 64px → 80px
  };

  const textSizeClasses = {
    xs: "text-sm md:text-base",
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl lg:text-2xl",
    lg: "text-xl md:text-2xl lg:text-3xl",
    xl: "text-2xl md:text-3xl lg:text-4xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={NeonLogo} 
        alt="OutLoud Teens Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
      {showText && (
        <span className={`${textSizeClasses[size]} font-extrabold tracking-wide`}>
          OutLoud Teens
        </span>
      )}
    </div>
  );
};

export default Logo;