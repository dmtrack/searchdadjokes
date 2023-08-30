import React from 'react';
import Search from '../Search';
import styles from './Layout.module.scss';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.section}>
                <Search />
                {children}
            </div>
        </>
    );
}
