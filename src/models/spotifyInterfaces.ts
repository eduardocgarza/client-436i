export interface Artist {
  // Authentication
  _id: string;
  spotifyId: string;
  accounts: string[];
  // Data
  name: string;
  popularity: number;
  followers: number;
  genres: string[];
  image: {
    height: number;
    width: number;
    url: string;
  };
  url: string;
}

export interface Track {
  _id: string;
  spotifyId: string;
  accounts: string[];
  // Data
  name: string;
  popularity: number;
  url: string;
  image: {
    height: number;
    width: number;
    url: string;
  };
  audioPreviewURL: string;
  artists: Artist[];
}