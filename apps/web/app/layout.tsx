export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head lang="en">
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Esida. We are creating the future." />
                <link rel="icon" href="/favicon.ico" />
                <title>Esida</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}