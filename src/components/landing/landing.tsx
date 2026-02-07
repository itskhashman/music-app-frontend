"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="flex flex-col items-center gap-8 text-center max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Welcome to <span className="text-primary">Our Music Web</span>
                </h1>

                <p className="text-muted-foreground text-lg">
                    Discover artists, albums, and songs all in one place.
                </p>

                <Button
                    size="lg"
                    className="px-10 py-6 text-xl"
                    onClick={() => router.push("/music")}
                >
                    Let’s go 🎵
                </Button>
            </div>
        </div>
    );
}
