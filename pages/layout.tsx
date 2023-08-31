import React from 'react';
import Search from '../components/Search';
import styles from '../components/Layout/Layout.module.scss';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.section}>
                {/* <Search /> */}
                {children}
            </div>
        </>
    );
}
