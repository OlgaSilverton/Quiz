import cn from 'classnames';
import * as React from 'react';

import styles from './RadioButton.module.css';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string;
}

export function RadioButton(props: RadioButtonProps) {
    return (
        <label
            className={cn(
                styles.root,
                props.disabled && styles.disabled,
                props.className
            )}
        >
            <input
                className={styles.input}
                type="radio"
                value={props.value}
                checked={props.checked}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.text}
        </label>
    );
}
