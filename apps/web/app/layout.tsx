import './global.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="bg-darkness text-white">
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head lang="en">
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="esida. We are creating the future." />
                <link rel="icon" href="/favicon.ico" />
                <title>esida</title>
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}