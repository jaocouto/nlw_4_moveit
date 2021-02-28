import {useContext} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';
import {CountdownContext} from '../contexts/CountdownContext';

import styles from "../styles/ChallengeBox.module.css";

export default function ChallengeBox() {
  const {activeChallenge,completeChallenge,resetChallenge} = useContext(ChallengesContext);
  const { resetCountDown} = useContext(CountdownContext);

  const hasActiveChallenge = true;

  function clickFailed(){
    resetChallenge();
    resetCountDown();
  }

  function clickComplete(){
    completeChallenge();
    resetCountDown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
            <header> Ganhe {activeChallenge.amount} xp</header>
            <main>
                <img src={`icons/${activeChallenge.type}.svg`}/>
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
            </main>
            <footer>
                <button type="button" onClick={clickFailed} className={styles.challengeFailed}>Falhei</button>
                <button type="button" onClick={clickComplete} className={styles.challengeSuccess}>Completei</button>

            </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo</strong>
          <p>
            <img src="icons/level-up.svg" alt="" />
            Avance
          </p>
        </div>
      )}
    </div>
  );
}
