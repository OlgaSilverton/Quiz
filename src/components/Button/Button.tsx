import cn from 'classnames';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import styles from './Button.module.css';

interface LinkButtonProps extends LinkProps {
    disabled?: boolean;
}

export function LinkButton(props: LinkButtonProps) {
    const { className, disabled, ...linkProps } = props;

    return (
        <Link
            className={cn(
                styles.root,
                styles.link,
                disabled && styles.disabled,
                className
            )}
            {...linkProps}
        />
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
    const { className, ...htmlButtonProps } = props;

    return (
        <button
            className={cn(
                styles.root,
                styles.button,
                htmlButtonProps.disabled && styles.disabled,
                className
            )}
            {...htmlButtonProps}
        />
    );
}
