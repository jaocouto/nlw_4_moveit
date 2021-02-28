import styles from "../styles/Profile.module.css";
import {ChallengesContext} from '../contexts/ChallengesContext';
import {useContext} from 'react';

export default function Profile() {
const {level} = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jaocouto.png" alt="joao" />
      <div>
        <strong>Joao</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
