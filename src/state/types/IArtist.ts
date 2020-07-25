export default interface IArtist {
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