import React, { useEffect, useState } from "react";

interface StatCounterProps {
  end: number;
  duration?: number;
}

export default function StatCounter({ end, duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <h3>{count}+</h3>;
}
