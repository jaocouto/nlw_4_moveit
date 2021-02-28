
import styles from '../styles/CompletedChangelles.module.css'
import {ChallengesContext} from '../contexts/ChallengesContext';
import {useContext} from 'react';
export default function CompletedChallenges(){

    const {challengesCompleted} = useContext(ChallengesContext);

return(
    <div className={styles.completedChallengesContainer}>
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
    </div>
);
}