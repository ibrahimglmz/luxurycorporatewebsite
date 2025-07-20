"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { number: 20, suffix: "+", label: "Yıllık Tecrübe" },
  { number: 100, suffix: "+", label: "Mutlu Müşteri" },
  { number: 10, suffix: "+", label: "Ülke" },
  { number: 50, suffix: "+", label: "Personel" },
];

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let startTime = null;
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-title">
      {count}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="w-full bg-bg py-8 sm:py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center px-4">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="flex flex-col items-center bg-card rounded-xl shadow p-4 sm:p-6 border border-bg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <AnimatedCounter 
              target={stat.number} 
              suffix={stat.suffix} 
              duration={2000 + index * 500}
            />
            <span className="text-sm sm:text-lg md:text-xl font-medium text-text mt-2 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
} 