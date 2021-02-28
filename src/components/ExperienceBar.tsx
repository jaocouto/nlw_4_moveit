import styles from "../styles/ExperienceBar.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext } from "react";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percent = currentExperience / experienceToNextLevel * 100;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percent}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percent}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
