import React, { useState, useEffect } from "react";
import "../styles.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  return (
    <>
      <div className="Tclock">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </>
  );
};

export default Clock;
