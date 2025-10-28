import { useState, useEffect, useRef } from "react";
import "./VisitorCounter.css";

function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const hasIncremented = useRef(false);

  useEffect(() => {
    if (hasIncremented.current) {
      // 如果已经执行过，只显示当前值，不增加
      const visits = parseInt(localStorage.getItem('visitCount')) || 0;
      setCount(visits);
      return;
    }
    hasIncremented.current = true;
    let visits = localStorage.getItem("visitCount");
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits) + 1;
    }
    localStorage.setItem("visitCount", visits);

    setIsAnimating(true);
    let current = 0;
    const increment = Math.ceil(visits / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= visits) {
        setCount(visits);
        clearInterval(timer);
        setIsAnimating(false);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="visitor-counter">
      <div className="counter-header">
        <span className="counter-icon">👥</span>
        <h3>VISITORS</h3>
      </div>
      <div className="counter-display">
        <div className={`counter-number ${isAnimating ? "animating" : ""}`}>
          {formatNumber(count)}
        </div>
        <div className="counter-label">Total Views</div>
      </div>
      <div className="counter-bar">
        <div className="counter-bar-fill"></div>
      </div>
    </div>
  );
}

export default VisitorCounter;
