import Link from "next/link";
import Image from "next/image";
import User from "./user";

export default async function LandingLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <header className="px-16 py-6 flex justify-between items-center backdrop-blur sticky top-0 left-0 right-0">
                <Link href="/" className="font-bold text-3xl flex flex-row gap-4 w-fit">
                    <Image alt="esida logo" src="/assets/images/logo.png" width={36} height={36} quality={100} />
                    <span className="sm:block hidden">esida</span>
                </Link>
                <User />
            </header>
            <main>
                {children}
            </main>
        </>
    );
}