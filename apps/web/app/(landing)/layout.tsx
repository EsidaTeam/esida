export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="p-2 font-bold">
                Esida
            </header>
            <main className="p-2">
                {children}
            </main>
        </>
    );
}