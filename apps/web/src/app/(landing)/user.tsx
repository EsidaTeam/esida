"use client";

import { useSession, signOut } from "next-auth/react"
import Link from "next/link";

export default function User() {
    const { data: session, status } = useSession()

    return (
        <>
            {status === "loading" && (
                <div className="w-16 h-4 bg-neutral-600 animate-pulse rounded" />
            )}
            {status === "unauthenticated" && (
                <span>
                    <Link href="/api/auth/signin" className="text-white">
                        Sign in
                    </Link>
                </span>
            )}
            {status === "authenticated" && (
                <div className="flex flex-row gap-2">
                    <span>
                        {session.user?.name}
                    </span>
                    <button onClick={() => signOut()}>
                        🚪
                    </button>
                </div>
            )}
        </>
    )
}