import cn from 'classnames';
import * as React from 'react';

import styles from './ScreenLayout.module.css';

interface ScreenLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export function ScreenLayout(props: ScreenLayoutProps) {
    return (
        <main className={cn(styles.root, props.className)}>
            {props.children}
        </main>
    );
}
