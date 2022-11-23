"use client";

import {useEffect, useRef} from "react";

type Circle = {
    position: {
        x: number;
        y: number;
    }
    radius: number;
    glow: number;
    color: string;
    velocity: {
        x: number;
        y: number;
    }
}

export default function GlowCanvas() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const circles = useRef<Circle[]>([]);

    useEffect(() => {
        const colors = [
            "#557AFC66",
            "#557AFC44",
            "#604CE044",
            "#604CE066",
        ];
        
        const animate = () => {
            const ctx = canvas.current?.getContext("2d");
            if (!ctx || !canvas.current) return;

            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

            const toDelete: number[] = [];

            for (const circle of circles.current) {
                const i = circles.current.indexOf(circle);

                // Update circle position
                circle.position.x += circle.velocity.x;
                circle.position.y += circle.velocity.y;

                // Update circle radius (it grows more if it's closer to the center)
                circle.radius += 0.1 * (1 - Math.abs(circle.position.x) / (canvas.current.width / 2));
                circle.radius = Math.max(1, Math.min(100, circle.radius));

                // Update circle glow
                circle.glow += 0.1 * (1 - Math.abs(circle.position.x) / (canvas.current.width / 2));
                circle.glow = Math.max(30, Math.min(280, circle.glow));

                // Update circle velocity
                circle.velocity.x += (Math.random() - 0.5) * 0.03;
                circle.velocity.y += (Math.random() - 0.5) * 0.03;

                circle.velocity.x = Math.max(-0.1, Math.min(0.1, circle.velocity.x));
                circle.velocity.y = Math.max(-0.1, Math.min(0.1, circle.velocity.y));

                // Update color alpha (it gets more transparent if it's closer to the center)
                const alpha = Math.floor(Math.min(Math.max(1 - Math.abs(circle.position.x) / (canvas.current.width / 2), 0.1), 0.2) * 256);
                circle.color = circle.color.slice(0, 7) + alpha.toString(16);

                // Check if circle is out of bounds
                if (circle.position.x > canvas.current.width / 2 + 100 || circle.position.x < -canvas.current.width / 2 - 100
                    || circle.position.y > canvas.current.height / 2 + 100 || circle.position.y < -canvas.current.height / 2 - 100) {
                    toDelete.push(i);
                }

                // Draw circle
                ctx.fillStyle = circle.color;

                ctx.beginPath();
                ctx.arc(canvas.current.width / 2 + circle.position.x, canvas.current.height / 2 + circle.position.y, circle.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.filter = `blur(${circle.glow}px)`;
            }

            // Delete circles that are out of bounds
            for (const i of toDelete) {
                circles.current.splice(i, 1);
            }

            // Add new circles
            if (circles.current.length < 10) {
                circles.current.push({
                    position: {
                        x: Math.random() * canvas.current.width - canvas.current.width / 2,
                        y: Math.random() * canvas.current.height - canvas.current.height / 2,
                    },
                    radius: Math.random() * 3,
                    glow: Math.random() * 40,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    velocity: {
                        x: 0,
                        y: 0
                    }
                });
            }

            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const resize = () => {
            if (!canvas.current) return;

            canvas.current.width = window.innerWidth - 16;
            canvas.current.height = window.innerHeight;
        }

        resize();
        window.addEventListener("resize", resize);
    }, [canvas]);

    return (
        <canvas ref={canvas} className="absolute pointer-events-none top-0 -z-10">
            <img src="/assets/images/glow.png" alt="" />
        </canvas>
    )

}