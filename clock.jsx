import React, { useState, useEffect } from "react";

function App1() {
  const [time, setTime] = useState({ hour: "", minutes: "", seconds: "", session: "" });

  useEffect(() => {
    function showTime() {
      const date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let session = "AM";

      if (h === 0) {
        h = 12;
      }
      if (h > 12) {
        h -= 12;
        session = "PM";
      }

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;

      setTime({ hour: h, minutes: m, seconds: s, session });
    }

    const interval = setInterval(showTime, 1000);
    showTime(); // Initial call

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock" style={{ fontSize: "7rem", fontFamily: "Arial, sans-serif" }}>
      <span>{time.hour}:{time.minutes}:{time.seconds}</span> 
      <span style={{ marginLeft: "10px" }}>{time.session}</span>
    </div>
  );
}

export default App1;
