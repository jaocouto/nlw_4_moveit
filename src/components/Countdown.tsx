import { useState, useEffect, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/Countdown.module.css";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button type="button" className={styles.countdownButton} disabled>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {" "}
          {isActive ? (
            <button
              type="button"
              className={styles.countdownButtonCancel}
              onClick={() => resetCountDown()}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={() => startCountDown()}
            >
              Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
