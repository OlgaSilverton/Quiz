import cn from 'classnames';
import * as React from 'react';

import styles from './Card.module.css';

interface CardProps {
    text: string;
    imageUrl?: string;
    className?: string;
}

export function Card(props: CardProps) {
    return (
        <div className={cn(styles.root, props.className)}>
            {props.imageUrl && (
                <img src={props.imageUrl} className={styles.image} />
            )}
            <p className={styles.text}>{props.text}</p>
        </div>
    );
}
