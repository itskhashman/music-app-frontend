"use client";

import { useMemo } from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import type { GetMusicData } from "@/src/lib/graphql/get-music/types";
import { Mic, Disc3, Music } from "lucide-react";
import Spinner from "../common/Spinner";
import MusicItemCard from "./musicItemCard";
import { GET_ALL_MUSIC } from "@/src/lib/graphql/get-music/queries";
import { useQuery } from "@apollo/client/react";
import { Section } from "@/src/domain/music";

function getSectionIcon(label: Section["label"]) {
    switch (label) {
        case "Artists":
            return Mic;
        case "Albums":
            return Disc3;
        case "Songs":
            return Music;
    }
}

export default function MusicPage() {
    const { data, loading } = useQuery<GetMusicData>(GET_ALL_MUSIC, {
        fetchPolicy: "no-cache",
    });

    const sections: Section[] = useMemo(() => {
        if (!data) return [];
        return [
            { label: "Artists", items: data.artists },
            { label: "Albums", items: data.albums },
            { label: "Songs", items: data.songs },
        ];
    }, [data]);

    if (loading) {
        return (
            <Spinner text="Loading music data..." />
        );
    }

    if (!data) return <div className="container py-14">Failed to load data</div>;

    return (
        <div className="container py-14 space-y-10">
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Music Lists We Have</h1>
                <p className="text-muted-foreground">
                    Browse your artists, albums, and songs.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {sections.map((section) => {
                    const SectionIcon = getSectionIcon(section.label);

                    return (
                        <Card
                            key={section.label}
                            className="border-muted/60 bg-gradient-to-b from-background to-muted/20"
                        >
                            <CardHeader className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <SectionIcon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{section.label}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {section.items.length} items
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {section.items.map((item) => (
                                        <MusicItemCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
