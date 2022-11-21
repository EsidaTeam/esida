export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header>
                Esida
            </header>
            <main>
                {children}
            </main>
        </>
    );
}