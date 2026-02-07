
type Artist = {
    id: string;
    name: string;
    country: string;
    createdAt: string
};

type Album = {
    id: string;
    title: string;
    rate: number;
    artist: Artist;
};

type Song = {
    id: string;
    title: string;
    rate: number;
    album: Album;
};

export type GetMusicData = {
    artists: Artist[];
    albums: Album[];
    songs: Song[];
};
