import { Card, CardHeader } from "../ui/card";
import { MapPin, Star } from "lucide-react";

type MusicItem = {
    id: string;
    name?: string;
    title?: string;
    country?: string;
    rate?: number;

    artist?: {
        id: string;
        name: string;
    };

    album?: {
        id: string;
        title: string;
    };
};

type Props = {
    item: MusicItem;
};

function getItemTitle(item: MusicItem) {
    return item.name ?? item.title;
}

export default function MusicItemCard({ item }: Props) {
    return (
        <Card className="border-muted/60 hover:shadow-md transition translate-y-1 bg-background/70">
            <CardHeader className="py-4">
                <div className="space-y-2">
                    <p className="font-semibold text-sm text-foreground">
                        {getItemTitle(item)}
                    </p>

                    <div className="flex flex-col gap-1">
                        {item.country && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-blue-500" />
                                <span>{item.country}</span>
                            </div>
                        )}

                        {item.rate && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 text-yellow-500" strokeWidth={3} />

                                <span>{item.rate}</span>

                                {item.artist && (
                                    <span className="text-xs text-muted-foreground">
                                        • {item.artist.name}
                                    </span>
                                )}

                                {item.album && (
                                    <span className="text-xs text-muted-foreground">
                                        • {item.album.title}
                                    </span>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </CardHeader>
        </Card>
    );
}
