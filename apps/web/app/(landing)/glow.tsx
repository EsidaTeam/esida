"use client";

import {useRef} from "react";

export default function GlowCanvas() {
    const canvas = useRef<HTMLCanvasElement>(null);

    return (
        <canvas ref={canvas} className="absolute right-1/2 top-1/2 translate-x-1/2 pointer-events-none -z-10">
            <img src="/assets/images/glow.png" alt="" />
        </canvas>
    )

}