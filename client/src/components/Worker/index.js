/*
  Displays worker info
*/
import React from "react";
import { useState, useEffect } from "react";

export default function Worker({ isBusy, model_id, startTime }) {
  const [dur, setDur] = useState(0);

  useEffect(() => {
    if (!startTime) {
      return;
    }
    const updateDur = () => {
      const thisTime = Date.now();
      setDur(((thisTime - startTime) / 1000).toFixed(1));
    };
    updateDur();
    const interval = setInterval(() => {
      updateDur();
    }, 100);
    return () => clearInterval(interval);
  }, [isBusy, startTime]);

  return (
    <div
      style={{
        display: "flex",
        borderLeft: "1px solid rgba(124, 115, 102, 0.7)",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        margin: 0,
        padding: "0.4em",
      }}
    >
      <h4 style={{ margin: 0, marginLeft: "1em", marginRight: "1em" }}>
        {isBusy ? "Running for " + dur + " seconds..." : "Idle worker"}
      </h4>
      <p style={{ margin: 0, marginLeft: "1em", marginRight: "1em" }}>
        {model_id}
      </p>
    </div>
  );
}