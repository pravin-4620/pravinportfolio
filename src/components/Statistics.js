import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Coffee, Star } from 'lucide-react';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: <Award size={32} />, value: 50, label: 'Projects Completed', suffix: '+' },
    { icon: <Users size={32} />, value: 30, label: 'Happy Clients', suffix: '+' },
    { icon: <Coffee size={32} />, value: 1000, label: 'Cups of Coffee', suffix: '+' },
    { icon: <Star size={32} />, value: 5, label: 'Years Experience', suffix: '' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, 16);
    });
  }, [isVisible]);

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">
                {counts[index]}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
