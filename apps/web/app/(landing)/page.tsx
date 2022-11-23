import GlowCanvas from './glow';

export default function Home() {
    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen">
                <p className="text-5xl text-center font-bold">
                    We are creating the future.
                </p>
                <GlowCanvas />
            </section>
        </>
    );
}
