// components
import Button from '../components/Button.tsx';
// styles
import styles from './StepIntro.module.css';

export default function StepIntro() {
    return(
        <>
            <div className={styles.container}>
                <p>Klicke auf den Button um zu Starten</p>
                <Button />
            </div>
        </>
    )
}