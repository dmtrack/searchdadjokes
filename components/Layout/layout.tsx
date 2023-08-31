import React from 'react';
import styles from './Layout.module.scss';
import firasans from '../../utils/fonts/firasans';
import cn from 'classnames';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={cn(styles.section, firasans.className)}>{children}</div>
    );
}
