import React from 'react';
import Search from '../components/Search';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Search />
            {children}
        </>
    );
}
