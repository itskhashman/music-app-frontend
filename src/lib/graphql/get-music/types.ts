import { Artist, Album, Song } from "@/src/domain/music";

export type GetMusicData = {
    artists: Artist[];
    albums: Album[];
    songs: Song[];
};
