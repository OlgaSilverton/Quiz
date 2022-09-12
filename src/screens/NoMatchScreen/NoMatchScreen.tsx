import { LinkButton } from '../../components/Button/Button';
import { ScreenLayout } from '../../components/ScreenLayout/ScreenLayout';

import styles from './NoMatchScreen.module.css';

function NoMatchScreen() {
    return (
        <ScreenLayout>
            <p>There's nothing here!</p>
            <LinkButton to="/" className={styles.button}>
                Go to Main Page
            </LinkButton>
        </ScreenLayout>
    );
}

export default NoMatchScreen;
