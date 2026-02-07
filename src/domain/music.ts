export type Artist = {
    id: string;
    name: string;
    country: string;
    createdAt: string
};

export type Album = {
    id: string;
    title: string;
    rate: number;
    artist: Artist;
};

export type Song = {
    id: string;
    title: string;
    rate: number;
    album: Album;
};


export type Section =
    | { label: "Artists"; items: Artist[] }
    | { label: "Albums"; items: Album[] }
    | { label: "Songs"; items: Song[] };